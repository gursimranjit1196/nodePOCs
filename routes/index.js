var express = require('express');
var router = express.Router();

// Router Files
var userRouter = require("./users");


router.use('/users', userRouter)


module.exports = router;
