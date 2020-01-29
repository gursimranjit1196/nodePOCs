exports.success = (response, data, message, code = 200) => {
    response.status(code).send({ message, data })
}

exports.error = (response, message = "Something went wrong.", code = 400) => {
    response.status(code).send({ message })
}