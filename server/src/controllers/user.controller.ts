import { Request, Response } from 'express';
import { catchAsync } from '@utils/catchAsync';
import { User } from '@models/User';

export const create = catchAsync(async (req: Request, res: Response) => {
  const body = req.body;

  const user = await User.create(body);

  if(user){
    res.status(201).json({
      message:"Informations est bien enregister",
      user:    user,

    });
  }


});
