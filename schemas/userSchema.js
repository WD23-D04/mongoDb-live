import mongoose from 'mongoose';
import { personSchema } from './subDocuments/personSchema.js';
import { contactInformationSchema } from './subDocuments/contactInformationSchema.js';
import { addressSchema } from './subDocuments/addressSchema.js';

export const userSchema = new mongoose.Schema(
  {
    person: { ...personSchema.obj },
    contactInformation: { ...contactInformationSchema.obj },
    address: addressSchema,
    subscribedFrom: { type: Date, default: new Date() },
    /* books : [books._id] */
  },
  {
    collection: 'users',
    timestamps: true,
    versionKey: false,
  }
);

export const User = mongoose.model('User', userSchema);
