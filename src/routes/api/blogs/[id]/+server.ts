import { getBlog } from '$lib/server/blogs.js';
import { json } from '@sveltejs/kit';

export async function GET({ params }) {
    const num = Number.parseInt(params.id);
    const blog = await getBlog(num);

    return json(blog);
}