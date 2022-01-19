// import './PopularMoviesHor.css'
import { useState, useEffect } from 'react'
import { getBestOfsXX } from '../../../services/movies.service'
import Spinner from '../../Spinner/Spinner'
import HorizontalScroll from 'react-scroll-horizontal'
import MovieCard from '../MovieCard/MovieCard'


function MoviesBestsXXHor() {

    const [bestsXX, setBestsXX] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {

        getBestOfsXX()
            .then(response => { 
                setBestsXX(response.data)
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
                    {bestsXX.map((movie) => <MovieCard {...movie} key={movie.id} />)}
                </HorizontalScroll>}
            <div class="fade-effect-scroll right">
            </div>
        </div>
    )
}

export default MoviesBestsXXHor
