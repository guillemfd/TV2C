// import './PopularMoviesHor.css'
import { useState, useEffect } from 'react'
import { getBestOfAllTime } from '../../../services/movies.service'
import Spinner from '../../Spinner/Spinner'
import HorizontalScroll from 'react-scroll-horizontal'
import MovieCard from '../MovieCard/MovieCard'


function MoviesBestHor() {

    const [bestAll, setBestAll] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {

        getBestOfAllTime()
            .then(response => { 
                setBestAll(response.data)
                setIsLoading(false)
            })
            .catch(error => console.log(error))    

    }, [])

    return (

        <div className="HorizontalScrollContainer">
            {isLoading === true ? <Spinner /> :
            <HorizontalScroll >              
                {bestAll.map((movie) => <MovieCard {...movie} key={movie.id} />)}
            </HorizontalScroll>}
        </div>
    )
}

export default MoviesBestHor
