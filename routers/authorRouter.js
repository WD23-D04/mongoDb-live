import express from 'express';

import {
  addSingleAuthor,
  getManyAuthors,
  getSingleAuthor,
  udpateSingleAuthor,
  deleteSingleAuthor,
} from '../controllers/authorController.js';

export const authorRouter = express.Router();

authorRouter.route('/').get(getManyAuthors).post(addSingleAuthor);
authorRouter
  .route('/:id')
  .get(getSingleAuthor)
  .patch(udpateSingleAuthor)
  .delete(deleteSingleAuthor);
