import '../MoviesPages.css'
import { Container } from "react-bootstrap"
import { useState, useEffect } from 'react'
import { getBestOfsXXI } from '../../../services/movies.service'
import MovieCard from '../../../components/Movies/MovieCard/MovieCard'
import Spinner from '../../../components/Spinner/Spinner'



function MoviesBestsXXIPage(props) {

    const [bestsXXI, setBestsXXI] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {

        getBestOfsXXI()
            .then(response => { 
                setBestsXXI(response.data)
                setIsLoading(false)
            })
            .catch(error => console.log(error))    

    }, [])

    return (

        isLoading === true ? <Spinner /> :
        <Container >
            <div className="cards_at_Movies_Pages">
                {bestsXXI.map((movie) => <MovieCard {...movie} key={movie.id} />)}
            </div>
        </Container>
    )
}
export default MoviesBestsXXIPage