import { Container, Button } from "react-bootstrap"
import { Link } from 'react-router-dom'
import PopularMoviesHor from "../../../components/PopularMoviesHor/PopularMoviesHor"


function MoviesHomePage() {
    return (
        <Container>

            <h1 style={{color: 'grey', textShadow: '2px 2px #000000', fontSize: '80px'}}>Select a list</h1>
            <hr/>
            <Link to="/movies/mostPopular">
                <Button variant="dark" size="xl">Most Popular</Button>
            </Link>

        <PopularMoviesHor/>

        </Container>
    )
}

export default MoviesHomePage