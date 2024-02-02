import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();
import { booksRouter } from './routers/bookRouter.js';
import { userRouter } from './routers/userRouter.js';
import { authorRouter } from './routers/authorRouter.js';

const app = express();
const port = 7575;

app.use(express.json());
app.use(cors());

app.use('/books', booksRouter);
app.use('/users', userRouter);
app.use('/authors', authorRouter);
const dbUrl = process.env.DB_URL;

const connectToDb = async () => {
  try {
    await mongoose.connect(dbUrl);
  } catch (e) {
    console.error(e);
  }
};

const startServer = async () => {
  try {
    await connectToDb()
    app.listen(port, console.log(`server is running on ${port}`))
  } catch(e){
    throw new Error(e)
  }
}

startServer()