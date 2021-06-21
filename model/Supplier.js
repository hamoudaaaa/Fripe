const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const supp = new Schema({
    name: { required: true, type: String },
    email: { required: true, type: String },
    password: { required: true, type: String },
    phone: Number,
});
module.exports = mongoose.model("Supplier", supp);
