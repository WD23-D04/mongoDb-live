import mongoose from 'mongoose';
import { IContactInformation } from '../../utils/types';

export const contactInformationSchema =
  new mongoose.Schema<IContactInformation>({
    phone: [Number],
    email: String,
  });
