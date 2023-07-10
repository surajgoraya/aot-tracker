import {getAOTProgress} from '$lib/MAL';
export async function GET() {
    //TODO: Implement a keyed check for this, just in-case to prevent abuse.
    
    return new Response(JSON.stringify(await getAOTProgress()));

}