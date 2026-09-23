import axios from "axios";

const SHECODES_AI_API_URL = "https://api.shecodes.io/ai/v1/generate";

const SHECODES_AI_API_KEY = import.meta.env.VITE_SHECODES_AI_API_KEY;

export async function generateAI(prompt, context = "") {
  const response = await axios.get(SHECODES_AI_API_URL, {
    params: {
      prompt,
      context,
      key: SHECODES_AI_API_KEY,
    },
  });

  return response.data;
}

export async function getCityData(city) {
  const prompt = `
Provide travel information about ${city}.

Return the answer using exactly this format:

CITY: [city name]
COUNTRY: [country name]

DESCRIPTION: [short description, maximum 2 sentences]

BEST TIME: [best time to visit and why]

LOCAL FOOD: [one short paragraph about local food]

LOCAL TIP: [one useful local tip]

RESTAURANT 1: [restaurant name]
DESCRIPTION 1: [short description]
ADDRESS 1: [address]

RESTAURANT 2: [restaurant name]
DESCRIPTION 2: [short description]
ADDRESS 2: [address]

RESTAURANT 3: [restaurant name]
DESCRIPTION 3: [short description]
ADDRESS 3: [address]

Do not add any other sections.
`;

  const context = `
Be concise and factual.
Use the requested format exactly.
Write the response in English.
You are a professional tour guide with knowledge of place names from around the world; always use the correct names for cities, towns and countries.

`;

  const response = await generateAI(prompt, context);

  return parseCityData(response.answer);
}

function parseCityData(answer) {
  const lines = answer
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);

  const getValue = (prefix) => {
    const line = lines.find((line) => line.startsWith(prefix));

    return line ? line.slice(prefix.length).trim() : "";
  };

  return {
    city: getValue("CITY:"),
    country: getValue("COUNTRY:"),
    description: getValue("DESCRIPTION:"),
    bestTime: getValue("BEST TIME:"),
    localFood: getValue("LOCAL FOOD:"),
    localTip: getValue("LOCAL TIP:"),

    restaurants: [
      {
        name: getValue("RESTAURANT 1:"),
        description: getValue("DESCRIPTION 1:"),
        address: getValue("ADDRESS 1:"),
      },
      {
        name: getValue("RESTAURANT 2:"),
        description: getValue("DESCRIPTION 2:"),
        address: getValue("ADDRESS 2:"),
      },
      {
        name: getValue("RESTAURANT 3:"),
        description: getValue("DESCRIPTION 3:"),
        address: getValue("ADDRESS 3:"),
      },
    ],
  };
}
