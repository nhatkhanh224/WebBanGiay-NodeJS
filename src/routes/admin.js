const express = require('express');
const router = express.Router();
const adminController = require("../app/controllers/AdminController");
router.use('/product',adminController.product);
router.use('/',adminController.index);
module.exports = router;