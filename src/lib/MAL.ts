import type { AnimeListResult } from "./types/MALResults";
import dayjs from "dayjs";
import axios from "axios"
import { MAL_CLIENT, USERNAME } from "$env/static/private";
import { error } from "@sveltejs/kit";

const instance = axios.create({
    baseURL: 'https://api.myanimelist.net/v2/',
    headers: { 'X-MAL-CLIENT-ID': MAL_CLIENT, 'User-Agent': 'SrrgAOTTracker/0.1' }
});


const getAOTProgress = async () => {
    let anime_list = undefined;

    try {
        anime_list = await instance.get(`users/${USERNAME}/animelist`, { params: { limit: 200, fields: 'list_status', sort: 'list_updated_at' } });
    } catch (exception) {
        return error(503, "MAL API is not available");
    }

    if (anime_list.status !== 200) {
        return error(503, "MAL API is not available");
    }

    const anime_data: AnimeListResult = anime_list.data;

    if (anime_data.data) {
        const only_AOT = anime_data.data.filter(anime => anime.node.title.includes("Shingeki no Kyojin"));
        const currently_watching = only_AOT.filter(anime => anime.list_status.status === 'watching');
        const last_watched = dayjs(currently_watching[0].list_status.updated_at).toDate();
        let watchedToday = false;

        if (isItToday(last_watched)) { watchedToday = true; }

        return {status: 200, watched_today: watchedToday, last_watched: dayjs(last_watched).toISOString(), list_data: only_AOT};
    }

}

/**
 * Adapted from: https://flaviocopes.com/how-to-determine-date-is-today-javascript/
 * @param otherDate 
 * @returns 
 */
const isItToday = (otherDate : Date) => {
    const today = new Date()
    return otherDate.getDate() == today.getDate() &&
        otherDate.getMonth() == today.getMonth() &&
        otherDate.getFullYear() == today.getFullYear()
}


export { getAOTProgress }