import { getBlogs } from '$lib/server/blogs.js';
import { json } from '@sveltejs/kit';

export async function GET() {
    const data = await getBlogs();

    return json(data);
}