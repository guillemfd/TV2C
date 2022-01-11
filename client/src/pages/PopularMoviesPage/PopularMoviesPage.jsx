import  { useState, useEffect } from 'react'
import axios from "axios"


function PopularMovies(props) {

    const [popularMovies, setPopularMovies] = useState([])

    const IMG_API = "https://image.tmdb.org/t/p/w1280"

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}`)
        // fetch(`https://api.themoviedb.org/3/movie/popular?api_key=147b9c6e5e6d4e77350febe714463b30`)
            .then(response => response.json())
            .then(popularMovies => setPopularMovies(popularMovies.results))
            .catch(error => console.log(error))

        // axios
        //     .get("https://api.themoviedb.org/3/movie/top_rated?api_key=147b9c6e5e6d4e77350febe714463b30")
        //     // .then((response) => setApartments(response.data))
        //     .then((response) => response.json())
        //     .then(popularMovies => setPopularMovies(popularMovies.results))
        //     .catch(err => console.log(err))

    }, [])

    return (
        <section>
            <h1>20 Most Popular Movies</h1>
            <hr/>
            {
                popularMovies.length ?
                popularMovies.map(movie => 
                <div>
                    <img src={IMG_API + movie.poster_path} style={{height:'300px'}} alt="apartment" />
                    <h2>{movie.title}</h2>
                    <p>{movie.overview}</p>
                </div>
                )
                :
                <h1>Cargando...</h1>
            }
        </section>
    )
}

export default PopularMovies