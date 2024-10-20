import { GoogleGenerativeAI, GenerateContentResult } from "@google/generative-ai";


export async function generateTasks(taskName: string): Promise<GenerateContentResult> {
    const genAI = new GoogleGenerativeAI("AIzaSyDdgI43sg2Os9jvpHhx_AyOOlQSHEFh74U"!);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });


    const prompt = "write me a step-by-step to make an egg sandwich";

    return model.generateContent(prompt);
}