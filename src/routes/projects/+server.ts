import { getProjects } from "$lib/server/api.server";
import { json } from "@sveltejs/kit"

export async function GET() {
    const list = await getProjects();

    return json(list);
}