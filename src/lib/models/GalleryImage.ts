import mongoose, { Document, Schema } from 'mongoose';

export interface IGalleryImage extends Document {
  title: string;
  imageUrl: string;
}

const GalleryImageSchema: Schema = new Schema({
  title: { type: String, required: true },
  imageUrl: { type: String, required: true },
});

export default mongoose.models.GalleryImage || mongoose.model<IGalleryImage>('GalleryImage', GalleryImageSchema);
