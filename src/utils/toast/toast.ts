import { Toast } from "vant";
/**
 * 
 * @param status   加载状态 success or fail
 * @param msg      提示文字
 * @param duration 加载展示时间
 */
const toast = async (status: string, msg: string, duration: number): Promise<any> => {
    return await Toast({
        type: "loading",
        mask: true,
        message: "加载中",
        duration: 2000,
        onClose: () => {
            Toast({
                type: status,
                duration: duration,
                message: msg
            });
        }
    });
}
export {
    toast
}