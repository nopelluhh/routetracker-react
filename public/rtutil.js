class π {
    countBy(arr, comp) {
        if (!comp) 
            comp = (a) => a
        let grouped = {}
        for (let i = 0, l = arr.length; i < l; i++) {
            let a = arr[i]
            if (comp(a) in grouped) {
                grouped[comp(a)]++
            } else {
                grouped[comp(a)] = 1
            }
        }
        return grouped
    }

    buckets(arr, list) {
        if (typeof list === 'string') 
            list = list.split(' ')
        if (list instanceof Array) 
            list = this._makeHash(list, 0)
        for (let i = 0, l = arr.length; i < l; i++) {
            list[arr[i]]++
        }
        return list
    }

    range(a, b) {
        let start = b
            ? a
            : 0
        let end = b
            ? b
            : a
        let arr = []

        for (let i = start; i < end; i++) {
            arr.push(i)
        }

        return arr
    }

    expandSimpleObject(obj) {
        obj = JSON.parse(JSON.stringify(obj))

        for (var key in obj) {
            if (key.indexOf('.') !== -1)
            {
                this._parseDotNotation(key, obj[key], obj)
            }            
        }
        return obj
    }


    // internal

    _makeHash(arr, val) {
        let hash = {}
        for (let i = 0, l = arr.length; i < l; i++) {
            hash[arr[i]] = val
        }
        return hash
    }

    _parseDotNotation(str, val, obj) {
        var currentObj = obj,
            keys = str.split('.'),
            i, l = Math.max(1, keys.length - 1),
            key

        for (i = 0; i < l; ++i) {
            key = keys[i]
            currentObj[key] = currentObj[key] || {}
            currentObj = currentObj[key]
        }
        
        currentObj[keys[i]] = val
        delete obj[str]
    }


    
}

export default new π()

export const renderIf = condition => element => condition && element

export const dateMath = (function() {

    const day = 8.64e7
    const week = 6.048e+8
    
    function weeksOld(day) {
        const ms = Date.now() - new Date(day).getTime()

        const weeks = ms/week

        return Math.round(weeks)
    }

    return {
        day,
        week,
        weeksOld
    }

})()