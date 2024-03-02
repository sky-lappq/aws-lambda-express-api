import serverless from 'serverless-http';
import express from 'express';


const app = express();

app.get('/', (req, res, next) => {
  return res.status(200).json({
    message: 'Hello from root 333!',
  });
});

app.get('/path', (req, res, next) => {
  return res.status(200).json({
    message: 'Hello from path!',
  });
});

app.use((req, res, next) => {
  return res.status(404).json({
    error: 'Not Found',
  });
});

module.exports.handler = serverless(app);
