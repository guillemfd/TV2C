import { Container, Button } from "react-bootstrap"
import { Link } from 'react-router-dom'
import MoviesSearchBar from "../../components/Movies/MoviesSearchBar/MoviesSearchBar"
import TVSearchBar from "../../components/TV/TVSearchBar/TVSearchBar"
import NewListForm from "../../components/NewListForm/NewListForm"
import BackGroundIMG from '../../img/photo-1489599849927-2ee91cede3ba.jpg'
import './HomePage.css'
import { useContext } from 'react'
import { AuthContext } from '../../context/auth.context'




function HomePage() {

    const { isLoggedIn, user, logOutUser } = useContext(AuthContext)


    return (
        <Container>
            <div id="HomePageBackGround">
                <img src={BackGroundIMG} alt="HomePageBackGround"></img>
            </div>
            <h1 className="Page_Title">Welcome to TV2C app</h1>
            <h5 className="Page_Subtitle">Make personalised lists, update your "To See" list or just look for new movies & TV Series</h5>
            <hr/>

         {isLoggedIn &&
            <NewListForm />

         }   
            <MoviesSearchBar />
            <TVSearchBar />

        </Container>
    )
}

export default HomePage