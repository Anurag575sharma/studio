import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db-connect';
import Member from '@/lib/models/Member';
import { unstable_noStore as noStore } from 'next/cache';

export async function GET(request: Request) {
  noStore();
  try {
    await dbConnect();
    const members = await Member.find({}).sort({ isCore: -1, name: 1 });
    return NextResponse.json(members);
  } catch (error) {
    let errorMessage = 'An unknown error occurred';
    if(error instanceof Error) {
        errorMessage = error.message;
    }
    return NextResponse.json({ message: 'Failed to fetch members', error: errorMessage }, { status: 500 });
  }
}
