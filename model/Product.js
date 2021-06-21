const mongoose = require("mongoose");
const { Schema } = mongoose;
const productSchema = new Schema({
    supplier: { require: true, type: Schema.Types.ObjectId, ref: "Supplier" },
    name: {
        type: String,
        require: true,
    },
    categorie: {
        type: String,
        require: true,
    },
    description: {
        type: String,
        require: true,
    },
    rating: {
        type: Number,
        require: true,
    },

    price: {
        type: Number,
        require: true,
    },
    image: {
        type: String,
        require: true,
    },
});

module.exports = Product = mongoose.model("product", productSchema);
