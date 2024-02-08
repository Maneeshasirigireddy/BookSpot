//import express-async-handler to handle asynchronous errors
const expressAsyncHandler = require("express-async-handler");

//import bcryptjs
const bcrypt = require("bcryptjs");

//import jsonwebtoken
const jwt = require("jsonwebtoken");
const { Op } = require("sequelize");

//configure dotenv to read environment variables
require("dotenv").config();


//import db
const db = require("../models/index");
const nodeOutlook = require("nodejs-nodemailer-outlook");

//-------------------------------------------Add a book-------------------------------------//
exports.addBook = expressAsyncHandler(async (req, res) => {
  try{ console.log(req.body);
    let bookObj = JSON.parse(req.body.bookObj);
    bookObj.image = req.file.path;
    console.log(bookObj.image);
    let book = await db.Book.create(bookObj);
    res
      .status(201)
      .send({ message: "Book Added Successfully", payload: book.dataValues });}
      catch(err){
        console.log("ERROR",err)
      }
 
});

//------------------------------------------- sell book-------------------------------------//
exports.sellBook = expressAsyncHandler(async (req, res) => {
  try{ console.log(req.body);
    let bookObj = JSON.parse(req.body.bookObj);
    bookObj.image = req.file.path;
    console.log(bookObj.image);
    let book = await db.sellingBook.create(bookObj);
    //get admin emails
    let admins=await db.User.findAll({where:{roleId:1}})
    console.log(admins)
    admins=admins.map((admin)=>admin.dataValues.email)
    nodeOutlook.sendEmail({
      auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASSWORD,
      },
      from: process.env.EMAIL,
      to: [req.params.email,...admins],
      subject: "Request made to sell a book",

      text: `Hey requested to sell a book
      Book Details :-
      ${book.dataValues}`,
      onError: (e) => {
        console.log("on error ",e);
       
      },
      onSuccess: (i) => {
        console.log("success message",i);
   
      },
    });
    res
      .status(201)
      .send({ message: "Book Requested to sell ", payload: book.dataValues });}
      catch(err){
        console.log("ERROR",err)
      }
 
});



//-------------------------------------------get books-------------------------------------//
exports.getBooks = expressAsyncHandler(async (req, res) => {
  let books = await db.Book.findAll();
  books = books.map((bookObj, index) => {
    return bookObj.dataValues;
  });
  console.log(books);
  res.send({ message: "All Books", payload: books });
});

//-------------------------------------------get buy books-------------------------------------//
exports.buyBooks = expressAsyncHandler(async (req, res) => {
  let books = await db.sellingBook.findAll();
  books = books.map((bookObj, index) => {
    return bookObj.dataValues;
  });
  console.log(books);
  res.send({ message: "All Books", payload: books });
});


//-------------------------------------------search books-------------------------------------//
exports.searchBook = expressAsyncHandler(async (req, res) => {
  let searchItem = req.params.text;
  let result = await db.Book.findAll({
    where: {
      [Op.or]: {
        bookName: {
          [Op.like]: `%${searchItem}%`},
        author: { [Op.like]: `%${searchItem}%` },
        desc: { [Op.like]: `%${searchItem}%` },
        zenre: { [Op.like]: `%${searchItem}%` },
        // categories: { [Op.like]: `%${searchItem}%` },
      },
    },
  });
  result=result.map((bookObj)=>{
   return bookObj.dataValues
  })
  res.send({message:"Search Result",payload:result})
});
