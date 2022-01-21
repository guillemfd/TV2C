// import './PopularMoviesPage.css'
import { Container } from "react-bootstrap"
import { useState, useEffect } from 'react'
import { getPopularTV } from "../../services/tv.service"
import Spinner from "../../components/Spinner/Spinner"
import TVCard from "../../components/TV/TVCard/TVCard"
import { getIdsListONE, getListONE } from "../../services/movies.service"
import { useParams } from "react-router-dom"
import LogInForm from "../../components/LogInForm/LogInForm"
import { useContext } from 'react'
import { AuthContext } from '../../context/auth.context'



function ListToSeeTVPage(props) {

    // const { listId } = useParams()
    // const [listONE, setListONE] = useState([])
    // const [idsListONE, setIdsListOne] = useState([])
    // const [isLoading, setIsLoading] = useState(true)
    const { isLoggedIn, user, logOutUser } = useContext(AuthContext)


console.log("user data -->")
console.log(user)

    // useEffect(() => {

    //     getListONE(listId)
    //         .then(response => { 
    //             setListONE(response.data)
    //             setIsLoading(false)
    //         })
    //         .catch(error => console.log(error))     
    // }, [])

    // useEffect(() => {

    //     getIdsListONE(listId)
    //         .then(response => { 
    //             setIdsListOne(response.data)
    //             // setIsLoading(false)
    //         })
    //         .catch(error => console.log(error))     
    // }, [])
    


    return (

        // isLoading === true ? <Spinner /> :

        <Container>
            <h1 className="title">List: "TV Series to watch"</h1>
            <h2 className="Page_Subtitle" style={{marginLeft: '70px'}}>It was created on {user.createdAt.slice(0, 10)}, and now it has a total of {user.toseeTVList.length} elements.</h2>
            <table className="table">
                <tr>
                    <th>Movie / TV Serie</th>
                </tr>
                {user.toseeTVList.map((title, i) => {
                return (
                    <tr>
                        <td key={i}>· {title}.</td>
                    </tr>
                 )})}
            </table>
        </Container>
    )
}


export default ListToSeeTVPage
