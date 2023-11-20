const connectDB = require("./db/connect");
const Product = require("./models/collection");
const ProductJson = require("./product.json");

const start = async () => {
    try {
        await connectDB();
        await Product.create(ProductJson);
    } catch (error) {
        console.log(error);
    }
};
start();
