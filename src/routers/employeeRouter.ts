import express from 'express';
import {
  addOneEmployee,
  findOneEmployee,
  findEmployees,
  updateEmployee,
  deleteEmployee,
} from '../controllers/employeeController.js';

export const employeeRouter = express.Router();

employeeRouter.route('/').post(addOneEmployee).get(findEmployees);
employeeRouter
  .route('/:id')
  .get(findOneEmployee)
  .patch(updateEmployee)
  .delete(deleteEmployee);
