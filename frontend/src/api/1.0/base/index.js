/**
 * Загружает на сервер content
 * @param method - конечный url
 * @param content - json контент
 * @returns {Promise<Response>}
 */
function postJson(method, content) {
    return fetch('/api/1.0/' + method, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: content
    });
}

export default postJson;