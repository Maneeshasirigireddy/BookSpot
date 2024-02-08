//import express and create mini express app
const express = require("express");
const bookApp = express.Router();
const multer=require('multer')
const storage=require("../config/cloudinaryConfig")
const path=require("path")

//multer
const upload=multer({
    storage:storage,
    fileFilter:(req,file,cb)=>{
        let ext=path.extname(file.originalname)
        if(ext!==".jpg" && ext!==".jpeg" && ext!==".png" && ext!==".webp"){
            cb(new Error("Unsupported file"),false)
            return
        }
        else{
            cb(null,true)
        }
    }
})

//import controllers
const {addBook,getBooks,searchBook,sellBook,buyBooks}=require("../controllers/book.controller");
const book = require("../models/book");


//Body Parser
bookApp.use(express.json());

//define routes
//add book
bookApp.post("/add-book",upload.single("image"), addBook);
bookApp.post("/sell-book/:email",upload.single("image"), sellBook);
bookApp.get("/allBooks",getBooks)
bookApp.get("/buy-books",buyBooks)
bookApp.get("/searchBook/:text",searchBook)


module.exports = bookApp;