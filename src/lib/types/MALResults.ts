interface Anime {
    id: number, 
    title: string, 
    main_picture: {
        medium: string, 
        large: string,
    }
}

interface AnimeListStatus {
    status: string, 
    score: number, 
    num_episodes_watched: number, 
    is_rewatching: number, 
    updated_at: Date
}

interface AnimeResult{
    node: Anime, 
    list_status: AnimeListStatus,
    paging: {
        next: string | undefined
    }
}

interface AnimeListResult {
    data: AnimeResult []
}

export type {Anime, AnimeResult, AnimeListResult}