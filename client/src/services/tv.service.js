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

export function getTVBestOfTwentyOne() {
    return TVService.get('/tv/bestof2021')
}

export function getTVBestOfsXXI() {
    return TVService.get('/tv/bestofsXXI')
}

export function getTVBestOfsXX() {
    return TVService.get('/tv/bestofsXX')
}

export function getSearch(query) {
    return TVService.get(`/${query}`)
}

export function toSeeTVList(name, userId) {
    return TVService.post(`toSeeTVList/${name}`, {userId})
}

export function seenTVList(name, userId) {
    return TVService.post(`seenTVList/${name}`, {userId})
}

export function deleteTVWatched(name, userId) {
    return TVService.patch(`deleteTVWatched/${name}`, {userId})
}