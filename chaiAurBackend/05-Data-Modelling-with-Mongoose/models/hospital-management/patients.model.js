import mongoose from 'mongoose';

const patientsSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const Patients = mongoose.model('Patients', patientsSchema);
