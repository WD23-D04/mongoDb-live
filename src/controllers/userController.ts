import { Request, Response } from 'express';
import { User } from '../schemas/userSchema.js';
import { handleError } from '../utils/handleError.js';

// addSingleUser

export const addSingleUser = async (req: Request, res: Response) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json(user);
  } catch (e) {
    handleError(res, e);
  }
};

// getSingleUser

export const getSingleUser = async (req: Request, res: Response) => {
  try {
    const user = await User.findById(req.params.id).populate('books');
    user
      ? res.status(200).json(user)
      : res.status(404).json({ msg: `${req.params.id} not found` });
  } catch (e) {
    handleError(res, e);
  }
};

// getAllUsers

export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (e) {
    handleError(res, e);
  }
};

// udpateSingleUser

export const updateSingleUser = async (req: Request, res: Response) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    user
      ? res.status(200).json(user)
      : res.status(404).json({ msg: `${req.params.id} not found` });
  } catch (e) {
    handleError(res, e);
  }
};

// deleteSingleUser

export const deleteSingleUser = async (req: Request, res: Response) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    user
      ? res.status(200).json(user)
      : res.status(404).json({ msg: `${req.params.id} not found` });
  } catch (e) {
    handleError(res, e);
  }
};

export const deleteAllUsers = async (req: Request, res: Response) => {
  try {
    const users = await User.deleteMany();
    res.status(200).json(users);
  } catch (e) {
    handleError(res, e);
  }
};
