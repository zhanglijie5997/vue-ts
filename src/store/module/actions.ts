import types from '@/types/index'
import { index } from '@/utils/requests/request.ts'
import log from '@/utils/log';
// 接口类型
interface type {
    commit: Function
}
export default {
    async changeUserMsg({ commit }: type): Promise<any> {
        const item = await index();
        // log.log(typeof commit, 909090)
        // log.log(await index(), item, 6666)
        commit(types.PEOPLE_MSG, item)
    }
}