import { GoogleGenerativeAI } from '@google/generative-ai';
import { GoogleGenerativeAIStream, Message, StreamingTextResponse } from 'ai';

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GEMINI_API || '');

// Define your predefined prompts
const predefinedPrompts = [
  "Hello!",
  "How are you?",
  "What's up?",
  "Nice to meet you!",
];

// convert messages from the Vercel AI SDK Format to the format
// that is expected by the Google GenAI SDK
const buildGoogleGenAIPrompt = (messages: Message[]) => {
  // Combine predefined prompts with the messages
  const combinedPrompts = predefinedPrompts.map(prompt => ({
    role: 'user',
    parts: [{ text: prompt }],
  }));

  const userMessages = messages
    .filter(message => message.role === 'user' || message.role === 'assistant')
    .map(message => ({
      role: message.role === 'user' ? 'user' : 'model',
      parts: [{ text: message.content }],
    }));

  return {
    contents: [...combinedPrompts, ...userMessages],
  };
};

export async function POST(req: Request) {
  // Extract the `messages` from the body of the request
  const { messages } = await req.json();

  const geminiStream = await genAI
    .getGenerativeModel({ model: 'gemini-pro' })
    .generateContentStream(buildGoogleGenAIPrompt(messages));

  // Convert the response into a friendly text-stream
  const stream = GoogleGenerativeAIStream(geminiStream);

  // Respond with the stream
  return new StreamingTextResponse(stream);
}
