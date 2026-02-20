import mongoose, { Document, Schema } from 'mongoose';

export interface IMember extends Document {
  name: string;
  role: string;
  year?: string;
  branch?: string;
  imageUrl: string;
  linkedin?: string;
  instaId?: string;
  github?: string;
  isCore: boolean;
}

const MemberSchema: Schema = new Schema({
  name: { type: String, required: true },
  role: { type: String, required: true },
  year: { type: String },
  branch: { type: String },
  imageUrl: { type: String, required: true },
  linkedin: { type: String },
  instaId: { type: String },
  github: { type: String },
  isCore: { type: Boolean, default: false },
});

export default mongoose.models.Member || mongoose.model<IMember>('Member', MemberSchema);
