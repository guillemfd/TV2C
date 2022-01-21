// import './PopularMoviesPage.css'
import { Container } from "react-bootstrap"
import { useState, useEffect } from 'react'
import { getPopularTV } from "../../services/tv.service"
import Spinner from "../../components/Spinner/Spinner"
import TVCard from "../../components/TV/TVCard/TVCard"
import { getIdsListONE, getListONE } from "../../services/movies.service"
import { useParams } from "react-router-dom"
import LogInForm from "../../components/LogInForm/LogInForm"



function ListONEPage(props) {

    const { listId } = useParams()
    const [listONE, setListONE] = useState([])
    const [idsListONE, setIdsListOne] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {

        getListONE(listId)
            .then(response => { 
                setListONE(response.data)
                setIsLoading(false)
            })
            .catch(error => console.log(error))     
    }, [])

    useEffect(() => {

        getIdsListONE(listId)
            .then(response => { 
                setIdsListOne(response.data)
                // setIsLoading(false)
            })
            .catch(error => console.log(error))     
    }, [])
    
    console.log('aquí van los IDS')
    console.log('SOY LISTonepAGE')
    console.log(listONE)
    console.log('eeeeeeeeeeooooooooooooo')

    console.log(listONE.listName)
    console.log(listONE.TMDBids)

    console.log('aquí van los IDS')
    console.log(idsListONE)


    return (

        isLoading === true ? <Spinner /> :

        <Container>
            <h1 style={{color: 'white'}}>This is your list: "{listONE.listName}"</h1>
            <h2 style={{color: 'white'}}>It was created on {listONE.createdAt.slice(0, 10)}, and now it has a total of {listONE.TMDBids.length} elements.</h2>
            <h1 style={{color: 'white'}}>{listONE.TMDBids[0]}</h1>
            <div className="cards_at_Movies_Pages">
                {listONE.TMDBids.map((id, i) => {
                return (
                    <h1 style={{color: 'white'}} key={i}>{id} popi</h1>
                 )})}
            </div>

            {/* <hr/>

            <div className="cards_at_Movies_Pages">
                {popularTV.map((tv) => <TVCard {...tv} key={tv.id} />)}
            </div> */}
        </Container>
    )
}

export default ListONEPage
