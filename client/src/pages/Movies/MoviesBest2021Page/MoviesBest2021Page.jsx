import '../MoviesPages.css'
import { Container } from "react-bootstrap"
import { useState, useEffect } from 'react'
import { getBestOfTwentyOne } from '../../../services/movies.service'
import MovieCard from '../../../components/Movies/MovieCard/MovieCard'
import Spinner from '../../../components/Spinner/Spinner'



function MoviesBest2021Page(props) {

    const [best2021, setBest2021] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {

        getBestOfTwentyOne()
            .then(response => { 
                setBest2021(response.data)
                setIsLoading(false)
            })
            .catch(error => console.log(error))    

    }, [])

    return (

        isLoading === true ? <Spinner /> :
        <Container >
            <div className="cards_at_Movies_Pages">
                {best2021.map((movie) => <MovieCard {...movie} key={movie.id} />)}
            </div>
        </Container>
    )
}
export default MoviesBest2021Page