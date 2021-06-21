const User = require("../model/User");
const jwt = require("jsonwebtoken");

const isauth = async (req, res, next) => {
    try {
        //    import token
        // headers=> authorization
        const token = req.headers["authorization"];
        // console.log(token);
        //   si mathamch token
        if (!token) {
            return res
                .status(401)
                .send({ errors: [{ msg: "you are not authorized1" }] });
        }
        // you are not authorized
        // on doit verifie si token est valide
        // decoded mtaa token wala id lahneee
        const decoded = jwt.verify(token, process.env.SECRET_KEY);
        // test if the user exist with that id
        const user = await User.findOne({ _id: decoded.id }).select(
            "-password"
        );
        if (!user) {
            return res
                .status(401)
                .send({ errors: [{ msg: "you are not authorized2" }] });
        }

        // si non
        // req bech nzid user
        // if user exist
        req.user = user;
        // next
        next();
    } catch (error) {
        res.status(401).send({ errors: [{ msg: "you are not authorized" }] });
    }
};

module.exports = isauth;
