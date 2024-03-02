import { Router } from "express";
import userService from "./userService"

const userRouter = Router();

userRouter.get("/", (req, res, next) => {
  userService.test();
  res.json({message: "user route test"})
});

userRouter.post('/', (req, res, next) => {
  if (userService.validate(req.body)) {
    return res.status(400).json({message: "Request invalid"})
  }
  console.log("body", req.body)
  res.json({ message: 'user route post', data: req.body });
});

export default userRouter;