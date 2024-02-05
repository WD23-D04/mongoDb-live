import express from 'express';

import {
  addSingleBook,
  getAllBooks,
  getSingleBook,
  updateSingleBook,
  deleteSingleBook,
  deleteAllBooks,
} from '../controllers/bookController.js';

export const booksRouter = express.Router();

booksRouter
  .route('/')
  .post(addSingleBook)
  .get(getAllBooks)
  .delete(deleteAllBooks);
booksRouter
  .route('/:id')
  .get(getSingleBook)
  .delete(deleteSingleBook)
  .patch(updateSingleBook);
