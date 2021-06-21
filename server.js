console.clear();
//import express
const express = require("express");
const ConnectDB = require("./Config/ConnectDB");

//instance mtaa app
const app = express();

ConnectDB();
app.use(express.json());

//ROUTE user
app.use("/project/user", require("./Route/user"));
app.use("/project/supplier", require("./Route/supplier"));
app.use("/project/product", require("./Route/product"));
app.use("/project", require("./Route/admin"));
app.use("/project/image", require("./Route/image"));

// port
const port = 5000;
app.listen(port, () => {
    console.log(`le port is running on ${port}`);
});
// if (process.env.NODE_ENV === "production") {
//     app.use(express.static("client/build"));
//     app.get("*", (req, res) => {
//         res.sendFile(path.join(__dirname, "client", "build", "index.html"));
//     });
// } else {
//     require("dotenv").config();
// }
