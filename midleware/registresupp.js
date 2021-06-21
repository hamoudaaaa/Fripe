const { validationResult, check } = require("express-validator");

exports.registrevalidsupp = () => [
    check("name", "name are required").notEmpty(),
    check("email", "email are required ").isEmail(),

    check("password", "password minimum of 8 character")
        .notEmpty()
        .isLength({ min: 6 }),
    check("phone", "phone are required").notEmpty().isLength({ min: 8 }),
];

exports.loginvalidsupp = () => [
    check("email", "should be email ").isEmail(),
    check("password", "minimum of 6 character").isLength({ min: 6 }),
];
exports.addproductvalidation = () => [
    check("name", "name are required").notEmpty(),
    check("description", "description are required").notEmpty(),
    check("categorie", "Categorie are required").notEmpty(),
    check("price", "price are required").notEmpty(),
    check("rating", "rating is required true").notEmpty(),
    check("image", "image are rquired").notEmpty(),
];

exports.validationsupp = (req, res, next) => {
    const result = validationResult(req);
    if (!result.isEmpty()) {
        return res.status(400).json({ errors: result.array() });
    }
    next();
};
