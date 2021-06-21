const Product = require("../model/Product");

exports.get_product_all = async (req, res) => {
    try {
        const product = await Product.find();
        res.status(200).send({ msg: "there are all product", product });
    } catch (error) {
        res.status(400).send({
            errors: [{ msg: "Can not get product", error }],
        });
    }
};

exports.Get_product_by_id = async (req, res) => {
    try {
        // Get id from params
        const { id } = req.params;

        const result = await Product.findById(id).populate(
            "supplier",
            "name phone email  -_id"
        );
        if (!result) {
            res.status(400).send({
                errors: [{ msg: "Can not get the product" }],
            });
        }
        res.status(200).send({ msg: "here  the product", product: result });
    } catch (error) {
        console.log(error);
        res.status(400).send({
            errors: [{ msg: "Can not get  the product", error }],
        });
    }
};
