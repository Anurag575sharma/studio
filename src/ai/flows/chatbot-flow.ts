'use server';
/**
 * @fileOverview A Genkit flow for a chatbot that answers questions about INSPIRE MANIT.
 *
 * - askChatbot - A function that handles chatbot queries.
 * - ChatbotInput - The input type for the askChatbot function.
 * - ChatbotOutput - The return type for the askChatbot function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const CONTEXT = `
You are a helpful and friendly chatbot for INSPIRE MANIT, a student society at MANIT Bhopal.
Your goal is to answer questions about the society based on the information provided below.
Be concise and clear in your answers. If you don't know the answer, say that you don't have enough information.

**About INSPIRE MANIT:**
- **Vision:** We voluntarily work to bejewel youths with wisdom and values to enable them to lead a principle-centered life.
- **Mission:** We organize technical camps and cultural events focusing on the overall growth and well-being of students while promoting Indian culture and its diversity. We bridge the gap between technical excellence and artistic expression.
- **Slogan:** Aspire To Inspire Until You Expire.

**Branches:**
- **RangManch:** The official Filmmaking society of MANIT BHOPAL. They craft narratives and push the boundaries of student cinema.
- **Avantikulam:** A mission-driven project aimed at democratizing elite education. It provides free, high-quality resources for NTSE, Olympiad, and JEE/NEET aspirants from underprivileged backgrounds.

**Events:**
- **Upcoming:** IKS Sphere (debate, ideathon), Gita Marathon (quiz on Bhagavad Gita).
- **Past:** Uddipan (talk by Amogh Lila Das), Anti-ragging slogan writing, Padai Ki Bate (academic guidance), Success Ladder (alumni talk), Techsphurti Camp (IIT Kanpur), Alumni talk by Nikhil Verma (Apple).

**Joining & Contact:**
- To join the core team, prospective members should fill out the registration form available on the 'Register' page.
- The primary contact email is inspiremanit@gmail.com.

**Team & Alumni:**
- The society has a dedicated team of core members and a strong network of alumni working in top companies like Google, Microsoft, JPMorgan Chase, and Apple.
- Alumni often give back through talks and mentorship.
`;

const ChatbotInputSchema = z.object({
  query: z.string().describe("The user's question about INSPIRE MANIT."),
});
export type ChatbotInput = z.infer<typeof ChatbotInputSchema>;

const ChatbotOutputSchema = z.object({
  answer: z.string().describe("The chatbot's answer to the user's question."),
});
export type ChatbotOutput = z.infer<typeof ChatbotOutputSchema>;

export async function askChatbot(input: ChatbotInput): Promise<ChatbotOutput> {
  return chatbotFlow(input);
}

const prompt = ai.definePrompt({
  name: 'chatbotPrompt',
  input: {schema: ChatbotInputSchema},
  output: {schema: ChatbotOutputSchema},
  prompt: `${CONTEXT}

User's question: {{{query}}}
`,
});

const chatbotFlow = ai.defineFlow(
  {
    name: 'chatbotFlow',
    inputSchema: ChatbotInputSchema,
    outputSchema: ChatbotOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
