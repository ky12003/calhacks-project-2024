import { GoogleGenerativeAI, GenerateContentResult } from "@google/generative-ai";


export async function makeCalendarObj(tasks: Array<(string | number)[]>, timeRange: number[]): Promise<GenerateContentResult> {
    const genAI = new GoogleGenerativeAI("AIzaSyDdgI43sg2Os9jvpHhx_AyOOlQSHEFh74U"!);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });


    const prompt = `Based on this 2d array that has in each element a task name and the number of hours it takes to complete said task, given the time range: ${timeRange}, 
    suggest me a schedule for my upcoming week (Sunday-Saturday) while using military time to represent the times:
    ${tasks}`;

    return model.generateContent(prompt);
}