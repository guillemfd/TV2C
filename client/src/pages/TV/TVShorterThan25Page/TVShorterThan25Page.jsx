// import './PopularMoviesPage.css'
import { Container } from "react-bootstrap"
import { useState, useEffect } from 'react'
import { getTVShorterThanTwenty } from "../../../services/tv.service"
import Spinner from "../../../components/Spinner/Spinner"
import TVCard from "../../../components/TV/TVCard/TVCard"


function TVShorterThan25Page(props) {

    const [shorterThan25TV, setShorterThan25TV] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {

        getTVShorterThanTwenty()
            .then(response => { 
                setShorterThan25TV(response.data)
                setIsLoading(false)
            })
            .catch(error => console.log(error))     
    }, [])


    return (

        isLoading === true ? <Spinner /> :

        <Container>
            <h1>Shorter than 25 minutes TV series</h1>
            <hr/>

            <div className="cards_at_Movies_Pages">
                {shorterThan25TV.map((tv) => <TVCard {...tv} key={tv.id} />)}
            </div>
        </Container>
    )
}

export default TVShorterThan25Page