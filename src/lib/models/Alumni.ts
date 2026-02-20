import mongoose, { Document, Schema } from 'mongoose';

export interface IAlumni extends Document {
  name: string;
  batch: string;
  testimonial: string;
  imageUrl: string;
  linkedin?: string;
}

const AlumniSchema: Schema = new Schema({
  name: { type: String, required: true },
  batch: { type: String, required: true },
  testimonial: { type: String, required: true },
  imageUrl: { type: String, required: true },
  linkedin: { type: String },
});

export default mongoose.models.Alumni || mongoose.model<IAlumni>('Alumni', AlumniSchema);
