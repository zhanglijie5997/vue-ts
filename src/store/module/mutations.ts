import types from '@/types/index'
import log from '@/utils/log';
import { localstorage } from '@/utils/setLocalstorage/setLocalstorage'
interface type {
    num: string;
    peopleMsg: object[];
    token:string,
    page: number
}
export default {
    [types.USER_MSG](state: type, num: string): void {
        state.num = state.num + num;
        console.log(num, state.num,66669999);
    },
    [types.PEOPLE_MSG](state: type,data: object[]):void {
        state.peopleMsg = data;
    },
    [types.USER_TOKEN](state: type,data: string): void {
        state.token = data;
    },
    [types.CHOIC_PAGE](state: type,data:number): void {
        state.page = data;

        console.log(state.page,'page');
        
        localstorage("page",state.page);
        
    }
}
