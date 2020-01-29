const userDbService = require('../dbServices/user')
const { responseHandler } = require('../utils')


exports.createUser = async (req, res, err) => {
    try {
        let data = await userDbService.create(req.body)
        responseHandler.success(res, data, "User created successfully.")
    } catch (error) {
        responseHandler.error(res, error.message)
    }
}
