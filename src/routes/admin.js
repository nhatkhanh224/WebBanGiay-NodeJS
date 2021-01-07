const express = require("express");

const router = express.Router();

const upload = require("../app/middleware/uploadMiddleware");
const adminController = require("../app/controllers/AdminController");
const authMiddleware = require("../app/middleware/AuthMiddleware");

router.get("/product-create", adminController.create);
router.get("/product-edit-:id", adminController.edit);
router.post("/products/handle-form-actions", adminController.handleFormAction);
router.post("/product-store", adminController.store);
router.get("/products", adminController.show);
router.put("/products/:id", adminController.update);
router.delete("/products/:id", adminController.destroy);
router.get("/product-trash", adminController.trash);
router.patch("/products/:id/restore", adminController.restore);
router.delete('/products/:id/force', adminController.forceDelete);
router.use("/", authMiddleware.requireAuth, adminController.index);

module.exports = router;
