'use server';
import { unstable_noStore as noStore } from 'next/cache';
import dbConnect from '@/lib/db-connect';
import Member from '@/lib/models/Member';
import type { TMember } from '@/lib/definitions';

export async function getMembers(): Promise<TMember[]> {
  noStore();
  try {
    await dbConnect();
    const members = await Member.find({}).sort({ isCore: -1, name: 1 }).lean();
    return JSON.parse(JSON.stringify(members));
  } catch (error) {
    console.error('Failed to fetch members:', error);
    return [];
  }
}
