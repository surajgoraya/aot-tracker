import type { AnimeResult } from "./MALResults";
interface APIResult {
    status?: number,
    body?: string,
    error: undefined | boolean, 
    watched_today: boolean, 
    last_watched: Date | undefined, 
    anime:  ArrayLike<AnimeResult> | AnimeResult[]
}
interface ResultType {
    error: undefined | boolean, 
    anime: ArrayLike<AnimeResult> | AnimeResult[]
}

export type {ResultType, APIResult}