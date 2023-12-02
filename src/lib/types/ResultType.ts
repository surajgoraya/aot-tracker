import type { AnimeResult } from "./MALResults";
interface APIResult {
    list_data: any;
    status?: number,
    body?: string,
    watched_today: boolean, 
    last_watched: Date | undefined, 
    anime:  ArrayLike<AnimeResult> | AnimeResult[].
    error?: boolean | undefined, 
    error_title?: string, 
    error_description?: string, 
    error_code?: string
}
interface ResultType {
    error: undefined | boolean, 
    anime: ArrayLike<AnimeResult> | AnimeResult[]
}

interface APIError {

}

export type {ResultType, APIResult, APIError}