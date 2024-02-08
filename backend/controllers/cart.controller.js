//import express-async-handler to handle asynchronous errors
const expressAsyncHandler = require("express-async-handler");




const { Op } = require("sequelize");

//configure dotenv to read environment variables
require("dotenv").config();

//import db
const db = require("../models/index");

//-------------------------------------------Add to cart-------------------------------------//
exports.addBookToCart = expressAsyncHandler(async (req, res) => {
  console.log(req.body);
 
  
  let cart = await db.Cart.create(req.body);
  res
    .status(201)
    .send({ message: "Book Added To cart Successfully", payload: cart.dataValues });
});



//-------------------------------------------get books from cart-------------------------------------//
exports.getBookFromCart = expressAsyncHandler(async (req, res) => {
  let cart = await db.Cart.findAll({where:{userId:req.params.userId}, include: {
    model: db.Book,
   
  },
  });
  let cartItems = cart.map((cartObj, index) => {
    return cartObj.dataValues;
  });

  res.send({ message: "All Books from Cart", payload: cartItems });
});


//------------------------------------------update quantity in cart-------------------------------------//
exports.quantity = expressAsyncHandler(async (req, res) => {
  let cart = await db.Cart.update({quantity:req.body.quantity},{where:{id:req.params.id}
  });
 

  res.send({ message: "Quantity updated" });
});


//------------------------------------------delete item for art cart-------------------------------------//
exports.removeFromCart = expressAsyncHandler(async (req, res) => {
  let cart = await db.Cart.destroy({where:{id:req.params.id}
  });
 

  res.send({ message: "removed from cart " });
});

