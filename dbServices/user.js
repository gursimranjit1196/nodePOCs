const User = require('../models/user')

const create = data => new User(data).save()


exports.create = create