const Product = require("../models/collection");
const getAllProducts = async (req, res) => {
    const myData = await Product.find({});
    res.status(200).json({ myData});
};
const getAllProductsTest = async (req, res) => {
    const myData = await Product.find(req.query).select("name");
    res.status(200).json({ myData });
};
 
module.exports = {
    getAllProducts, getAllProductsTest

};