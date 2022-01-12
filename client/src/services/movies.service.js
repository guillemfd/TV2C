import axios from 'axios'

const moviesService = axios.create({
    baseURL: `${process.env.REACT_APP_SERVER_URL}/movies`
})

export function mostPopular() {
    return moviesService.get('/mostPopular')
}

export function getOneMovie(movieId) {
    return moviesService.get(`/getOneMovie/${movieId}`)
}