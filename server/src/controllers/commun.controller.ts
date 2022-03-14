const jwt = require("jsonwebtoken");
// const config = require("../config/auth.config");
// const logger=require('../config/logger');
import { Request, Response } from 'express';



// logout  for user

// exports.logout = async (req:Request, res:Response) => {
//     try {
//       req.session = null 
      
//       return res.status(200).send({ message: "You've been signed out!" });
//     } catch (err) {

//       logger.error(err.message);

//     }
//   };

  // function for send email 

  exports.sendEmail=async(password:string,email:string)=>{



    var nodemailer = require('nodemailer');
    var transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'testcoding975@gmail.com',
        pass: 'testCoding1998'
      }
    });    
    var mailOptions = {
      from: 'testcoding975@gmail.com',
      to: email,
      subject: 'Voila votre nouveau compte, avec le password',
      text:'Votre password est : '+  password
    };
    transporter.sendMail(mailOptions, function(error:Error, info:string){
        
    });
  }