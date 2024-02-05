import mongoose from 'mongoose';
import { personSchema } from './subDocuments/personSchema.js';
import { contactInformationSchema } from './subDocuments/contactInformationSchema.js';
import { addressSchema } from './subDocuments/addressSchema.js';

export const employeeSchema = new mongoose.Schema(
  {
    ...personSchema.obj,
    ...contactInformationSchema.obj,
    address: addressSchema,
    vacationDays: Number,
    vacationTaken: [{ from: Date, to: Date }],
    leaveDays: [{ from: Date, to: Date }],
    workHours: String,
    /* books: [{
            book._id, borrowingDate: Date()
        }], */
  },
  {
    collection: 'employees',
    timestamps: true,
    versionKey: false,
  }
);

export const Employee = mongoose.model('Employee', employeeSchema);
