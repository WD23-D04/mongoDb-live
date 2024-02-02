import mongoose from 'mongoose';

export const authorSchema = new mongoose.Schema(
  {
    fullName: String,
  },
  {
    collection: 'authors',
    timestamps: true,
  }
);

export const Author = mongoose.model('Author', authorSchema);
