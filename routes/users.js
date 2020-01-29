const express = require('express');
const router = express.Router();

// Controllers
const userControlle = require("../controllers/user")


router.get('/test', (req, res, next) => {
  res.send('Routed to /Users');
});


router.get('/', userControlle.createUser);


module.exports = router;
