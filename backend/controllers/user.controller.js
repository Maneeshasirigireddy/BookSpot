//import express-async-handler to handle asynchronous errors
const expressAsyncHandler = require("express-async-handler");

//import bcryptjs
const bcrypt = require("bcryptjs");

//import jsonwebtoken
const jwt = require("jsonwebtoken");

//configure dotenv to read environment variables
require("dotenv").config();

//import db
const db=require("../models/index")



//-------------------------------------------Registration-------------------------------------//
exports.registeration = expressAsyncHandler(async (req, res) => {
  
    //check if user already registered
    let user = await db.User.findOne({ where: { email: req.body.email } });
    
    //if user already registered
    if (user !== null) {
      res.send({ message: "user already registered" });
    }
    //if user did not register
    else {
        //get the roleId
        let roleId=await db.Role.findOne({where:{roleName:'user'}})
        req.body.roleId=roleId.dataValues.id
      req.body.email = req.body.email.toLowerCase();
      req.body.password = await bcrypt.hash(req.body.password, 5);
      await db.User.create(req.body);
      res.status(201).send({ message: "User registered" });
    }
  
});

// LOGIN
exports.login = expressAsyncHandler(async (req, res) => {
    //check user exists or not
    let user = await db.User.findOne({
      where: {
        email: req.body.email,
      },
    });
  
    
  
    //if user exists check password
    if (user) {
      //get the role
    let role = await db.Role.findOne({
      where: { id: user.dataValues.roleId },
      attributes: {
        exclude: ["id", "createdAt", "updatedAt"],
      },
    });
    //compare the password
      let result = await bcrypt.compare(
        req.body.password,
        user.dataValues.password
      );
  
      //Correct Password
      if (result) {
        //generate jwt token
        let token = jwt.sign(
          { role: role.dataValues.roleName },
          process.env.SECRET_KEY,
          { expiresIn: "10h" }
        );
        //remove password from user.dataValues
        delete user.dataValues.password;
        //send  response
        res.send({
          message: "Login Success",
          token: token,
          user: user.dataValues,
        });
      }
      //Incorrect password
      else {
        res.status(401).send({ payload: "Incorrect Password" });
      }
    }
    //if no user exists
    else {
      res.status(401).send({ payload: "Please Register" });
    }
  });
  