'use server';
/**
 * @fileOverview A Genkit flow for generating engaging and detailed event descriptions based on input details.
 *
 * - generateEventDescription - A function that handles the event description generation process.
 * - GenerateEventDescriptionInput - The input type for the generateEventDescription function.
 * - GenerateEventDescriptionOutput - The return type for the generateEventDescription function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateEventDescriptionInputSchema = z.object({
  eventName: z.string().describe('The name of the event.'),
  eventDate: z.string().describe('The date of the event (e.g., "October 26, 2024").'),
  eventTime: z.string().describe('The time of the event (e.g., "2:00 PM - 5:00 PM PST").'),
  eventLocation: z.string().describe('The location of the event.'),
  shortDescription: z.string().describe('A brief summary of the event.'),
  targetAudience: z.string().describe('The intended audience for the event (e.g., "students, faculty, and community members").'),
  keyActivities: z.array(z.string()).describe('A list of key activities or highlights of the event.'),
});
export type GenerateEventDescriptionInput = z.infer<typeof GenerateEventDescriptionInputSchema>;

const GenerateEventDescriptionOutputSchema = z.object({
  detailedDescription: z.string().describe('An engaging and detailed description for the event.'),
});
export type GenerateEventDescriptionOutput = z.infer<typeof GenerateEventDescriptionOutputSchema>;

export async function generateEventDescription(input: GenerateEventDescriptionInput): Promise<GenerateEventDescriptionOutput> {
  return generateEventDescriptionFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateEventDescriptionPrompt',
  input: {schema: GenerateEventDescriptionInputSchema},
  output: {schema: GenerateEventDescriptionOutputSchema},
  prompt: `You are an expert event marketer. Your task is to create an engaging and detailed event description based on the provided information.

Craft a compelling narrative that highlights the event's unique aspects, benefits for attendees, and call to action.

Event Name: {{{eventName}}}
Date: {{{eventDate}}}
Time: {{{eventTime}}}
Location: {{{eventLocation}}}
Short Description: {{{shortDescription}}}
Target Audience: {{{targetAudience}}}
Key Activities:
{{#each keyActivities}}
- {{{this}}}
{{/each}}

Generate an engaging and detailed description suitable for event pages and promotional materials. Focus on attracting the target audience and clearly communicating what they can expect and how they will benefit.`,
});

const generateEventDescriptionFlow = ai.defineFlow(
  {
    name: 'generateEventDescriptionFlow',
    inputSchema: GenerateEventDescriptionInputSchema,
    outputSchema: GenerateEventDescriptionOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
