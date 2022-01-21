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

export function getBestOfTwentyOne() {
    return moviesService.get('/bestof2021')
}

export function getBestOfsXXI() {
    return moviesService.get('/bestofsXXI')
}

export function getBestOfsXX() {
    return moviesService.get('/bestofsXX')
}

export function getNowInCinemas() {
    return moviesService.get('/nowincinemas')
}

export function saveList(list) {
    return moviesService.post('/createList', list)
}

export function addToCustomListONE(id, listId) {
    return moviesService.post(`addToCustomListONE/${id}`, {listId})
}

export function addToCustomListTWO(id, listId) {
    return moviesService.post(`addToCustomListTWO/${id}`, {listId})
}

export function addToCustomListTHREE(id, listId) {
    return moviesService.post(`addToCustomListTHREE/${id}`, {listId})
}

export function getListONE(listId) {
    return moviesService.get(`getListONE/${listId}`)
}

export function getIdsListONE(listId) {
    return moviesService.get(`getIdsListONE/${listId}`)
}

export function toSeeMovieList(id, userId) {
    return moviesService.post(`toseeMovieList/${id}`, {userId})
}

export function seenMovieList(id, userId) {
    return moviesService.post(`seenMovieList/${id}`, {userId})
}

export function deleteMovieWatched(id, userId) {
    return moviesService.patch(`deleteMovieWatched/${id}`, {userId})
}