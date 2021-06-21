const express = require("express");
const {
    registre,
    login,
    add_to_cart,
    delete_cart,
    getproduct_cart,
    getuserbyid,
} = require("../controllers/user");
const isauth = require("../midleware/isauthjwt");
const {
    registrevalidation,
    validation,
    loginvalidate,
} = require("../midleware/registevalidation");
const User = require("../model/User");
const router = express.Router();

// @Desc: Register
// @Method: POST
// @PATH: http://localhost:5000/project/user
// DATA : name,phone,,email,password,cin
router.post("/", registrevalidation(), validation, registre);
// @Desc: login
// @Method: POST
// @PATH: http://localhost:5000/project/user/login
// DATA : name,phone,,email,password,cin
router.post("/login", loginvalidate(), validation, login);

router.post("/addto_cart/:id", isauth, add_to_cart);
router.delete("/delete_cart/:id", isauth, delete_cart);
router.get("/getcart", isauth, getproduct_cart);
// @Desc: current
// @Method: Get
// @PATH: http://localhost:5000/project/user/current
//@ parameter: req.headers
router.get("/getid/:id", isauth, getuserbyid);
router.get("/current", isauth, (req, res) => {
    res.send({ msg: "authorized", user: req.user }); // msg & user
});
router.get("/:userid", async (req, res) => {
    const id = req.params.userid;
    // const { userid } = req.params;
    try {
        const usera = await User.findOne({ _id: id });

        res.status(200).send({ msg: "look for user", usera });
    } catch (error) {
        res.status(500).send("error to get user");
    }
});
module.exports = router;
