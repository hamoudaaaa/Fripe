const { validationResult, check } = require("express-validator");

exports.registrevalidation = () => [
    check("name", "name are required").notEmpty(),
    check("email", "email are required ").isEmail(),
    check("cin", "cin minimum of 6 character").notEmpty().isLength({ min: 6 }),
    check("password", "password minimum of 8 character")
        .notEmpty()
        .isLength({ min: 6 }),
    check("phone", "phone are required").notEmpty().isLength({ min: 8 }),
];

exports.loginvalidate = () => [
    check("email", "should be email ").isEmail(),
    check("password", "minimum of 6 character").isLength({ min: 6 }),
];

exports.validation = (req, res, next) => {
    const result = validationResult(req);
    if (!result.isEmpty()) {
        return res.status(400).json({ errors: result.array() });
    }
    next();
};
