import mongoose, { Document, Schema } from 'mongoose';

export interface IImage extends Document {
  title: string;
  description?: string;
  url: string;
  category?: 'Cultural' | 'Technical' | 'Celebration';
}

const ImageSchema: Schema = new Schema({
  title: { type: String, required: true },
  description: { type: String },
  url: { type: String, required: true },
  category: {
    type: String,
    enum: ['Cultural', 'Technical', 'Celebration'],
  },
}, { timestamps: true });

// Changed model name to 'Image' to match the 'images' collection in the database.
export default mongoose.models.Image || mongoose.model<IImage>('Image', ImageSchema);
