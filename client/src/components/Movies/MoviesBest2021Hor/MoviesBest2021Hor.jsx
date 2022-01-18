// import './PopularMoviesHor.css'
import { useState, useEffect } from 'react'
import { getBestOfTwentyOne } from '../../../services/movies.service'
import Spinner from '../../Spinner/Spinner'
import HorizontalScroll from 'react-scroll-horizontal'
import MovieCard from '../MovieCard/MovieCard'


function MoviesBest2021Hor() {

    const [best2021, setBest2021] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {

        getBestOfTwentyOne()
            .then(response => { 
                setBest2021(response.data)
                setIsLoading(false)
            })
            .catch(error => console.log(error))    

    }, [])

    return (

        <div className="HorizontalScrollContainer">
            {isLoading === true ? <Spinner /> :
            <HorizontalScroll >              
                {best2021.map((movie) => <MovieCard {...movie} key={movie.id} />)}
            </HorizontalScroll>}
        </div>
    )
}

export default MoviesBest2021Hor
