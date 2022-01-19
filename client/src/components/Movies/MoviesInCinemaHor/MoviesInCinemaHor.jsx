// import './PopularMoviesHor.css'
import { useState, useEffect } from 'react'
import { getNowInCinemas } from '../../../services/movies.service'
import Spinner from '../../Spinner/Spinner'
import HorizontalScroll from 'react-scroll-horizontal'
import MovieCard from '../MovieCard/MovieCard'


function MoviesInCinemaHor() {

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

        <div className="HorizontalScrollContainer">
            <div class="fade-effect-scroll left">
            </div>
                {isLoading === true ? <Spinner /> :
                <HorizontalScroll >              
                    {inCinema.map((movie) => <MovieCard {...movie} key={movie.id} />)}
                </HorizontalScroll>}
            <div class="fade-effect-scroll right">
            </div>
        </div>
    )
}

export default MoviesInCinemaHor
