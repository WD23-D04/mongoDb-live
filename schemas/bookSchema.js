import mongoose from 'mongoose';
import { personSchema } from './subDocuments/personSchema.js';
export const bookSchema = new mongoose.Schema(
  {
    title: String,
    /* authors: [author._id], */
    pages: Number,
    available: Boolean,
    publishedDate : Date,
    publisher : String,
    contributors : [{person : personSchema, role : String }],
  },
  {
    collection: 'books',
    timestamps: true
  }
);

export const Book = mongoose.model('Book', bookSchema);
