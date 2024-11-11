const express = require('express')
const router = express.Router();
const homeController = require('../controller/HomeController');
router.get('/',homeController );
module.exports = router;