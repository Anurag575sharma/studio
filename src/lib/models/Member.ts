import mongoose, { Document, Schema } from 'mongoose';

export interface IMember extends Document {
  name: string;
  role: string;
  imageUrl: string;
  linkedin?: string;
  github?: string;
  isCore: boolean;
}

const MemberSchema: Schema = new Schema({
  name: { type: String, required: true },
  role: { type: String, required: true },
  imageUrl: { type: String, required: true },
  linkedin: { type: String },
  github: { type: String },
  isCore: { type: Boolean, default: false },
});

export default mongoose.models.Member || mongoose.model<IMember>('Member', MemberSchema);
