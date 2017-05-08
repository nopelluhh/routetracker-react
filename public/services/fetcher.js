class fetcher {
    constructor() {
        this.prefix = '/api/'
    }

    get(resource, params) {
        return fetch(this.prefix + resource + paramToQuery(params))
            .then(res => res.json())
    }

    create(resource, data) {
        return fetch(this.prefix + resource, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: formatBody(data)
        })
    }

    update(resource, data) {
        return fetcher(this.prefix + resource, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: formatBody(data)
        })
    }
}

export default new fetcher()

function paramToQuery(obj) {
    if (!obj) return ''

    return '?' +
        Object.keys(obj).map(function(key) {
            return encodeURIComponent(key) + '=' +
                encodeURIComponent(obj[key])
        }).join('&')
}

function formatBody(obj) {
    return JSON.stringify(obj)
}
