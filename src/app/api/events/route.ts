import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db-connect';
import Event from '@/lib/models/Event';
import { unstable_noStore as noStore } from 'next/cache';

export async function GET(request: Request) {
  noStore();
  try {
    await dbConnect();
    const events = await Event.find({}).sort({ date: -1 });
    return NextResponse.json(events);
  } catch (error) {
    let errorMessage = 'An unknown error occurred';
    if(error instanceof Error) {
        errorMessage = error.message;
    }
    return NextResponse.json({ message: 'Failed to fetch events', error: errorMessage }, { status: 500 });
  }
}
