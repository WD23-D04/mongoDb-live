import { Schema, model } from 'mongoose';

export const newsletterSchema = new Schema({
  title: String,
  content: [String],
  sentDate: Date(),
  /* author: employee._id, */
});

export const Newsletter = model('Newsletter', newsletterSchema);
