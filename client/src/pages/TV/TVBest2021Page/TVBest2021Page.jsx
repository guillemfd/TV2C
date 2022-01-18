// import './PopularMoviesPage.css'
import { Container } from "react-bootstrap"
import { useState, useEffect } from 'react'
import { getTVBestOfTwentyOne } from "../../../services/tv.service"
import Spinner from "../../../components/Spinner/Spinner"
import TVCard from "../../../components/TV/TVCard/TVCard"


function TVBest2021Page(props) {

    const [best2021TV, setBest2021TV] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {

        getTVBestOfTwentyOne()
            .then(response => { 
                setBest2021TV(response.data)
                setIsLoading(false)
            })
            .catch(error => console.log(error))     
    }, [])


    return (

        isLoading === true ? <Spinner /> :

        <Container>
            <h1>Best of 2021 TV series</h1>
            <hr/>

            <div className="cards_at_Movies_Pages">
                {best2021TV.map((tv) => <TVCard {...tv} key={tv.id} />)}
            </div>
        </Container>
    )
}

export default TVBest2021Page