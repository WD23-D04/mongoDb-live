import { Request, Response } from 'express';
import { Book } from '../schemas/bookSchema.js';
import { handleError } from '../utils/handleError.js';

export const addSingleBook = async (req: Request, res: Response) => {
  try {
    const book = await Book.create(req.body);
    res.status(201).json(book);
  } catch (e) {
    res.status(500).json(e);
  }
};

export const getSingleBook = async (req: Request, res: Response) => {
  try {
    /* const book = await Book.find({_id : ObjectId(req.params.id)}) */
    const book = await Book.findById(req.params.id);
    book
      ? res.status(200).json(book)
      : res.status(404).json({ msg: `${req.params.id} not found` });
  } catch (e) {
    res.status(500).json(e);
  }
};

export const getAllBooks = async (req: Request, res: Response) => {
  try {
    const books = await Book.find();
    res.status(200).json(books);
  } catch (e) {
    handleError(res, e);
  }
};

export const updateSingleBook = async (req: Request, res: Response) => {
  try {
    const book = await Book.findByIdAndUpdate(req.params.id, req.body);
    book
      ? res.status(200).json(book)
      : res.status(404).json({ msg: `${req.params.id} not found` });
  } catch (e) {
    handleError(res, e);
  }
};

export const deleteSingleBook = async (req: Request, res: Response) => {
  try {
    /* const book = await Book.deleteOne({_id : ObjectId(req.params.id)}); */
    const book = await Book.findByIdAndDelete(req.params.id);

    book
      ? res.status(200).json(book)
      : res.status(404).json({ msg: `${req.params.id} not found` });
  } catch (e) {
    handleError(res, e);
  }
};

export const deleteAllBooks = async (req: Request, res: Response) => {
  try {
    const books = await Book.deleteMany();
    res.status(200).json(books);
  } catch (e) {
    handleError(res, e);
  }
};
