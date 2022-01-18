// import './PopularMoviesHor.css'
import { useState, useEffect } from 'react'
import { getShorterThan } from '../../../services/movies.service'
import Spinner from '../../Spinner/Spinner'
import HorizontalScroll from 'react-scroll-horizontal'
import MovieCard from '../MovieCard/MovieCard'


function MovieShorterThan90Hor() {

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

        <div className="HorizontalScrollContainer">
            {isLoading === true ? <Spinner /> :
            <HorizontalScroll >              
                {shorterThan.map((movie) => <MovieCard {...movie} key={movie.id} />)}
            </HorizontalScroll>}
        </div>
    )
}

export default MovieShorterThan90Hor
