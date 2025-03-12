import OpenAI from "openai";
// eslint-disable-next-line @typescript-eslint/no-require-imports
// require('dotenv').config()
import 'dotenv/config';

const openai = new OpenAI({
  apiKey: process.env.REACT_API_GPT_KEY,
});

const completion = openai.chat.completions.create({
  model: "gpt-4o-mini",
  store: true,
  messages: [
    {"role": "user", "content": "write a haiku about ai"},
  ],
});

completion.then((result) => console.log(result.choices[0].message));