import '../MoviesPages.css'
import { Container } from "react-bootstrap"
import { useState, useEffect } from 'react'
import { getShorterThan } from '../../../services/movies.service'
import MovieCard from '../../../components/Movies/MovieCard/MovieCard'
import Spinner from '../../../components/Spinner/Spinner'



function MovieShorterThan90Page(props) {

    const [shorterThan, setShorterThan] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {

        getShorterThan()
            .then(response => { 
                setShorterThan(response.data)
                setIsLoading(false)
            })
            .catch(error => console.log(error))    

    }, [])

    return (

        isLoading === true ? <Spinner /> :
        <Container >
            <div className="cards_at_Movies_Pages">
                {shorterThan.map((movie) => <MovieCard {...movie} key={movie.id} />)}
            </div>
        </Container>
    )
}
export default MovieShorterThan90Page