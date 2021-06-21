const express = require("express");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const jwt = require("jsonwebtoken");

const router = express.Router();
const {
    getsupplierbyid,
    updatesupplier,
    deletesupplier,
    get_suppliers,
    get_product,
    updateuser,
    get_user,
    delete_product,
    delete_user,
} = require("../controllers/admin");
const isauthsupp = require("../midleware/isauthsupp");
//getallsupplioer
//path : http://localhost:5000/project/get_supplier

router.put("/upadate/:id", updateuser);

router.get("/get_supplier", get_suppliers);
// path: http://localhost:5000/project/get_user
router.get("/get_user", get_user);
// get  getsupplierbyid
// path: http://localhost:5000/project/getsupplier/id

router.get("/getsupplier/:id", isauthsupp, getsupplierbyid);

// update supplier
// path: http://localhost:5000/project/updatesupplier/id
router.put("/updatesupplier/:id", updatesupplier);

// router.put("/Updateuser/:id", updateuser);

// router.put("/updateusersupplier/:id", updateuser);
//delete supplier
// path: http://localhost:5000/project/deletesupplier/id
router.delete("/deletesupplier/:id", deletesupplier);

router.delete("/deleteproduct/:id", delete_product);
router.delete("/deleteuser/:id", delete_user);
// getallproduct
// path :http://localhost:5000/project/get_product
router.get("/get_product", get_product);

module.exports = router;
