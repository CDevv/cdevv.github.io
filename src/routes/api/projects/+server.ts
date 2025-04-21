import { getProjects } from "$lib/server/projects";
import { json } from "@sveltejs/kit"

export async function GET() {
    const list = await getProjects();

    return json(list);
}

export const prerender = true;