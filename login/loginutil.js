export const height = (_, el) => el.clientHeight

export const top = (rect) => {
    return rect.top
}

export const blockScroll = ({top}) => {
    const val = ((top / document.documentElement.clientHeight) * 100)
    return Math.max(-100, Math.min(100, val))
}

export function byPercent(min, max, per) {
    if (arguments.length === 2) {
        per = max
        max = min
        min = 0
    }

    return min + Math.abs(min - max) * (per / 100)
}

export function clamp(n, a, b) {
    if(a !== null && n < a) {
        return a
    }

    if(b !== null & n > b) {
        return b
    }

    return n
}

export function translate(targStart, targEnd, scaleStart, scaleEnd, limit) {
    return function(x) {
        let d = Math.abs(targEnd - targStart)
        let p = (x - targStart) / d
        let r = scaleStart + (scaleEnd-scaleStart) * p
        return limit? clamp(r, scaleStart, scaleEnd) : r
    }
}

export function debounce(func, wait) {
    var timeout
    return function() {
        var context = this, args = arguments
        var later = function() {
            timeout = null
            func.apply(context, args)
        }
        clearTimeout(timeout)
        timeout = setTimeout(later, wait)
    }
}