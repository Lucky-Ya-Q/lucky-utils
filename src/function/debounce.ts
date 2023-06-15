/**
 * 节流
 * @param callback
 * @param wait
 */
export function debounce(callback: () => void, wait: number) {
    let start = 0
    // 返回一个事件监听函数(也就是节流函数)
    return function (event) {
        // 只有当距离上次处理的时间间隔超过了wait时, 才执行处理事件的函数
        const current = Date.now()
        if (current - start > wait) {
            callback.call(this, event) // 需要指定this和参数
            start = current
        }
    }
}
