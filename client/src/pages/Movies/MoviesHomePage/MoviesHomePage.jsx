import { Container, Button } from "react-bootstrap"
import { Link } from 'react-router-dom'
import MoviesBestHor from "../../../components/Movies/MoviesBestHor/MoviesBestHor"
import MovieShorterThan90Hor from "../../../components/Movies/MovieShorterThan90Hor/MovieShorterThan90Hor"
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

        </Container>
    )
}

export default MoviesHomePage