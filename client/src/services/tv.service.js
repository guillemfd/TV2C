import axios from 'axios'

const moviesService = axios.create({
    baseURL: `${process.env.REACT_APP_SERVER_URL}/tv`
})

export function mostPopularTV() {
    return moviesService.get('/mostPopular')
}

export function getOneTV(TMDB_id) {
    return moviesService.get(`/getOneTV/${TMDB_id}`)
}