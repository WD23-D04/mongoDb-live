import { Schema } from 'mongoose';

export const addressSchema = new Schema({
  street: String,
  number: String,
  zipCode: String,
  state: String,
});
