import express from 'express';

import { insertFakeData } from '../controllers/fakeDataController.js';

export const fakerRouter = express.Router();

fakerRouter.post('/', insertFakeData);
