require("dotenv").config();
const express = require("express");
const app = express();
const connectDB = require("./db/connect");

const PORT = process.env.PORT || 5000;
const products_routes = require("./routes/products");
const { connect } = require("mongoose");

app.get("/", (req, res) => {
    res.send("Hi, i am Ayush");
});
app.use("/api/products", products_routes);

const start = async () => {
    try {
        await connectDB();
        app.listen(PORT, () => {
            console.log('${PORT} yes i am connect');
        });
    } catch (error) {
        console.log(error);
    }
};
start();