import mongoose, { Document, Schema } from 'mongoose';

export interface IAlumni extends Document {
  name: string;
  role?: string;
  company?: string;
  year: string;
  branch?: string;
  testimonial?: string;
  image: string;
  linkedin?: string;
}

const AlumniSchema: Schema = new Schema({
  name: { type: String, required: true },
  role: { type: String },
  company: { type: String },
  year: { type: String, required: true },
  branch: { type: String },
  testimonial: { type: String },
  image: { type: String, required: true },
  linkedin: { type: String },
});

export default mongoose.models.Alumni || mongoose.model<IAlumni>('Alumni', AlumniSchema);
