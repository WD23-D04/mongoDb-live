import mongoose from 'mongoose';
import { personSchema } from './subDocuments/personSchema.js';
export const bookSchema = new mongoose.Schema(
  {
    title: String,
    authors: { type: mongoose.Types.ObjectId, ref: 'Author' },
    pages: Number,
    available: Boolean,
    publishedDate: { type: Date, default: new Date() },
    publisher: String,
    contributors: [{ ...personSchema.obj, role: String }],
  },
  {
    timestamps: true,
  }
);

export const Book = mongoose.model('Book', bookSchema);
