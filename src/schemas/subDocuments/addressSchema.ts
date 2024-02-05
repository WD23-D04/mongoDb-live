import { Schema } from 'mongoose';
import { IAddress } from '../../utils/types';

export const addressSchema = new Schema<IAddress>({
  street: String,
  number: String,
  zipCode: String,
  state: String,
});
