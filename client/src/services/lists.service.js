import axios from 'axios'

const moviesService = axios.create({
    baseURL: `${process.env.REACT_APP_SERVER_URL}/list`
})

// export function saveList(list) {
//     return moviesService.post('/createList', list)
// }