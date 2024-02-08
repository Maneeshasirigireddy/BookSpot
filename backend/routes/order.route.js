//import express and create mini express app
const express = require("express");
const orderApp = express.Router();

//import controllers
const {createPaymentSession,successfullPayment,addOrder,successfullOrders}=require("../controllers/order.controller")


//Body Parser
orderApp.use(express.json());

//define routes
orderApp.post("/add-order",addOrder)
//register
orderApp.get("/createPaymentSession/:bookId/:bookType/:price", createPaymentSession);

//login
orderApp.get("/successfullPayment/:session_id/:userId", successfullPayment);

orderApp.get("/successfullOrders/:userId",successfullOrders)





//export router object
module.exports = orderApp;