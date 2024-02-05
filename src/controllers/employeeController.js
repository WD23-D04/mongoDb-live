import { handleError } from '../utils/handleError.js';
import { Employee } from '../schemas/employeeSchema.js';

export const addOneEmployee = async (req, res) => {
  try {
    const employee = await Employee.create(req.body);
    res.status(200).json(employee);
  } catch (e) {
    handleError(e, res);
  }
};

export const findOneEmployee = async (req, res) => {
  try {
    const employee = await Employee.findById(req.params.id).populate('books');
    employee
      ? res.status(201).json(employee)
      : res.status(404).json({ message: `Entry not found: ${req.params.id} ` });
  } catch (e) {
    handleError(e, res);
  }
};

export const findEmployees = async (req, res) => {
  try {
    const employee = await Employee.find();
    res.status(201).json(employee);
  } catch (e) {
    handleError(e, res);
  }
};

export const updateEmployee = async (req, res) => {
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
    handleError(e, res);
  }
};

export const deleteEmployee = async (req, res) => {
  try {
    const employee = await Employee.findByIdAndDelete(req.params.id);
    employee
      ? res.status(201).json(employee)
      : res
          .status(404)
          .json({ message: `Entry was not found: ${req.params.id} ` });
  } catch (e) {
    handleError(e, res);
  }
};
