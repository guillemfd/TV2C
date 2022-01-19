// import './PopularMoviesPage.css'
import { Container } from "react-bootstrap"
import { useState, useEffect } from 'react'
import { getTVBestOfsXXI } from "../../../services/tv.service"
import Spinner from "../../../components/Spinner/Spinner"
import TVCard from "../../../components/TV/TVCard/TVCard"


function TVBestsXXIPage(props) {

    const [bestsXXITV, setBestsXXITV] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {

        getTVBestOfsXXI()
            .then(response => { 
                setBestsXXITV(response.data)
                setIsLoading(false)
            })
            .catch(error => console.log(error))     
    }, [])


    return (

        isLoading === true ? <Spinner /> :

        <Container>
            <h1>Best of sXXI TV series</h1>
            <hr/>

            <div className="cards_at_Movies_Pages">
                {bestsXXITV.map((tv) => <TVCard {...tv} key={tv.id} />)}
            </div>
        </Container>
    )
}

export default TVBestsXXIPage