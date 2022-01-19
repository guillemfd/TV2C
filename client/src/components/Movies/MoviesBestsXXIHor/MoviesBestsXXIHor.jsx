// import './PopularMoviesHor.css'
import { useState, useEffect } from 'react'
import { getBestOfsXXI } from '../../../services/movies.service'
import Spinner from '../../Spinner/Spinner'
import HorizontalScroll from 'react-scroll-horizontal'
import MovieCard from '../MovieCard/MovieCard'


function MoviesBestsXXIHor() {

    const [bestsXXI, setBestsXXI] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {

        getBestOfsXXI()
            .then(response => { 
                setBestsXXI(response.data)
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
                    {bestsXXI.map((movie) => <MovieCard {...movie} key={movie.id} />)}
                </HorizontalScroll>}
            <div class="fade-effect-scroll right">
            </div>
        </div>
    )
}

export default MoviesBestsXXIHor
