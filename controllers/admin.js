const bcrypt = require("bcrypt");
const saltRounds = 10;
const jwt = require("jsonwebtoken");
const Cart = require("../model/Cart");
const Product = require("../model/Product");
const Supplier = require("../model/Supplier");
const User = require("../model/User");

exports.get_suppliers = async (req, res) => {
    const token = req.headers["authorization"];
    const decoded = jwt.verify(token, process.env.SECRET_KEY);

    const user = await User.findOne({ _id: decoded.id }).select("-password");
    try {
        if (!user) {
            return res.status(400).send({ msg: "user not found" });
        }

        const suppliers = await Supplier.find();
        res.status(200).send({ msg: "Here is All the Suppliers", suppliers });
    } catch (error) {
        res.status(400).send({
            errors: [{ msg: "Can not get Suppliers", error }],
        });
    }
};

// exports.getsupplierbyid = async (req, res) => {
//     try {
//         // req.params.id
//         const { id } = req.params;
//         const sup = await Supplier.findOne({ _id: id });
//         res.status(200).send({
//             msg: "look for supplier ",
//             supplier: sup,
//         });
//     } catch (error) {
//         res.status(500).send({ errors: [{ msg: "error to get supplier" }] });
//     }
// };
exports.get_user = async (req, res) => {
    try {
        const user = await User.find();
        res.status(200).send({ msg: "Here is All the user", user });
    } catch (error) {
        res.status(400).send({
            errors: [{ msg: "Can not get user", error }],
        });
    }
};
exports.updateuser = async (req, res) => {
    try {
        // req.params.id
        const { id } = req.params;
        const updateee = await User.findOneAndUpdate(
            { _id: id },
            { $set: { ...req.body } }
        );
        res.status(200).send({
            msg: " user are modified ",
            user: updateee,
        });
    } catch (error) {
        res.status(500).send({ errors: [{ msg: "error to user supplier" }] });
    }
};
exports.updatesupplier = async (req, res) => {
    try {
        // req.params.id
        const { id } = req.params;
        const update = await Supplier.findOneAndUpdate(
            { _id: id },
            { $set: { ...req.body } }
        );
        res.status(200).send({
            msg: " supplier are modified ",
            supplier: update,
        });
    } catch (error) {
        res.status(500).send({ errors: [{ msg: "error to update supplier" }] });
    }
};
exports.deletesupplier = async (req, res) => {
    const { id } = req.params;
    try {
        const delet = await Cart.deleteMany({ Supplier: id });
        await Product.deleteMany({ supplier: id });
        await Supplier.findByIdAndDelete({ _id: id });

        res.status(200).send({ msg: "supplier are removed", supplier: delet });
    } catch (error) {
        res.status(500).send({ errors: [{ msg: "error to remove supplier" }] });
    }
};
exports.get_product = async (req, res) => {
    try {
        const product = await Product.find();
        res.status(200).send({ msg: "there are all product", product });
    } catch (error) {
        res.status(400).send({
            errors: [{ msg: "Can not get product", error }],
        });
    }
};
exports.delete_product = async (req, res) => {
    const { id } = req.params;
    try {
        const deleteee = await Product.findByIdAndDelete({ _id: id });
        res.status(200).send({ msg: "product are removed", Product: deleteee });
    } catch (error) {
        res.status(500).send({ errors: [{ msg: "error to remove Product" }] });
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
        if (!supplier) {
            return res.status(400).send({ msg: "Supplier not found" });
        }
        const sup = await Supplier.findOne({ _id: id, supplier: supplier._id });
        res.status(200).send({
            msg: "look for supplier ",
            supplier: sup,
        });
    } catch (error) {
        res.status(500).send({ errors: [{ msg: "error to get supplier" }] });
    }
};
exports.delete_user = async (req, res) => {
    const { id } = req.params;
    try {
        const deelete = await User.findByIdAndDelete({ _id: id });
        res.status(200).send({ msg: "user are removed", user: deelete });
    } catch (error) {
        res.status(500).send({ errors: [{ msg: "error to remove user" }] });
    }
};
