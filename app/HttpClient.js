const BASE_URL = "http://localhost:8080"

const post = function (path, body) {
    return fetch(`${BASE_URL}${path}`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    })
}

const get = function (path) {
    return fetch(`${BASE_URL}${path}`).then((res) => {
        return res.json()
    })
}

const httpClient = {post, get}

export default httpClient