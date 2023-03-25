import { error } from "@sveltejs/kit";
import {getAOTProgress} from '$lib/MAL';
export async function GET() {

    return new Response(JSON.stringify(await getAOTProgress()));

}