import { Container, Button } from "react-bootstrap"
import { Link } from 'react-router-dom'
import MoviesBest2021Hor from "../../../components/Movies/MoviesBest2021Hor/MoviesBest2021Hor"
import MoviesBestHor from "../../../components/Movies/MoviesBestHor/MoviesBestHor"
import MoviesBestsXXHor from "../../../components/Movies/MoviesBestsXXHor/MoviesBestsXXHor"
import MoviesBestsXXIHor from "../../../components/Movies/MoviesBestsXXIHor/MoviesBestsXXIHor"
import MovieShorterThan90Hor from "../../../components/Movies/MovieShorterThan90Hor/MovieShorterThan90Hor"
import MoviesInCinemaHor from "../../../components/Movies/MoviesInCinemaHor/MoviesInCinemaHor"
import PopularMoviesHor from "../../../components/Movies/PopularMoviesHor/PopularMoviesHor"


function MoviesHomePage() {

    return (
        <Container>

            <h1 style={{color: 'grey', textShadow: '2px 2px #000000', fontSize: '80px'}}>Select a list</h1>
            <hr/>

            <Link to="/movies/mostPopular">
                <Button variant="dark" size="xl">Most Popular</Button>
            </Link>
            <PopularMoviesHor/>

            <Link to="/movies/shorterthan90">
                <Button variant="dark" size="xl">Shorter than 90'</Button>
            </Link>
            <MovieShorterThan90Hor/>

            <Link to="/movies/bestofalltime">
                <Button variant="dark" size="xl">Best of All Time</Button>
            </Link>
            <MoviesBestHor/>

            <Link to="/movies/bestof2021">
                <Button variant="dark" size="xl">Best of 2021</Button>
            </Link>
            <MoviesBest2021Hor/>

            <Link to="/movies/bestofsXXI">
                <Button variant="dark" size="xl">Best of sXXI</Button>
            </Link>
            <MoviesBestsXXIHor/>

            <Link to="/movies/bestofsXX">
                <Button variant="dark" size="xl">Best of sXX</Button>
            </Link>
            <MoviesBestsXXHor/>
            
            <Link to="/movies/nowincinemas">
                <Button variant="dark" size="xl">Now in cinemas</Button>
            </Link>
            <MoviesInCinemaHor/>
            
        </Container>
    )
}

export default MoviesHomePage