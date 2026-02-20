import type { models } from 'mongoose';

export type TGalleryImage = {
  _id: string;
  title: string;
  imageUrl: string;
  description?: string;
  category?: string;
};

export type TMember = {
  _id: string;
  name: string;
  role: string;
  year?: string;
  branch?: string;
  imageUrl: string;
  linkedin?: string;
  github?: string;
  instaId?: string;
  isCore: boolean;
};

export type TAlumni = {
  _id:string;
  name: string;
  batch: string;
  testimonial: string;
  imageUrl: string;
  linkedin?: string;
  role?: string;
  company?: string;
  branch?: string;
};

export type TEvent = {
  _id: string;
  title: string;
  date: string;
  description: string;
  imageUrl?: string;
  isUpcoming: boolean;
  location: string;
  registrationLink?: string;
};
