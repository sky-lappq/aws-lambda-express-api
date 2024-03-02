import { Request, Response, NextFunction } from "express";
import {verify} from "jsonwebtoken"

const adminAuthorize = (req: Request, res: Response, next: NextFunction) => {
  const authorizeToken = req.header("Authorization");
  if (!authorizeToken) {
    return res.status(403).json({message: "Permission denied"})
  }
  try {
    const check = verify(authorizeToken, "secret-string");
    if (!check) {
      return res.status(403).json({message: "Permission denied"})
    }
    next()
  } catch (e) {
    return res.status(403).json({message: "Permission denied"})
  }
}

export default adminAuthorize;