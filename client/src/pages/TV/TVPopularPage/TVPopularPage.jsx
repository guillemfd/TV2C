// import './PopularMoviesPage.css'
import { Container } from "react-bootstrap"
import { useState, useEffect } from 'react'
import { getPopularTV } from "../../../services/tv.service"
import Spinner from "../../../components/Spinner/Spinner"
import TVCard from "../../../components/TV/TVCard/TVCard"


function TVPopularPage(props) {

    const [popularTV, setPopularTV] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {

        getPopularTV()
            .then(response => { 
                setPopularTV(response.data)
                setIsLoading(false)
            })
            .catch(error => console.log(error))     
    }, [])


    return (

        isLoading === true ? <Spinner /> :

        <Container>
            <h1>20 Most Popular TV series</h1>
            <hr/>

            <div className="cards_at_PopularMovies">
                {popularTV.map((tv) => <TVCard {...tv} key={tv.id} />)}
            </div>
        </Container>
    )
}

export default TVPopularPage