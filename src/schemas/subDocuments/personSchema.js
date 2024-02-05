import { Schema } from 'mongoose';

export const personSchema = new Schema({
  firstName: String,
  lastName: String,
});
