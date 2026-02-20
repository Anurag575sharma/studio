import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db-connect';
import GalleryImage from '@/lib/models/GalleryImage';
import { unstable_noStore as noStore } from 'next/cache';

export async function GET(request: Request) {
  noStore();
  try {
    await dbConnect();
    const images = await GalleryImage.find({});
    return NextResponse.json(images);
  } catch (error) {
     let errorMessage = 'An unknown error occurred';
    if(error instanceof Error) {
        errorMessage = error.message;
    }
    return NextResponse.json({ message: 'Failed to fetch gallery images', error: errorMessage }, { status: 500 });
  }
}
