import { Request, Response } from 'express';
import {ObjectId } from 'mongoose';
import { catchAsync } from '@utils/catchAsync';
import { Center } from '@models/Center';
import { User } from '@models/User';
import {Responsable} from '@models/Responsable';
const Communcontroller=require('@controllers/commun.controller')
var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");
const config = require("@config/auth.config");


export const signin= catchAsync(async(req:Request, res:Response)  =>{

    try{
        // check admin if exist by email
        Responsable.findOne({
          email:req.body.email,
      }).exec((err, responsable)=>{ 
         
          // if error retun error
          if(err){
           res.status(500).send({ message: err });
  
          }
          console.log(responsable)
          // if deosn't exist return response is not found
          if(!responsable){
              res.status(203).send({ message: "Email or Password Invalid" });
          }
          // check password if correct, by comparing passwords
  
          else{
  
            var passwordIsValid = bcrypt.compareSync(
              req.body.password,
              responsable.password
            );
          // return invalid password if passwords doesn't identique  
            console.log(passwordIsValid);
            if (!passwordIsValid) {
              return res.status(203).send({ message: "Invalid Password!" });
            };
  
           var token=jwt.sign({responsable},config.secret,{
              expiresIn: 86400, // 24 hours
           })
  
           var authorities = [];
  
        //    req.session.token = token;  
  
           res.status(202).send({
             token:token,
             data:responsable,
           });
  
  
          }

      })
    
    }catch(err){
        console.log(err)
    }
  
    
         
  })