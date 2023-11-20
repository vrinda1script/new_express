const express = require("express");
const routes = express.Router();

const {
    getAllProducts,
    getAllProductsTest,

} = require("../controller/products");

routes.route("/").get(getAllProducts);
routes.route("/testing").get(getAllProductsTest);

module.exports = routes;
