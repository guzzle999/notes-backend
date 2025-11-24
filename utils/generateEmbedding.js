import { OpenAI } from "openai";
import dotenv from "dotenv";

dotenv.config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, // Add your OpenAI API key to the .env file
});

export const generateEmbedding = async (text) => {
  try {
    const response = await openai.embeddings.create({
      model: "text-embedding-ada-002",
      input: text,
    });
    
    return response.data[0].embedding; // Return the embedding vector
  } catch (error) {
    console.error("Error generating embedding:", error);
    throw new Error("Failed to generate embedding");
  }
};

// import axios from "axios";

// export const generateEmbedding = async (text) => {
//   try {
//     const response = await axios.post(
//       "https://generativelanguage.googleapis.com/v1beta/models/gemini-embedding-001:embedContent",
//       {
//         model: "models/gemini-embedding-001",
//         content: {
//           parts: [{ text }],
//         },
//       },
//       {
//         headers: {
//           "Content-Type": "application/json",
//           "x-goog-api-key": process.env.GEMINI_API_KEY,
//         },
//       }
//     );


//     return response.data.embedding.values;
//   } catch (error) {
//     throw new Error("Failed to generate embedding");
//   }
// };

