import axios from 'axios'

const TVService = axios.create({
    baseURL: `${process.env.REACT_APP_SERVER_URL}/movies`
})

export function mostPopularTV() {
    return TVService.get('/tv/mostPopular')
}

export function getOneTV(TMDB_id) {
    return TVService.get(`/getOneTV/${TMDB_id}`)
}