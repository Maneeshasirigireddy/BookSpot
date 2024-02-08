//import express and create mini express app
const express = require("express");
const userApp = express.Router();

//import controllers
const {registeration,login}=require("../controllers/user.controller")


//Body Parser
userApp.use(express.json());

//define routes
//register
userApp.post("/register", registeration);

//login
userApp.post("/login", login);

// //forgot Password
// userApp.post("/:email/forgotPassword", forgotPassword);

// //Reset Password
// userApp.put("/:email/resetPassword", resetPassword);



//export router object
module.exports = userApp;