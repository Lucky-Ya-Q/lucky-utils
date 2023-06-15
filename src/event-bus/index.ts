/*
{
  add:  [callback1, callback2]
  delete: [callback3]
}
*/
let callbacksObj = {}

export const eventBus: {
    on: (eventName: string, callback: (data: {}) => void) => void
    emit: (eventName: string, data: {}) => void
    off: (eventName: string) => void
} = {
    on: function (eventName, callback) {
        const callbacks = callbacksObj[eventName]
        if (callbacks) {
            callbacks.push(callback)
        } else {
            callbacksObj[eventName] = [callback]
        }
    },
    emit: function (eventName, data) {
        const callbacks = callbacksObj[eventName]
        if (callbacks && callbacks.length > 0) {
            callbacks.forEach(callback => {
                callback(data)
            })
        }
    },
    off: function (eventName) {
        if (eventName) {
            delete callbacksObj[eventName]
        } else {
            callbacksObj = {}
        }
    }
}
