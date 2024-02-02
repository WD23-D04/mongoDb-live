import { User } from '../schemas/userSchema.js';
import { handleError } from '../utils/handleError.js';
import { handleSingleRequest } from '../utils/handleSingleRequest.js';

// addSingleUser

export const addSingleUser = async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json(user);
  } catch (e) {
    handleError(res, e);
  }
};

// getSingleUser

export const getSingleUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    handleSingleRequest(req, res, user)
  } catch (e) {
    handleError(res, e);
  }
};

// getAllUsers

export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (e) {
    handleError(res, e);
  }
};

// udpateSingleUser

export const updateSingleUser = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    handleSingleRequest(req, res, user)
  } catch (e) {
    handleError(res, e);
  }
};

// deleteSingleUser

export const deleteSingleUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    handleSingleRequest(req, res, user)
  } catch (e) {
    handleError(res, e);
  }
};

export const deleteAllUsers = async (req, res) => {
  try {
    const users = await User.deleteMany();
    res.status(200).json(users);
  } catch (e) {
    handleError(res, e);
  }
};
