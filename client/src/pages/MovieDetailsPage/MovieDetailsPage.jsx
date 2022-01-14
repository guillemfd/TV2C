import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getOneMovie } from "../../services/movies.service"
import Spinner from "../../components/Spinner/Spinner"

function MovieDetailsPage(props) {

    const { TMDB_id } = useParams()
    const [oneMovie, setOneMovie] = useState()
    const [isLoading, setIsLoading] = useState(true)


    useEffect(() => {

        getOneMovie(TMDB_id)
            .then(response => {
                setOneMovie(response.data)
                setIsLoading(false)
            })
            .catch(err => console.log(err))
    }, [])


    return (

            isLoading === true ? <Spinner /> :
        <>
            <h1>{TMDB_id}</h1>
        </>

    )
}

export default MovieDetailsPage