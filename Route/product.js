const express = require("express");
const {
    Get_product_by_id,
    get_product_all,
} = require("../controllers/product");

const router = express.Router();

router.get("/", get_product_all);

router.get("/get_product/:id", Get_product_by_id);

module.exports = router;
