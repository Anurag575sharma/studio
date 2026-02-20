import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db-connect';
import Event from '@/lib/models/Event';
import Member from '@/lib/models/Member';
import Alumni from '@/lib/models/Alumni';
import GalleryImage from '@/lib/models/GalleryImage';
import { events, members, alumni, galleryImages } from '@/lib/seed-data';

export async function GET(request: Request) {
  try {
    await dbConnect();

    // Clear existing data
    await Event.deleteMany({});
    await Member.deleteMany({});
    await Alumni.deleteMany({});
    await GalleryImage.deleteMany({});
    
    // Insert new data
    await Event.insertMany(events);
    await Member.insertMany(members);
    await Alumni.insertMany(alumni);
    await GalleryImage.insertMany(galleryImages);

    return NextResponse.json({
      message: 'Database seeded successfully!',
    });
  } catch (error) {
    console.error('Seeding error:', error);
    let errorMessage = 'An unknown error occurred';
    if(error instanceof Error) {
        errorMessage = error.message;
    }
    return NextResponse.json({ message: 'Failed to seed database', error: errorMessage }, { status: 500 });
  }
}
