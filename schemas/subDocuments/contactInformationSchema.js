import mongoose from "mongoose";

export const contactInformationSchema = new mongoose.Schema({
    phone: [Number],
    email: String,
})
