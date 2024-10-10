// app/api/test/route.js

import { connectToDB } from "@/utils/database";
import Prompt from "@/models/prompt";

export async function GET(req) {
    try {
        await connectToDB();
        const count = await Prompt.countDocuments();
        console.log('Total prompts in DB:', count);
        return new Response(`Total prompts: ${count}`, { status: 200 });
    } catch (error) {
        console.error('Error counting prompts:', error);
        return new Response("Failed to count prompts", { status: 500 });
    }
}
