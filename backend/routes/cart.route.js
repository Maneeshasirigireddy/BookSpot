//import express and create mini express app
const express = require("express");
const cartApp = express.Router();



//import controllers
const {addBookToCart,getBookFromCart,quantity,removeFromCart}=require("../controllers/cart.controller")



//Body Parser
cartApp.use(express.json());

//define routes
//add book
cartApp.post("/add-book", addBookToCart);
cartApp.get("/allBooks/:userId",getBookFromCart)
cartApp.put("/quantity/:id",quantity)
cartApp.delete("/removeFromCart/:id",removeFromCart)



module.exports = cartApp;