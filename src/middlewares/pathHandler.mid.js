function pathHandler(request, response, next) {
    return response.json({
        statusCode: 404,
        message: `${request.method} ${request.url} not found path`,
    })
}
export default pathHandler