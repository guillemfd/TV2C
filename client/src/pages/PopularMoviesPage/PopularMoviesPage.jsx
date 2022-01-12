import PopularMovies from "../../components/PopularMovies/PopularMovies"
import { Container } from "react-bootstrap"

function PopularMoviesPage(props) {

    return (
        <Container>
            <h1>20 Most Popular Movies</h1>
            <hr/>

            <PopularMovies />

        </Container>
    )
}

export default PopularMoviesPage