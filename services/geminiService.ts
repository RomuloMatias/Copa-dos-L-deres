
import { GoogleGenAI, Type } from "@google/genai";
import { GamificationNames } from '../types';

const API_KEY = process.env.API_KEY;

if (!API_KEY) {
  throw new Error("API_KEY environment variable not set");
}

const ai = new GoogleGenAI({ apiKey: API_KEY });

const gamificationNameSchema = {
  type: Type.OBJECT,
  properties: {
    managementTasks: {
      type: Type.ARRAY,
      description: "10 creative, World Cup-themed names for management tasks or 'Gols de Placa'.",
      items: {
        type: Type.STRING
      }
    },
    badges: {
      type: Type.ARRAY,
      description: "5 creative, World Cup-themed names for badges or trophies.",
      items: {
        type: Type.STRING
      }
    },
    rankingLevels: {
      type: Type.ARRAY,
      description: "5 creative, World Cup-themed names for ranking levels, from lowest to highest.",
      items: {
        type: Type.STRING
      }
    }
  },
  required: ['managementTasks', 'badges', 'rankingLevels']
};

export const generateGamificationNames = async (): Promise<GamificationNames> => {
  const prompt = `
    I'm creating a gamification system for business leaders with a World Cup soccer theme. 
    Please suggest creative, exciting, and professional-sounding names for the following categories.
    The names should evoke the passion and prestige of the World Cup.

    1.  **Management Tasks ('Gols de Placa' or 'Key Goals')**: Suggest 10 names. These represent important objectives leaders must achieve.
    2.  **Badges ('Trophies')**: Suggest 5 names. These are awarded for special achievements.
    3.  **Ranking Levels**: Suggest 5 names. These represent the hierarchy or leaderboard levels, starting from the lowest to the highest rank.
  `;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: gamificationNameSchema,
        temperature: 0.8,
      },
    });

    const jsonText = response.text.trim();
    const parsedData = JSON.parse(jsonText);
    
    // Basic validation
    if (
      !parsedData.managementTasks || !Array.isArray(parsedData.managementTasks) ||
      !parsedData.badges || !Array.isArray(parsedData.badges) ||
      !parsedData.rankingLevels || !Array.isArray(parsedData.rankingLevels)
    ) {
      throw new Error("Invalid data structure received from API.");
    }

    return parsedData as GamificationNames;

  } catch (error) {
    console.error("Error calling Gemini API:", error);
    throw new Error("Failed to fetch gamification names from the Gemini API.");
  }
};
