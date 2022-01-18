// import './PopularMoviesPage.css'
import { Container } from "react-bootstrap"
import { useState, useEffect } from 'react'
import { getTVBestOfAllTime } from "../../../services/tv.service"
import Spinner from "../../../components/Spinner/Spinner"
import TVCard from "../../../components/TV/TVCard/TVCard"


function TVBestPage(props) {

    const [bestTV, setBestTV] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {

        getTVBestOfAllTime()
            .then(response => { 
                setBestTV(response.data)
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
                {bestTV.map((tv) => <TVCard {...tv} key={tv.id} />)}
            </div>
        </Container>
    )
}

export default TVBestPage