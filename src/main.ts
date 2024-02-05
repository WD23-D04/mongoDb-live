import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();
import { booksRouter } from './routers/bookRouter.js';
import { userRouter } from './routers/userRouter.js';
import { authorRouter } from './routers/authorRouter.js';
import { employeeRouter } from './routers/employeeRouter.js';
import { fakerRouter } from './routers/fakeDataRouter.js';
const app = express();
const port = 7575;

app.use(express.json());
app.use(cors());

app.use('/books', booksRouter);
app.use('/users', userRouter);
app.use('/authors', authorRouter);
app.use('/employees', employeeRouter);
app.use('/fake', fakerRouter);

const dbUrl = process.env.DB_URL;

const connectToDb = async () => {
  try {
    await mongoose.connect(dbUrl || '');
  } catch (e: unknown) {
    throw new Error((e as Error).message || 'Unknown error occurred');
  }
};

const startServer = async () => {
  try {
    await connectToDb();
    app.listen(port, () => console.log(`server is running on ${port}`));
  } catch (e: any) {
    throw new Error((e as Error).message || 'Unknown error occurred');
  }
};

startServer();
