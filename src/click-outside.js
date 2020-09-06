let callbacks = []
let onClickDocument = (e) => {
    let {
        target
    } = e
    callbacks.forEach((item) => {
        if (target === item.el || item.el.contains(target)) {
            return
        } else {
            item.callback()
        }
    })
}
document.addEventListener('click', onClickDocument)


let removeListener = () => {
    document.removeEventListener('click', onClickDocument)
}

export default {
    bind: function (el, binding, vnode) {
        callbacks.push({
            el,
            callback: binding.value
        })
    }
}
export {
    removeListener
}