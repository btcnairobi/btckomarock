import { GoogleGenAI, Type } from "@google/genai";
import { GeneratedLesson } from "../types";

const SYSTEM_INSTRUCTION = `
You are the Lead Educator for "Bitcoin Komarock", a circular economy community.
You follow the "StudyB Model":
- Tone: Simple, Stony, Resilient, Local (Kenyan Context).
- Structure: Clear headings, short paragraphs.
- Goal: Bitcoin Adoption.

Community Tags: #Komarock #BitcoinKE #StudyB
`;

let ai: GoogleGenAI | null = null;

const getAI = () => {
  if (!ai) {
    if (!process.env.API_KEY) {
      console.error("API Key is missing");
      throw new Error("API Key is missing. Please set process.env.API_KEY.");
    }
    ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  }
  return ai;
};

export const generateVisionStrategy = async (topic: string): Promise<string> => {
  try {
    const client = getAI();
    const response = await client.models.generateContent({
      model: "gemini-2.5-flash",
      contents: `Generate a specific, actionable strategy for Bitcoin Komarock regarding: "${topic}". 
      Include 3 pillars: Education, Adoption, and Community. Keep it rocky and brief.`,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
    });
    return response.text || "Could not generate strategy.";
  } catch (error) {
    console.error("Error generating strategy:", error);
    return "The Rock is silent. Check connection.";
  }
};

export const askTheOracle = async (question: string): Promise<string> => {
  try {
    const client = getAI();
    const response = await client.models.generateContent({
      model: "gemini-2.5-flash",
      contents: `User Question: "${question}". Answer as a wise mentor from Komarock.`,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      },
    });
    return response.text || "The Oracle is silent.";
  } catch (error) {
    console.error("Error asking oracle:", error);
    return "Connection weak.";
  }
};

export const generateLessonContent = async (tier: string, module: string, segment: string): Promise<GeneratedLesson | null> => {
  try {
    const client = getAI();
    const prompt = `
      Generate a StudyB Model Lesson.
      Context: Tier: ${tier}, Module: ${module}, Segment: ${segment}.
      
      Requirements:
      1. Create exactly 6 subtopics.
      2. For each subtopic: Max 3 short paragraphs, exactly 2 multiple choice questions (with 3 options and correct index), max 3 bitcoin tools.
      3. Generate a Social Media Caption.
      4. Generate text for a physical Certificate.
      
      Output JSON format matching the schema.
    `;

    const response = await client.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            subtopics: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  title: { type: Type.STRING },
                  content: { type: Type.STRING },
                  questions: { 
                    type: Type.ARRAY, 
                    items: { 
                      type: Type.OBJECT,
                      properties: {
                        text: { type: Type.STRING },
                        options: { type: Type.ARRAY, items: { type: Type.STRING } },
                        correctIndex: { type: Type.INTEGER }
                      }
                    } 
                  },
                  tools: { type: Type.ARRAY, items: { type: Type.STRING } }
                }
              }
            },
            socialCaption: { type: Type.STRING },
            certificateText: { type: Type.STRING }
          }
        }
      }
    });

    const text = response.text;
    if (!text) return null;
    return JSON.parse(text) as GeneratedLesson;
  } catch (error) {
    console.error("Error generating lesson:", error);
    return null;
  }
};