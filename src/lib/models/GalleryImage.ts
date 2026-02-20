import mongoose, { Document, Schema } from 'mongoose';

export interface IGalleryImage extends Document {
  title: string;
  description?: string;
  url: string;
  category?: string;
}

const GalleryImageSchema: Schema = new Schema({
  title: { type: String, required: true },
  description: { type: String },
  url: { type: String, required: true },
  category: { type: String },
}, { timestamps: true });

export default mongoose.models.GalleryImage || mongoose.model<IGalleryImage>('GalleryImage', GalleryImageSchema);
