const express = require("express");
const authController = require("../app/controllers/AuthController");

const router = express.Router();
router.get("/login-form", authController.loginForm);
router.post("/login", authController.login);
module.exports = router;