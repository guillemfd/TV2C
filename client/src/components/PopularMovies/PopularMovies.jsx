import './PopularMovies.css'
import  { useState, useEffect } from 'react'
import { mostPopular } from '../../services/movies.service'
import Spinner from '../Spinner/Spinner'


function PopularMovies(props) {

    const [popularMovies, setPopularMovies] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const IMG_API = "https://image.tmdb.org/t/p/w1280"

    useEffect(() => {

        mostPopular()
            .then(response => { 
                setPopularMovies(response.data)
                setIsLoading(false)
            })
            .catch(error => console.log(error))

        // isLoading(false)

//----- ESTE ESTÁ FUNCIONANDO -------        
        // fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}`)
        // // fetch(`https://api.themoviedb.org/3/movie/popular?api_key=147b9c6e5e6d4e77350febe714463b30`)
        //     .then(response => response.json())
        //     .then(popularMovies => setPopularMovies(popularMovies.results))
        //     .catch(error => console.log(error))
//----- ESTE ESTÁ FUNCIONANDO -------        


        // axios
        //     .get("https://api.themoviedb.org/3/movie/top_rated?api_key=147b9c6e5e6d4e77350febe714463b30")
        //     // .then((response) => setApartments(response.data))
        //     .then((response) => response.json())
        //     .then(popularMovies => setPopularMovies(popularMovies.results))
        //     .catch(err => console.log(err))

    }, [])

    console.log(popularMovies)

    return (
        <div className="card-preContainer">
            {/* isLoading === true ? <Spinner /> : */}
                {popularMovies.map((movie) => (
                    <div className="card-container" key={movie._id}>
                        <img className="movie-cover" src={IMG_API + movie.poster_path} alt={movie.title}/>
                        <div className="movie-card">
                            <span className="card-text">{movie.title}</span>
                            <h5>{movie.overview}</h5>
                            <button>See More</button>
                        </div>
                    </div>
                ))}
        </div>

    )
}

export default PopularMovies

                    // {/* <div key={movie._id} className="card">
                    //     <img src={IMG_API + movie.poster_path} style={{width: '200px'}} alt="apartment" />
                    //     <h3>{movie.title}</h3>
                    //     <p>Overview: {movie.overview}</p>
                    //     <hr/>
                    // </div> */}