import axios from 'axios'

const TVService = axios.create({
    baseURL: `${process.env.REACT_APP_SERVER_URL}/movies`
})

export function getPopularTV() {
    return TVService.get('/tv/mostPopular')
}

export function getOneTV(TMDB_id) {
    return TVService.get(`/getOneTV/${TMDB_id}`)
}

export function getTVShorterThanTwenty() {
    return TVService.get('/tv/shorterthan25')
}

export function getTVBestOfAllTime() {
    return TVService.get('/tv/bestofalltime')
}