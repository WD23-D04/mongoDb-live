import { Author } from '../schemas/authorSchema.js';
import { handleError } from '../utils/handleError.js';
import { handleSingleRequest } from '../utils/handleSingleRequest.js';
export const addSingleAuthor = async (req, res) => {
  try {
    const author = await Author.create(req.body);
    res.status(201).json(author);
  } catch (e) {
    handleError(e, res);
  }
};

export const getSingleAuthor = async (req, res) => {
  try {
    const author = await Author.findById(req.params.id);
    handleSingleRequest(req, res, author);
  } catch (e) {
    handleError(e, res);
  }
};

export const getManyAuthors = async (req, res) => {
  try {
    const authors = await Author.find();
    res.status(200).json(authors);
  } catch (e) {
    handleError(e, res);
  }
};

export const udpateSingleAuthor = async (req, res) => {
  try {
    const author = await Author.update(req.params.id, req.body, { new: true });
    handleSingleRequest(req, res, author);
  } catch (e) {
    handleError(e, res);
  }
};

export const deleteSingleAuthor = async (req, res) => {
  try {
    const author = await Author.delete(req.params.id);
    handleSingleRequest(req, res, author);
  } catch (e) {
    handleError(e, res);
  }
};
