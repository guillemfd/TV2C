import '../MoviesPages.css'
import { Container } from "react-bootstrap"
import { useState, useEffect } from 'react'
import { getBestOfsXX } from '../../../services/movies.service'
import MovieCard from '../../../components/Movies/MovieCard/MovieCard'
import Spinner from '../../../components/Spinner/Spinner'



function MoviesBestsXXPage(props) {

    const [bestsXX, setBestsXX] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {

        getBestOfsXX()
            .then(response => { 
                setBestsXX(response.data)
                setIsLoading(false)
            })
            .catch(error => console.log(error))    

    }, [])

    return (

        isLoading === true ? <Spinner /> :
        <Container >
            <div className="cards_at_Movies_Pages">
                {bestsXX.map((movie) => <MovieCard {...movie} key={movie.id} />)}
            </div>
        </Container>
    )
}
export default MoviesBestsXXPage