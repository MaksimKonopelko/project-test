export function sendRequest(url, method, data) {
    const requestConfig = {
        url: url,
        method: method,
        body: data,
    }

    return fetch(url, requestConfig)
        .then(response => {
            return response.json();
        })
}
