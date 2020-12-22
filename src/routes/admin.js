const express = require("express");

const router = express.Router();

const upload = require("../app/middleware/uploadMiddleware");
const adminController = require("../app/controllers/AdminController");
router.get("/product-create", adminController.create);
router.get("/product-update-:id", adminController.update);
router.post("/product-store", adminController.store);
router.get("/products", adminController.show);
router.use("/", adminController.index);

module.exports = router;
