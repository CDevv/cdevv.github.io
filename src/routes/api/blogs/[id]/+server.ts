import { json } from '@sveltejs/kit';
import { BACKEND_URI } from "$env/static/private";

export async function GET({ params }) {
    try {
        const num = Number.parseInt(params.id);
        const res = await fetch(`${BACKEND_URI}/blogs/?id=${num}`)
        const resJson = await res.json()

        return json(resJson)
    } catch (error) {
        console.log(error)
        return json({ msg: "Error!" }, { status: 500 })
    }
}