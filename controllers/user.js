const User = require("../model/User");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const jwt = require("jsonwebtoken");
const Product = require("../model/Product");
const Cart = require("../model/Cart");
const Supplier = require("../model/Supplier");

exports.registre = async (req, res) => {
    try {
        //bech tchouf email
        const finduser = await User.findOne({ email: req.body.email });
        if (finduser)
            return res
                .status(400)
                .send({ errors: [{ msg: "email are exists" }] });
        const newuser = new User({ ...req.body });

        //tawa bech thachi ll password
        const hashedpassword = await bcrypt.hash(req.body.password, saltRounds);
        newuser.password = hashedpassword;

        await newuser.save();

        // cree un token
        const token = jwt.sign(
            {
                id: newuser._id, //hatheka  id eli bechtaamel bih decoded mbaed
            },
            process.env.SECRET_KEY,

            { expiresIn: "3h" }
        );

        res.status(200).send({
            msg: "user suucessfuly saved",
            user: newuser,
            token,
        });
    } catch (error) {
        res.status(500).send({ errors: [{ msg: "error to save user" }] });
    }
};

exports.login = async (req, res) => {
    // req.body email,password
    try {
        //   test si email mawjoud
        const finduser = await User.findOne({ email: req.body.email });
        // ken mech mawjoud
        // bad credential
        if (!finduser) {
            return res
                .status(400)
                .send({ errors: [{ msg: "invalid email or password" }] });
        }
        // test password
        //   password eli dkhllou mawjoud wala lee

        const comparePass = await bcrypt.compare(
            req.body.password,
            finduser.password
        );
        //   ken mech kifkif
        // bad crential
        if (!comparePass) {
            return res
                .status(400)
                .send({ errors: [{ msg: "invalid email or password" }] });
        }
        const token = jwt.sign(
            {
                id: finduser._id,
            },
            process.env.SECRET_KEY,

            { expiresIn: "3h" }
        );
        res.status(200).send({
            msg: "login successfully",
            user: finduser,
            token,
        }); // trj33 fel user token msg
    } catch (error) {
        res.status(500).send({ errors: [{ msg: "can not login" }] });
    }
};
exports.add_to_cart = async (req, res) => {
    try {
        const id = req.params.id; // id produit
        const user = req.user;
        const find_produit = await Product.findById(id);
        const find_supplier = await Supplier.findById(find_produit.supplier);

        const find_cart = await Cart.findOne({ User: user._id, Produit: id });
        if (!find_cart) {
            const newcard = new Cart({
                User: user,
                Produit: find_produit,
                Supplier: find_supplier,
            });
            await newcard.save();
            return res
                .status(200)
                .send({ msg: "Product added to cart", newcard });
        } else {
            await Cart.updateOne(
                { User: user, Produit: id },
                { $inc: { quantite: 1 } }
            );
            return res.status(200).send({ msg: " quantite + cart" });
        }
    } catch (error) {
        console.log(error);
        res.status(400).send({
            errors: [{ msg: "Can not add to cartt", error }],
        });
    }
};

exports.delete_cart = async (req, res) => {
    const token = req.headers["authorization"];
    const decoded = jwt.verify(token, process.env.SECRET_KEY);

    const user = await User.findOne({ _id: decoded.id }).select("-password");
    try {
        // req.params id
        const { id } = req.params; //id prroduct
        // const user = req.user;
        const find_produitt = await Product.findById(id);
        if (!find_produitt)
            return res.status(400).send({ msg: "produit not found" });
        if (!user) {
            return res.status(400).send({ msg: "user not found" });
        }

        // DELETE product Produit: find_produitt
        await Cart.findOneAndDelete({ Produit: id, User: user._id });
        console.log(id);
        res.status(200).send({ msg: "Product deleted successfully from cart" });
    } catch (error) {
        console.log(error);
        res.status(400).send({
            errors: [{ msg: "can not delete Product from cart ", error }],
        });
    }
};
exports.getproduct_cart = async (req, res) => {
    const user = req.user;
    try {
        // const { id } = req.params;
        if (!user) {
            return res.status(400).send({ msg: "user not found" });
        }

        const products = await Cart.find({
            User: user._id,
        }).populate("Produit ");

        res.status(200).send({
            msg: "Here is all the products for you",
            productss: products,
        });
    } catch (error) {
        console.log(error);
        res.status(400).send({
            errors: [{ msg: "Can not Get products cart  for user " }],
        });
    }
};

exports.getuserbyid = async (req, res) => {
    const user = req.user;
    try {
        // req.params.id
        const { id } = req.params;
        if (!supplier) {
            return res.status(400).send({ msg: "user not found" });
        }
        const sup = await User.findOne({ _id: id, user: user._id });
        res.status(200).send({
            msg: "look for supplier ",
            user: user,
        });
    } catch (error) {
        res.status(500).send({ errors: [{ msg: "error to get supplier" }] });
    }
};
