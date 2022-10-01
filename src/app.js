var express = require("express");
const UserRouter = require("./routes/userRoute");
const productRouter = require("./routes/productRoute");
const cartRouter = require("./routes/cartRoute");
const orderRouter = require("./routes/orderRoute")
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const mongoose = require("mongoose");
require("dotenv").config();
const PORT = 9000;
var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use("/", productRouter);
app.use("/", UserRouter);
app.use("/", cartRouter);
app.use("/", orderRouter);

mongoose.connect(process.env.mongoDB);
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
