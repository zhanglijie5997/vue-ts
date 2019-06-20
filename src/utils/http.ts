import axios, { AxiosRequestConfig, AxiosResponse} from 'axios';
import store from '@/store/index';
import log from './log';


class Http {
    public urlList: any;

    public constructor() {
        this.urlList = new Map()
    }

    /**
     * 请求拦截，相应拦截
     * @param instance  请求器
     * @param url      地址
     */
    private _client(instance: any,url?: string) {
        
        // log.log(process.env.NODE_ENV,99999)
        // 请求拦截
        instance.interceptors.request.use((config:AxiosRequestConfig): any => {
           
            return config;
        },(err:Error) => {
            Promise.reject(err)
        })

        // 响应拦截
        instance.interceptors.response.use((response: AxiosResponse): any => {
            // instance.default.headers.common['Authorization'] = store.state.token
            // 判断是否有相同请求正在进行中,有则取消
            if (this.urlList.get(url)) {
                this.cancelRequest();
                return Promise.reject('请求进行中')
            }
            this.urlList.set(url, true);
            if(response.status === 200 && !!response.data) {
                // 请求成功将请求删除
                this.urlList.delete(url)
                return Promise.resolve(response.data);
            }
        },(err:Error) => {
            Promise.reject(err)
        })
        
    }

    /**
     * 建立请求
     * @param url 地址
     */
    public async createClient(url: string,{...params}) {
        const httpCreate = axios.create({
            baseURL: process.env.NODE_ENV === 'development' ? '/api':'/',
            timeout: 5000,
            ...params
        });
        await this._client(httpCreate,url);
        return httpCreate(url,{...params});
    }

    // 如果上一个请求没有结束就取消上一个请求
    public cancelRequest():any {
        const cancelToken = axios.CancelToken;
        const source = cancelToken.source();
        return source;
    }

    
    public getRequest(fn:Function):Function {
        return fn;
    }
}


export default Http;