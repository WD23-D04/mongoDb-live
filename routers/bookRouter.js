import express from 'express';

import {
  addSingleBook,
  getAllBooks,
  getSingleBook,
  updateSingleBook,
  deleteSingleBook,
} from '../controllers/bookController.js';

export const booksRouter = express.Router();

booksRouter.route('/').post(addSingleBook).get(getAllBooks);
booksRouter
  .route('/:id')
  .get(getSingleBook)
  .delete(deleteSingleBook)
  .patch(updateSingleBook);