import { getAOTProgress } from "$lib/MAL";
import { KEY } from "$env/static/private";
import { CreateError, ERROR_CODES } from "$lib/utils/StandardizeError.js";

export async function GET(req) {
  let AuthorizationKey = req.request.headers.get("authorization");

  if (AuthorizationKey === null || AuthorizationKey !== KEY) {
    return new Response(
      JSON.stringify(CreateError(ERROR_CODES.NO_API_ACCESS)),
      {
        status: 401,
        headers: new Headers({
          "Content-Type": "application/json",
        }),
      }
    );
  } else {
    return new Response(JSON.stringify(await getAOTProgress()), {
      status: 200,
      headers: new Headers({
        "Content-Type": "application/json",
      }),
    });
  }
}
