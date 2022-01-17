import './PopularMoviesPage.css'
import PopularMovies from "../../components/PopularMovies/PopularMovies"
import { Container } from "react-bootstrap"
import HorizontalScroll from 'react-scroll-horizontal'
import { useState, useEffect } from 'react'
import PopularMoviesHor from '../../components/PopularMoviesHor/PopularMoviesHor'
import { mostPopular } from '../../services/movies.service'
import MovieCard from '../../components/MovieCard/MovieCard'
import Spinner from '../../components/Spinner/Spinner'



function PopularMoviesPage(props) {

    const [popularMovies, setPopularMovies] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {

        mostPopular()
            .then(response => { 
                setPopularMovies(response.data)
                setIsLoading(false)
            })
            .catch(error => console.log(error))
      

    }, [])
   

    return (
        <Container>
            <h1>20 Most Popular Movies</h1>
            <hr/>

            <div>
                <PopularMovies />
            </div>

            <div className="HorizontalScrollContainer">
                {isLoading === true ? <Spinner /> :
                <HorizontalScroll >              
                    {popularMovies.map((movie) => <MovieCard {...movie} key={movie.id} />)}
                </HorizontalScroll>}
            </div>


        </Container>
    )
}

export default PopularMoviesPage