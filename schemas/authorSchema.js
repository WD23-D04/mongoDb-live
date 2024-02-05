import { Schema, model } from 'mongoose';
import { personSchema } from './subDocuments/personSchema.js';

export const authorSchema = new Schema(
  {
    person: personSchema,
    /* books : [books._id] */
    description: String,
  },
  {
    collection: 'authors',
    timestamps: true,
  }
);

export const Author = model('Author', authorSchema);
