import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);
const Gemini = genAI.getGenerativeModel({ model: "gemini-flash-latest" });

export default Gemini;
