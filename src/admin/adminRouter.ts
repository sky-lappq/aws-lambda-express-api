import { Router } from "express";
import adminService from "./adminService"
import adminAuthorize from "./authorizeMiddleware";
;
const adminRouter = Router();

adminRouter.get("/", adminAuthorize, (req, res, next) => {
  adminService.test();
  res.json({message: "admin route test"})
});

adminRouter.post('/login', (req, res, next) => {
  if (adminService.validate(req.body)) {
    return res.status(400).json({message: "Request invalid"})
  }
  console.log("body", req.body)
  const token = adminService.login(req.body);
  if (!!token) {
    res.json({ message: 'admin route post', token });
  } else {
    res.status(400).json()
  }
});

export default adminRouter;