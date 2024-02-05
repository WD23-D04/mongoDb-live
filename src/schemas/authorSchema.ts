import mongoose from 'mongoose';
import { Schema, model } from 'mongoose';
import { personSchema } from './subDocuments/personSchema.js';
import { IPerson } from '../utils/types.js';
import { IAuthor } from '../utils/types.js';

export const authorSchema = new Schema<IAuthor>(
  {
    ...personSchema.obj as IPerson,
    books: [{ type: mongoose.Types.ObjectId, ref: 'Book' }],
    description: String,
  },
  {
    collection: 'authors',
    timestamps: true,
  }
);

export const Author = model('Author', authorSchema);
