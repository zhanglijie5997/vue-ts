// 所有請求集合
import Http from '../http';
import log from '../log';
import qs from 'qs'
const HttpCreate = new Http();
export const index = async () => {
    let list: object = {
        title: 1,
        body: '123'
    }
    const data = await HttpCreate.createClient('/posts', {
        method: 'post',
        data: qs.stringify(list)
    })
        .then((res: any) => {
            console.log(res);

            if (res.statusCode === 0) {
                // log.log(res.result)
                return res['result'];
            }
        })
        .catch((err: Error) => {
            console.log(err)
        })
    return data;
}