import type { APIResult } from "$lib/types/ResultType";
import { KEY } from "$env/static/private";
import { CreateError, ERROR_CODES } from "$lib/utils/StandardizeError.js";

export async function load({ fetch }) {
  try {
    let aotProgress = await fetch("/api/progress", {
      headers: new Headers({
        Authorization: KEY,
      }),
    });
    if (aotProgress.status === 200) {
      const aot_data: APIResult = await aotProgress.json();
      if (aot_data.status !== 200) {
        return CreateError(ERROR_CODES.MAL_IS_DOWN); //MAL API is down likely.
      }
      return {
        anime: aot_data.list_data,
        watched_today: aot_data.watched_today,
        last_watched: aot_data.last_watched,
      };
    } else {
      return await aotProgress.json();
    }
  } catch (exception) {
    console.error(exception);
  }
}
