import './PopularMoviesHor.css'
import { useState, useEffect } from 'react'
import { mostPopular } from '../../services/movies.service'
import Spinner from '../Spinner/Spinner'
import MovieCardHor from '../MovieCardHor/MovieCardHor.jsx'


function PopularMoviesHor(props) {

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

        isLoading === true ? <Spinner /> :
        <div className="cards_at_PopularMoviesHor">
            {popularMovies.map((movie) => <MovieCardHor {...movie} key={movie.id} />)}
        </div>
    )
}

export default PopularMoviesHor
