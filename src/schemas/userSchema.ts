import mongoose from 'mongoose';
import { personSchema } from './subDocuments/personSchema.js';
import { contactInformationSchema } from './subDocuments/contactInformationSchema.js';
import { addressSchema } from './subDocuments/addressSchema.js';
import { IAddress, IContactInformation, IPerson } from '../utils/types.js';

export const userSchema = new mongoose.Schema(
  {
    ...(personSchema.obj as IPerson),
    ...(contactInformationSchema.obj as IContactInformation),
    address: addressSchema,
    subscribedFrom: { type: Date, default: new Date() },
    books: [
      {
        _id: { type: mongoose.Types.ObjectId, ref: 'Book' },
        borrowedDate: Date,
      },
    ],
  },
  {
    collection: 'users',
    timestamps: true,
    versionKey: false,
  }
);

export const User = mongoose.model('User', userSchema);
