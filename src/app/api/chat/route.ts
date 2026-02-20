import { NextResponse } from 'next/server';
import { askChatbot } from '@/ai/flows/chatbot-flow';

export async function POST(req: Request) {
  try {
    const { query } = await req.json();

    if (!query) {
      return NextResponse.json({ error: 'Query is required' }, { status: 400 });
    }

    const response = await askChatbot({ query });
    return NextResponse.json(response);
  } catch (error) {
    console.error('Chatbot API error:', error);
    let errorMessage = 'An unknown error occurred';
    if (error instanceof Error) {
        errorMessage = error.message;
    }
    return NextResponse.json({ error: 'Failed to get response from AI.', details: errorMessage }, { status: 500 });
  }
}
