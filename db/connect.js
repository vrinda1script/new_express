const mongoose = require("mongoose");
const { options } = require("../routes/products");

uri = "mongodb+srv://vrinda1:hK9pDQvSVgpNknbP@vrinda1.hobftzm.mongodb.net/vrinda1?retryWrites=true&w=majority";

const connectDB = () => {
    console.log("connect DB");
    return mongoose.connect(uri, {
      //  useNewUrlParser: true,
        //useUnifiedTopology: true,
    });
};
module.exports = connectDB;
