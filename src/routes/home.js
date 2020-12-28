const express = require('express');
const router = express.Router();
const homeController = require("../app/controllers/HomeController");
router.get('/cart', homeController.cart);
router.get('/:slug-:id', homeController.showDetails);
router.get('/:slug', homeController.show);
router.get('/',homeController.index);
module.exports = router;