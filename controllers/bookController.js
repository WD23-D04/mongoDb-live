import { Book } from '../schemas/bookSchema.js';
import { handleError } from '../utils/handleError.js';
import { handleSingleRequest } from '../utils/handleSingleRequest.js';

export const addSingleBook = async (req, res) => {
  try {
    const book = await Book.create(req.body);
    res.status(201).json(book);
  } catch (e) {
    res.status(500).json(e);
  }
};

export const getSingleBook = async (req, res) => {
  try {
    /* const book = await Book.find({_id : ObjectId(req.params.id)}) */
    const book = await Book.findById(req.params.id);
    handleSingleRequest(req, res, book)
  } catch (e) {
    res.status(500).json(e);
  }
};

export const getAllBooks = async (req, res) => {
  try {
    const books = await Book.find();
    await res.status(200).json(books);
  } catch (e) {
    handleError(res, e);
  }
};

export const updateSingleBook = async (req, res) => {
  try {
    const book = await Book.findByIdAndUpdate(req.params.id, req.body);
    handleSingleRequest(req, res, book)
  } catch (e) {
    handleError(res, e);
  }
};

export const deleteSingleBook = async (req, res) => {
  try {
    /* const book = await Book.deleteOne({_id : ObjectId(req.params.id)}); */
    const book = await Book.findByIdAndDelete(req.params.id);
    handleSingleRequest(req, res, book)
  } catch (e) {
    handleError(res, e);
  }
};

export const deleteAllBooks = async (req, res) => {
  try {
    const books = await Book.deleteMany();
    res.status(200).json(books);
  } catch (e) {
    handleError(res, e);
  }
};
