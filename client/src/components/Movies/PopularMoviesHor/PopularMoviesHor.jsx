import './PopularMoviesHor.css'
import { useState, useEffect } from 'react'
import { getPopularMovies } from '../../../services/movies.service'
import Spinner from '../../Spinner/Spinner'
import HorizontalScroll from 'react-scroll-horizontal'
import MovieCard from '../../Movies/MovieCard/MovieCard'


function PopularMoviesHor() {

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

        <div className="HorizontalScrollContainer">
            <div class="fade-effect-scroll left">
            </div>
                {isLoading === true ? <Spinner /> :
                <HorizontalScroll >              
                    {popularMovies.map((movie) => <MovieCard {...movie} key={movie.id} />)}
                </HorizontalScroll>}
            <div class="fade-effect-scroll right">
            </div>
        </div>
    )
}

export default PopularMoviesHor
