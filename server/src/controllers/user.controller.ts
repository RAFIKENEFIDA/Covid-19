import { Request, Response } from 'express';
import { catchAsync } from '@utils/catchAsync';
import { User } from '@models/User';
import {Center} from '@models/Center';


export const createUser = catchAsync(async (req: Request, res: Response) => {
  const body = req.body;
  let centerId=await Center.where("name").equals(body.centre);
  console.log(centerId[0].id);
  body.centreId=centerId[0].id;
  console.log(body)
  const user = await User.create(body);

  res.status(201).json({
    user,
  });
});
