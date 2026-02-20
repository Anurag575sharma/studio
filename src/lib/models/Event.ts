import mongoose, { Document, Schema } from 'mongoose';

export interface IEvent extends Document {
  title: string;
  date: Date;
  description: string;
  imageUrl?: string;
  isUpcoming: boolean;
  location: string;
  registrationLink?: string;
}

const EventSchema: Schema = new Schema({
  title: { type: String, required: true },
  date: { type: Date, required: true },
  description: { type: String, required: true },
  imageUrl: { type: String },
  isUpcoming: { type: Boolean, required: true },
  location: { type: String, required: true },
  registrationLink: { type: String },
});

export default mongoose.models.Event || mongoose.model<IEvent>('Event', EventSchema);
