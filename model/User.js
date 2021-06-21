const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userauth = new Schema({
    name: { required: true, type: String },
    email: { required: true, type: String },
    password: { required: true, type: String },
    cin: { required: true, type: String },
    phone: Number,
    isAdmin: {
        type: Boolean,
        default: false,
    },
});
module.exports = mongoose.model("User", userauth);
