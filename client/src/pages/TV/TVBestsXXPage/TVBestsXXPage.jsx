// import './PopularMoviesPage.css'
import { Container } from "react-bootstrap"
import { useState, useEffect } from 'react'
import { getTVBestOfsXX } from "../../../services/tv.service"
import Spinner from "../../../components/Spinner/Spinner"
import TVCard from "../../../components/TV/TVCard/TVCard"


function TVBestsXXPage(props) {

    const [bestsXXTV, setBestsXXTV] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {

        getTVBestOfsXX()
            .then(response => { 
                setBestsXXTV(response.data)
                setIsLoading(false)
            })
            .catch(error => console.log(error))     
    }, [])


    return (

        isLoading === true ? <Spinner /> :

        <Container>
            <h1>Best of sXX TV series</h1>
            <hr/>

            <div className="cards_at_Movies_Pages">
                {bestsXXTV.map((tv) => <TVCard {...tv} key={tv.id} />)}
            </div>
        </Container>
    )
}

export default TVBestsXXPage