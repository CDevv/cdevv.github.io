import type { Blog } from '$lib/types';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params }) => {
    const response = await fetch(`/api/blogs/${params.id}`);
    const data = await response.json();

    return data;
}