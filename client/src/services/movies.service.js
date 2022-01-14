import axios from 'axios'

const moviesService = axios.create({
    baseURL: `${process.env.REACT_APP_SERVER_URL}/movies`
})

export function mostPopular() {
    return moviesService.get('/mostPopular')
}

export function getOneMovie(TMDB_id) {
    return moviesService.get(`/getOneMovie/${TMDB_id}`)
}