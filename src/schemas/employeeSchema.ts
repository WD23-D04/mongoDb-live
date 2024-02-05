import mongoose from 'mongoose';
import { personSchema } from './subDocuments/personSchema.js';
import { contactInformationSchema } from './subDocuments/contactInformationSchema.js';
import { addressSchema } from './subDocuments/addressSchema.js';
import { IContactInformation, IPerson } from '../utils/types.js';


export const employeeSchema = new mongoose.Schema(
  {
    ...personSchema.obj as IPerson,
    ...contactInformationSchema.obj as IContactInformation,
    address: addressSchema,
    vacationDays: Number,
    vacationTaken: [{ from: Date, to: Date }],
    leaveDays: [{ from: Date, to: Date }],
    workHours: Number,
    books: [
      {
        _id: { type: mongoose.Types.ObjectId, ref: 'Book' },
        borrowedDate: Date,
      },
    ],
  },
  {
    collection: 'employees',
    timestamps: true,
    versionKey: false,
  }
);

export const Employee = mongoose.model('Employee', employeeSchema);
