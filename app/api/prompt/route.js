// app/api/prompt/route.js

import { connectToDB } from "@/utils/database";
import Prompt from "@/models/prompt";

export async function GET(req) {
    try {
        await connectToDB();
        const prompts = await Prompt.find({}).populate('creator');
        console.log('Fetched prompts:', prompts.length); // Server-side log for debugging
        return new Response(JSON.stringify(prompts), { status: 200 });
    } catch (error) {
        console.error('Error fetching prompts:', error);
        return new Response("Failed to fetch all prompts", { status: 500 });
    }
}
