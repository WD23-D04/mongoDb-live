import { Request, Response } from 'express';
import { Author } from '../schemas/authorSchema.js';
import { handleError } from '../utils/handleError.js';

export const addSingleAuthor = async (req: Request, res: Response) => {
  try {
    const author = await Author.create(req.body);
    res.status(201).json(author);
  } catch (e) {
    handleError(res, e);
  }
};

export const getSingleAuthor = async (req: Request, res: Response) => {
  try {
    const author = await Author.findById(req.params.id).populate('books');
    author
    ? res.status(200).json(author)
    : res.status(404).json({ msg: `${req.params.id} not found` });
  } catch (e) {
    handleError(res, e);
  }
};

export const getManyAuthors = async (req: Request, res: Response) => {
  try {
    const authors = await Author.find();
    res.status(200).json(authors);
  } catch (e) {
    handleError(res, e);
  }
};

export const udpateSingleAuthor = async (req: Request, res: Response) => {
  try {
    const author = await Author.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    author
    ? res.status(200).json(author)
    : res.status(404).json({ msg: `${req.params.id} not found` });
  } catch (e) {
    handleError(res, e);
  }
};

export const deleteSingleAuthor = async (req: Request, res: Response) => {
  try {
    const author = await Author.findByIdAndDelete(req.params.id);
    author
    ? res.status(200).json(author)
    : res.status(404).json({ msg: `${req.params.id} not found` });
  } catch (e) {
    handleError(res, e);
  }
};
