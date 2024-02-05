import { Schema } from 'mongoose';
import { IPerson } from '../../utils/types';

export const personSchema = new Schema<IPerson>({
  firstName: String,
  lastName: String,
});
