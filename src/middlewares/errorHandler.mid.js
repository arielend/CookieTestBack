function errorHandler(error, request, response, next) {
    console.log(error)

    return response.json({
        statusCode: error.statusCode || 500,
        message: error.message || "CODER API ERROR",
    })
}

export default errorHandler