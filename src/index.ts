require('dotenv').config();
import express from 'express';
import mapRouter from './routers';
const app = express();
const PORT = process.env.PORT || 3000;
console.log(process.env.PORT);
app.use(mapRouter);
app.listen(PORT, () => {
  console.log(`Server Running on Port: ${PORT}`);
});