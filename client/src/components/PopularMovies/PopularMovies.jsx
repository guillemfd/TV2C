import './PopularMovies.css'
import { useState, useEffect } from 'react'
import { mostPopular } from '../../services/movies.service'
import Spinner from '../Spinner/Spinner'
import MovieCard from '../MovieCard/MovieCard.jsx'


function PopularMovies(props) {

    const [popularMovies, setPopularMovies] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {

        mostPopular()
            .then(response => { 
                setPopularMovies(response.data)
                setIsLoading(false)
            })
            .catch(error => console.log(error))


//----- ESTE ESTÁ FUNCIONANDO -------        
        // fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}`)
        // // fetch(`https://api.themoviedb.org/3/movie/popular?api_key=147b9c6e5e6d4e77350febe714463b30`)
        //     .then(response => response.json())
        //     .then(popularMovies => setPopularMovies(popularMovies.results))
        //     .catch(error => console.log(error))
//----- ESTE ESTÁ FUNCIONANDO -------        

    }, [])

    return (

        isLoading === true ? <Spinner /> :
        <div className="cards_at_PopularMovies">
            {popularMovies.map((movie) => <MovieCard {...movie} key={movie.id} />)}
        </div>
    )
}

export default PopularMovies
