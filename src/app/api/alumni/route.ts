import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db-connect';
import Alumni from '@/lib/models/Alumni';
import { unstable_noStore as noStore } from 'next/cache';

export async function GET(request: Request) {
  noStore();
  try {
    await dbConnect();
    const alumni = await Alumni.find({}).sort({ year: -1 });
    return NextResponse.json(alumni);
  } catch (error) {
    let errorMessage = 'An unknown error occurred';
    if(error instanceof Error) {
        errorMessage = error.message;
    }
    return NextResponse.json({ message: 'Failed to fetch alumni', error: errorMessage }, { status: 500 });
  }
}