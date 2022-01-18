import '../MoviesPages.css'
import { Container } from "react-bootstrap"
import { useState, useEffect } from 'react'
import { getBestOfAllTime } from '../../../services/movies.service'
import MovieCard from '../../../components/Movies/MovieCard/MovieCard'
import Spinner from '../../../components/Spinner/Spinner'



function MoviesBestPage(props) {

    const [bestAll, setBestAll] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {

        getBestOfAllTime()
            .then(response => { 
                setBestAll(response.data)
                setIsLoading(false)
            })
            .catch(error => console.log(error))    

    }, [])

    return (

        isLoading === true ? <Spinner /> :
        <Container >
            <div className="cards_at_Movies_Pages">
                {bestAll.map((movie) => <MovieCard {...movie} key={movie.id} />)}
            </div>
        </Container>
    )
}
export default MoviesBestPage