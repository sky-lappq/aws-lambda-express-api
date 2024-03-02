import serverless from 'serverless-http';
import express from 'express';
import { config } from 'dotenv';

import userRouter from "./user/userRouter"
import adminRouter from './admin/adminRouter';

config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Setup routing / controler
app.use("/user", userRouter);
app.use("/admin", adminRouter);

app.get('/', (req, res, next) => {
  return res.status(200).json({
    status: 'Health check success!!!' + process.env.DB_URL,
  });
});

app.use((req, res, next) => {
  return res.status(404).json({
    error: 'Not Found',
  });
});

module.exports.handler = serverless(app);
