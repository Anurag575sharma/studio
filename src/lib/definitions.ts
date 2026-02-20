import type { models } from 'mongoose';

export type TGalleryImage = {
  _id: string;
  title: string;
  imageUrl: string;
};

export type TMember = {
  _id: string;
  name: string;
  role: string;
  imageUrl: string;
  linkedin?: string;
  github?: string;
  isCore: boolean;
};

export type TAlumni = {
  _id:string;
  name: string;
  batch: string;
  testimonial: string;
  imageUrl: string;
  linkedin?: string;
};

export type TEvent = {
  _id: string;
  title: string;
  date: string;
  description: string;
  isUpcoming: boolean;
  location: string;
  registrationLink?: string;
};
