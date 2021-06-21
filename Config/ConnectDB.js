const mongoose = require("mongoose");
require("dotenv").config({ path: "./Config/.env" });

const ConnectDB = async () => {
    try {
        await mongoose.connect(process.env.BD_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Database is conecting");
    } catch (error) {
        console.log({ msg: "data no connectinhg", error });
    }
};
module.exports = ConnectDB;
