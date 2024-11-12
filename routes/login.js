var express = require("express");
var router = express.Router();
var loginController = require("../controller/LoginController");
var checkLogin = require("../middleware/checkLogin");

router.get("/", checkLogin.noRequireLogin, loginController.login);
router.post("/", checkLogin.noRequireLogin, loginController.login);

module.exports = router;
