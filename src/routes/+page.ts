import type { AnimeListResult } from "$lib/types/MALResults";
import type { APIResult } from "$lib/types/ResultType";
export async function load({fetch}) {
    try {
        let aotProgress = await fetch('/api/progress');
        if (aotProgress.status === 200) {
            const aot_data: APIResult = await aotProgress.json();
            if (aot_data.status !== 200){
                return {
                    error: true
                }
            } 
            return {
                anime: aot_data.list_data,
                watched_today: aot_data.watched_today,
                last_watched: aot_data.last_watched
            };
        } else {
            return {
                error: true
            }
        }
    } catch (exception) {
        console.log(exception)
    }
  }