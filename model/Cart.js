const mongoose = require("mongoose");
const { Schema } = mongoose;
const cartSchema = new Schema({
    User: { require: true, type: Schema.Types.ObjectId, ref: "User" },
    Produit: { require: true, type: Schema.Types.ObjectId, ref: "product" },
    Supplier: { require: true, type: Schema.Types.ObjectId, ref: "Supplier" },
    quantite: { type: Number, default: 1 },
});

module.exports = Cart = mongoose.model("cart", cartSchema);
