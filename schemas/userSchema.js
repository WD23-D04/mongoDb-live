import mongoose from 'mongoose';
import { personSchema } from './subDocuments/personSchema.js';
import { contactInformation } from './subDocuments/contactInformationSchema.js';
import { addressSchema } from './subDocuments/addressSchema.js';

export const userSchema = new mongoose.Schema(
  {
    person: personSchema,
    contactInformation: contactInformation,
    address: addressSchema,
    subscribedFrom: Date,
    /* books : [books._id] */
  },
  {
    collection: 'users',
    timestamps: true,
    versionKey: false,
  }
);

export const User = mongoose.model('User', userSchema);
