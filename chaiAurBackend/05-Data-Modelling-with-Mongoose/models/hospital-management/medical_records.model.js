import mongoose from 'mongoose';

const medical_recordsSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const Medical_records = mongoose.model(
  'Medical_records',
  medical_recordsSchema
);
