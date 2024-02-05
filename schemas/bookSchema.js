import mongoose from 'mongoose';
import { personSchema } from './subDocuments/personSchema.js';
export const bookSchema = new mongoose.Schema(
  {
    title: String,
    /* authors: [author._id], */
    pages: Number,
    available: Boolean,
    publishedDate: { type: Date, default: new Date() },
    publisher: String,
    contributors: [{ ...personSchema.obj, role: String }],
  },
  {
    collection: 'books',
    timestamps: true,
  }
);

export const Book = mongoose.model('Book', bookSchema);
