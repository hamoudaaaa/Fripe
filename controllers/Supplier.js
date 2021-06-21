const bcrypt = require("bcrypt");
const saltRounds = 10;
const jwt = require("jsonwebtoken");
const Product = require("../model/Product");
const Supplier = require("../model/Supplier");

exports.registresupp = async (req, res) => {
    try {
        const findsupp = await Supplier.findOne({ email: req.body.email });
        if (findsupp)
            return res
                .status(400)
                .send({ errors: [{ msg: "email are exists" }] });
        const newsup = new Supplier({ ...req.body });
        //tawa bech thachi ll password
        const hashedpassword = await bcrypt.hash(req.body.password, saltRounds);
        newsup.password = hashedpassword;

        await newsup.save();
        const token = jwt.sign(
            {
                id: newsup._id, //hatheka  id eli bechtaamel bih decoded mbaed
            },
            process.env.SECRETT_KEY,

            { expiresIn: "3h" }
        );

        res.status(200).send({
            msg: "supplier suucessfuly saved",
            supplier: newsup,
            token, // traja3 supplier token msg
        });
    } catch (error) {
        res.status(500).send({ errors: [{ msg: "error to save supplier" }] });
    }
};
exports.loginsupp = async (req, res) => {
    try {
        const findsupp = await Supplier.findOne({ email: req.body.email });
        // ken mech mawjoud
        // bad credential
        if (!findsupp) {
            return res
                .status(400)
                .send({ errors: [{ msg: "invalid email or password" }] });
        }
        // test password
        //   password eli dkhllou mawjoud wala lee

        const comparePass = await bcrypt.compare(
            req.body.password,
            findsupp.password
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
                id: findsupp._id,
            },
            process.env.SECRETT_KEY,

            { expiresIn: "3h" }
        );
        res.status(200).send({
            msg: "login successfully",
            supplier: findsupp,
            token,
        }); // trj33 fel supplier token msg
    } catch (error) {
        res.status(500).send({ errors: [{ msg: "can not login" }] });
    }
};

exports.add_product = async (req, res) => {
    const token = req.headers["authorization"];
    const decoded = jwt.verify(token, process.env.SECRETT_KEY);
    // console.log(decoded.id);
    const supplier = await Supplier.findOne({ _id: decoded.id }).select(
        "-password"
    );

    try {
        const { name, categorie, description, rating, price, image } = req.body;
        // req.body name,categorie,description,rating,price,barcode

        const newProduct = new Product({
            supplier: supplier._id,
            name,
            categorie,
            description,
            rating,
            price,
            image,
        });
        await newProduct.save();
        res.status(200).send({
            msg: "Product added successfully",
            Product: newProduct,
        });
    } catch (error) {
        res.status(400).send({ errors: [{ msg: "not saved" }] });
    }
};
exports.update_product = async (req, res) => {
    const token = req.headers["authorization"];
    const decoded = jwt.verify(token, process.env.SECRETT_KEY);
    const supplier = await Supplier.findOne({ _id: decoded.id }).select(
        "-password"
    );
    try {
        // req.params
        const { id } = req.params;
        console.log(id);

        // req.body modification
        const modification = req.body;

        // Find supplier from author

        if (!supplier) {
            return res.status(400).send({ msg: "Supplier not found" });
        }
        // Updating product
        let result = await Product.updateOne(
            { _id: id, supplier: supplier._id },
            { $set: { ...modification } }
        );
        res.status(200).send({ msg: "Product updated successfully", result });
    } catch (error) {
        console.log(error);
        res.status(400).send({
            errors: [{ msg: "can not update Product", error }],
        });
    }
};
exports.delete_product = async (req, res) => {
    const token = req.headers["authorization"];
    const decoded = jwt.verify(token, process.env.SECRETT_KEY);
    const supplier = await Supplier.findOne({ _id: decoded.id }).select(
        "-password"
    );
    try {
        // req.params id
        const { id } = req.params;

        if (!supplier) {
            return res.status(400).send({ msg: "Supplier not found" });
        }

        // DELETE product
        await Product.deleteOne({ _id: id, supplier: supplier._id });

        res.status(200).send({ msg: "Product deleted successfully" });
    } catch (error) {
        console.log(error);
        res.status(400).send({
            errors: [{ msg: "can not delete Product", error }],
        });
    }
};
exports.getproductsall = async (req, res) => {
    try {
        const supplier = req.supp;
        // const { id } = req.params;
        if (!supplier) {
            return res.status(400).send({ msg: "Supplier not found" });
        }

        const products = await Product.find({
            supplier: supplier._id,
        });

        res.status(200).send({
            msg: "Here is all the products for you",
            products,
        });
    } catch (error) {
        console.log(error);
        res.status(400).send({
            errors: [{ msg: "Can not Get products  for suupplier" }],
        });
    }
};
exports.getsupplierbyid = async (req, res) => {
    const token = req.headers["authorization"];
    const decoded = jwt.verify(token, process.env.SECRETT_KEY);
    const supplier = await Supplier.findOne({ _id: decoded.id }).select(
        "-password"
    );
    try {
        // req.params.id
        const { id } = req.params;
        const sup = await Supplier.findOne({ _id: id, supplier: supplier._id });
        res.status(200).send({
            msg: "look for supplier ",
            supplier: sup,
        });
    } catch (error) {
        res.status(500).send({ errors: [{ msg: "error to get supplier" }] });
    }
};
