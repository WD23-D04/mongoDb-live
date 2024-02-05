import { Request, Response } from 'express';
import { handleError } from '../utils/handleError.js';

import { Employee } from '../schemas/employeeSchema.js';

export const addOneEmployee = async (req: Request, res: Response) => {
  try {
    const employee = await Employee.create(req.body);
    res.status(200).json(employee);
  } catch (e) {
    handleError(res, e);
  }
};

export const findOneEmployee = async (req: Request, res: Response) => {
  try {
    const employee = await Employee.findById(req.params.id).populate('books');
    employee
      ? res.status(201).json(employee)
      : res.status(404).json({ message: `Entry not found: ${req.params.id} ` });
  } catch (e) {
    handleError(res, e);
  }
};

export const findEmployees = async (req: Request, res: Response) => {
  try {
    const employee = await Employee.find();
    res.status(201).json(employee);
  } catch (e) {
    handleError(res, e);
  }
};

export const updateEmployee = async (req: Request, res: Response) => {
  try {
    const employee = await Employee.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    employee
      ? res.status(201).json(employee)
      : res
          .status(404)
          .json({ message: `Entry was not found: ${req.params.id} ` });
  } catch (e) {
    handleError(res, e);
  }
};

export const deleteEmployee = async (req: Request, res: Response) => {
  try {
    const employee = await Employee.findByIdAndDelete(req.params.id);
    employee
      ? res.status(201).json(employee)
      : res
          .status(404)
          .json({ message: `Entry was not found: ${req.params.id} ` });
  } catch (e) {
    handleError(res, e);
  }
};
