import mongoose from 'mongoose';
import { Schema, model } from 'mongoose';
import { personSchema } from './subDocuments/personSchema.js';

export const authorSchema = new Schema(
  {
    ...personSchema.obj,
    books: [{ type: mongoose.Types.ObjectId, ref: 'Book' }],
    description: String,
  },
  {
    collection: 'authors',
    timestamps: true,
  }
);

export const Author = model('Author', authorSchema);

// Author.toLowerCase() + "s"
