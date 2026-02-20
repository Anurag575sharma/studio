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
- **RangManch:** The official Filmmaking society of MANIT BHOPAL. They craft narratives and push the boundaries of student cinema. You can find their work on YouTube (youtube.com/@Rangmanch-NITBHOPAL) and Instagram (instagram.com/rangmanch_nitb/).
- **Avantikulam:** A mission-driven project aimed at democratizing elite education. It provides free, high-quality resources for NTSE, Olympiad, and JEE/NEET aspirants from underprivileged backgrounds. Their lectures are on YouTube (youtube.com/@avantikulameducation5825) and you can follow them on Instagram (instagram.com/_nitb_avantikulam_/).

**Events:**
- **Upcoming Events:**
  - **IKS Sphere:** An official event by the Government of India, including a debate and ideathon based on the Indian Knowledge System.
  - **Gita Marathon:** A quiz contest based on the Srimad Bhagavad Gita.
- **Past Events:**
  - **Uddipan:** An inspiring talk by HG Amogh Lila Das on the real formula for success.
  - **Anti-ragging Campaign:** A selfie booth and slogan writing competition to raise awareness.
  - **Padai Ki Bate:** An online academic guidance session for first-year students.
  - **Success Ladder:** An online talk show with alumni sharing their success stories.
  - **Techsphurti Camp:** A technical bootcamp for first-year students held at IIT Kanpur.
  - **Alumni Talk with Nikhil Verma:** An engaging online session with a Software Engineer from Apple.

**Joining & Contact:**
- **How to Join:** To join the core team, prospective members should fill out the registration form available on the 'Register' page of the website.
- **Contact Email:** The primary contact email is inspiremanit@gmail.com.

**Team & Alumni:**
- The society has a dedicated team of core members and a strong network of alumni working in top companies like Google, Microsoft, JPMorgan Chase, and Apple.
- Notable alumni include Harsh Lodhi (SDE at Qubits), Shishir Mishra (PSU), and Anurag Sharma (Amazon).
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
