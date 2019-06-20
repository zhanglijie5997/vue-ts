import { Notify } from 'vant';
/**
 * 通知信息
 * @param msg 展示信息
 */
export const notify = (msg: string): Object => {
        return Notify({
            message:msg,
            duration:1500,
            background:'#ff6860',
            color:'#fff',
            onClick:() => {
                Notify.clear();
            }
        })
}