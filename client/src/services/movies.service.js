import axios from 'axios'

const moviesService = axios.create({
    baseURL: `${process.env.REACT_APP_SERVER_URL}/movies`
})

export function getPopularMovies() {
    return moviesService.get('/mostPopular')
}

export function getOneMovie(TMDB_id) {
    return moviesService.get(`/getOneMovie/${TMDB_id}`)
}

export function getShorterThan() {
    return moviesService.get('/shorterthan90')
}

export function getBestOfAllTime() {
    return moviesService.get('/bestofalltime')
}