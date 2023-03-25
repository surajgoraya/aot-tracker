import type { AnimeResult } from "./MALResults";
interface APIResult {
    error: undefined | boolean, 
    watched_today: boolean, 
    list_data:  ArrayLike<AnimeResult> | AnimeResult[]
}
interface ResultType {
    error: undefined | boolean, 
    anime: ArrayLike<AnimeResult> | AnimeResult[]
}

export type {ResultType, APIResult}