const express = require("express");
const {
    registresupp,
    loginsupp,
    add_product,
    update_product,
    delete_product,
    getproductsall,
} = require("../controllers/Supplier");
const isauthsupp = require("../midleware/isauthsupp");
const {
    loginvalidsupp,
    validationsupp,
    registrevalidsupp,
    addproductvalidation,
} = require("../midleware/registresupp");

const router = express.Router();
// @Desc: Register
// @Method: POST
// @PATH: http://localhost:5000/project/supplier
// DATA : name,phone,,email,password
router.post("/", registrevalidsupp(), validationsupp, registresupp);

// @Desc: login
// @Method: POST
// @PATH: http://localhost:5000/project/supplier/login
// DATA : email,password
router.post("/login", loginvalidsupp(), validationsupp, loginsupp);
// @Desc: addproduct
// @Method: POST
// @PATH: http://localhost:5000/project/supplier/addproduct
// DATA :  req.body {name,categorie,description,rating,price} req.header {token}
router.post(
    "/addproduct",
    isauthsupp,
    addproductvalidation(),
    validationsupp,
    add_product
);
// @Desc: updateproduct
// @Method: POST
// @PATH: http://localhost:5000/project/supplier/updateproduct/id
// DATA :  req.body {name,categorie,description,rating,price} req.header {token}
router.put("/updateproduct/:id", isauthsupp, update_product);

// @Desc: deleteproduct
// @Method: POST
// @PATH: http://localhost:5000/project/supplier/deleteproduct
// DATA :  req.body {name,categorie,description,rating,price} req.header {token}
router.delete("/deleteproduct/:id", isauthsupp, delete_product);

// @Method: Get
// @PATH: http://localhost:5000/project/supplier
//@ parameter: req.headers
router.get("/", isauthsupp, getproductsall);

// @Desc: current
// @Method: Get
// @PATH: http://localhost:5000/project/supplier/current
//@ parameter: req.headers
router.get("/current", isauthsupp, (req, res) => {
    res.send({ msg: "authorized", supplier: req.supp }); // msg & supplier
});

module.exports = router;
