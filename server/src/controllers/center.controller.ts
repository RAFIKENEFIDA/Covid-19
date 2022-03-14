import { Request, Response } from 'express';
import {ObjectId } from 'mongoose';
import { catchAsync } from '@utils/catchAsync';
import { Center } from '@models/Center';
import { User } from '@models/User';
import {Responsable} from '@models/Responsable';
const Communcontroller=require('@controllers/commun.controller')
var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");
// const config = require("@config/auth.config");

// create center
export const createCenter = catchAsync(async (req: Request, res: Response) => {
  const body = req.body;

  const center:any = await Center.create(body);


  console.log(center);

  // res.status(201).json({
  //   center,
  // });

  interface IResponsable {
    nom: string;
    prenom: string;
    email: string;
    password: string;
    centreId:ObjectId;
}

  try{
    let data=req.body;
    let generatPassword=Math.random().toString(36).substr(2) + req.body.prenom.split("@", 1);
    let password = bcrypt.hashSync(generatPassword, 8)
    data.password=password;

    let objet:IResponsable={ 
      nom:req.body.nom,
      prenom:req.body.prenom,
      email:req.body.email,
      password:password,
      centreId:center.id
    };
  
    const responsable= await Responsable.create(objet);
  
   await responsable.save((err:any, manager:any)=>{
  
      if(err){
          res.status(500).send({message:err})
      }
  })
  res.send({ message: "Respinsable was registered successfully!" });
    
    Communcontroller.sendEmail(generatPassword,data.email);



  }catch(err){
    console.log(err);
  }

});

// show stats
export const showStats = catchAsync(async (req: Request, res: Response) => {
  // const { shot } = req.body;

  const [first, second, third] = await User.aggregate([
    {
      $group: {
        _id: '$vaccinations.shot',
        count: {
          $count: {},
        },
      },
    },
  ]);

  const stats = {
    first,
    second,
    third,
  };

  res.status(200).json({
    stats,
  });
});

export const getCenters = catchAsync(async (req: Request, res: Response) => {
  const centers = await Center.find();

  res.status(200).json({
    centers,
  });
});
