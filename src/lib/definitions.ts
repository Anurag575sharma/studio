import type { models } from 'mongoose';

export type TImage = {
  _id: string;
  title: string;
  url: string;
  description?: string;
  category?: 'Cultural' | 'Technical' | 'Celebration';
};

export type TMember = {
  _id: string;
  name: string;
  role: string;
  year?: string;
  branch?: string;
  image: string;
  linkedin?: string;
  github?: string;
  instaId?: string;
  isCore: boolean;
};

export type TAlumni = {
  _id:string;
  name: string;
  year: string;
  testimonial?: string;
  image: string;
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
