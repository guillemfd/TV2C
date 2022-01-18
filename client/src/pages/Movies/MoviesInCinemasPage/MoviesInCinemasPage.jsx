import '../MoviesPages.css'
import { Container } from "react-bootstrap"
import { useState, useEffect } from 'react'
import { getNowInCinemas } from '../../../services/movies.service'
import MovieCard from '../../../components/Movies/MovieCard/MovieCard'
import Spinner from '../../../components/Spinner/Spinner'



function MoviesInCinemaPage(props) {

    const [inCinema, setInCinema] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {

        getNowInCinemas()
            .then(response => { 
                setInCinema(response.data)
                setIsLoading(false)
            })
            .catch(error => console.log(error))    

    }, [])

    return (

        isLoading === true ? <Spinner /> :
        <Container >
            <div className="cards_at_Movies_Pages">
                {inCinema.map((movie) => <MovieCard {...movie} key={movie.id} />)}
            </div>
        </Container>
    )
}
export default MoviesInCinemaPage