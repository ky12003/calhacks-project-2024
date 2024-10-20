import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { task } = req.body;
    const apiKey = process.env.GEMINI_API_KEY;

    try {
      const response = await axios.post(
        'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent',
        {
          prompt: {
            text: `Break down the following task into smaller, actionable subtasks: ${task}`,
          },
          maxTokens: 500,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${apiKey}`,  // Use the Gemini API key stored in environment variables
        }
      });

      const subTasks = response.data.choices[0].text;
      res.status(200).json({ subTasks });
    } catch (error) {
      console.error('Error generating subtasks:', error);
      res.status(500).json({ error: 'Failed to generate subtasks' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
