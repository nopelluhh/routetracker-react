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
            list = this.makeHash(list, 0)
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

    // internal

    makeHash(arr, val) {
        let hash = {}
        for (let i = 0, l = arr.length; i < l; i++) {
            hash[arr[i]] = val
        }
        return hash
    }
}

export default new π()
