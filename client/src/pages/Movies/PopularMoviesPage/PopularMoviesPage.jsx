import './PopularMoviesPage.css'
import { Container } from "react-bootstrap"
import { useState, useEffect } from 'react'
import { getPopularMovies } from '../../../services/movies.service'
import MovieCard from '../../../components/Movies/MovieCard/MovieCard'
import Spinner from '../../../components/Spinner/Spinner'



function PopularMoviesPage(props) {

    const [popularMovies, setPopularMovies] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {

        getPopularMovies()
            .then(response => { 
                setPopularMovies(response.data)
                setIsLoading(false)
            })
            .catch(error => console.log(error))    

    }, [])

    return (

        isLoading === true ? <Spinner /> :
        <Container >
            <div className="cards_at_PopularMovies">
                {popularMovies.map((movie) => <MovieCard {...movie} key={movie.id} />)}
            </div>
        </Container>
    )
}
export default PopularMoviesPage