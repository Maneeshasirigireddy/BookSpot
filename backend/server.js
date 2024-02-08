//import express
const express = require("express");
const app = express();

const cors=require("cors")

//import sequelize from db.config
const db=require("./models/index")


//configuring dotnev
require("dotenv").config();

//starting server
const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Server Running On ${PORT}. . .`));

app.use(cors())

//Checking the DB Connection
db.sequelize
  .authenticate()
  .then(() => console.log("DB Connected"))
  .catch((err) => console.log(err.message));

//import routes
const userApp=require("./routes/user.route")
const bookApp=require("./routes/book.route")
const orderApp=require("./routes/order.route")
const cartApp =require("./routes/cart.route")

//defining routes
app.use('/user',userApp)
app.use("/book",bookApp)
app.use("/order",orderApp)
app.use("/cart",cartApp)


//Error Handler for Invalid Path
app.use("*", (req, res) => res.send({ message: "Invalid Path" }));

//Error Handler
app.use((err, req, res, next) => {
  res.send({ message: err.message });
});