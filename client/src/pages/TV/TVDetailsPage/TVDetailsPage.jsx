// import './MovieDetailsPage.css'
import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import { deleteTVWatched, getOneTV, seenTVList } from "../../../services/tv.service"
import Spinner from "../../../components/Spinner/Spinner"
import { Carousel, Button } from 'react-bootstrap'
import { toSeeTVList } from '../../../services/tv.service'
import { useContext } from 'react'
import { AuthContext } from '../../../context/auth.context'
import { getUserData } from "../../../services/auth.service"
import { addToCustomListONE, addToCustomListTHREE, addToCustomListTWO, getListONE } from "../../../services/movies.service"



function TVDetailsPage(props) {

    const { isLoggedIn, user } = useContext(AuthContext)

    const { TMDB_id } = useParams()
    const [oneTV, setOneTV] = useState()
    const [isLoading, setIsLoading] = useState(true)
    // const [getUser, setGetUser] = useState()
    const [listONE, setListONE] = useState([])
    const [listTWO, setListTWO] = useState([])
    const [listTHREE, setListTHREE] = useState([])

    const IMG_API = "https://image.tmdb.org/t/p/w1280"


    useEffect(() => {
        getOneTV(TMDB_id)
            .then(response => {
                setOneTV(response.data)
                setIsLoading(false)
            })
            .catch(err => console.log(err))
    }, [TMDB_id])

    // useEffect(() => {
    //     if ( user) {
    //         getUserData(`${user._id}`)
    //             .then(response => {
    //                 setGetUser(response.data)
    //                 // setIsLoading(false)
    //             })
    //             .catch(err => console.log(err))
    //     }
    // }, [user])

    // console.log(user)

    useEffect(() => {
            getListONE(user.myLists[0])
                .then(response => { 
                    setListONE(response.data)
                    // setIsLoading(false)
                })
                .catch(error => console.log(error))
    }, [user])

    useEffect(() => {
        getListONE(user.myLists[1])
            .then(response => { 
                setListTWO(response.data)
                // setIsLoading(false)
            })
            .catch(error => console.log(error))
    }, [user])

    useEffect(() => {
        getListONE(user.myLists[2])
            .then(response => { 
                setListTHREE(response.data)
                // setIsLoading(false)
            })
            .catch(error => console.log(error)) 
    }, [user])



    const handleToSeeTVList = () => {
        toSeeTVList (oneTV.name, user._id)
    }

    const handleSeenTVList = () => {
        deleteTVWatched (oneTV.name, user._id)
        seenTVList (oneTV.name, user._id)
    }

    const handleToCustomListONE = () => {
        addToCustomListONE (oneTV.name, user.myLists[0])
    }

    const handleToCustomListTWO = () => {
        addToCustomListTWO (oneTV.name, user.myLists[1])
    }

    const handleToCustomListTHREE = () => {
        addToCustomListTHREE (oneTV.name, user.myLists[2])
    }


    return (

            isLoading === true ? <Spinner /> :
        <div style={{
            backgroundImage: `url(${IMG_API + oneTV.poster_path})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            marginTop: '-30px',
            backgroundColor: 'rgba(0, 0, 0, 0.5)'}}>
        
            <section className="details_container">
                <div className="img_section">

                <Link to="/tv">
                    <Button variant="dark" size="m" style={{width: '150px', height: '60px', margin: '10px', marginLeft: '40px'}}>Back to TV Series</Button>
                </Link>
                <Carousel variant="dark">
                    <Carousel.Item>
                        <img
                        className="detail-movie-cover"
                        src={IMG_API + oneTV.poster_path}
                        alt="Front cover"
                        />
                        <Carousel.Caption>
                        <h5>Main Poster</h5>
                        </Carousel.Caption>
                    </Carousel.Item>
                    {oneTV.backdrop_path &&
                    <Carousel.Item>
                        <img
                        className="detail-movie-cover"
                        src={IMG_API + oneTV.backdrop_path}
                        alt="Back cover"
                        />
                        <Carousel.Caption>
                        <h5>Backdrop Poster</h5>
                        </Carousel.Caption>
                    </Carousel.Item>}
                </Carousel>


                </div>

                <div className="profile_desc_section">
                {oneTV.name &&
                    <h2 className="title">{oneTV.name}</h2>}
                    <h4 className="tagline">{oneTV.tagline}</h4>
                    {/* <p className="description">Created by: {oneTV.created_by[0].name}/p> */}
                    <p className="description">{oneTV.overview}</p>
                    <p className="description">It has a total of {oneTV.number_of_seasons} seasons, with {oneTV.number_of_episodes} episodes for each season, and a duration of {oneTV.episode_run_time.slice(0, 1)} minutes each episode.</p>
                {oneTV.networks.name &&
                    <p className="description" style={{marginTop: '-15px'}}>The first episode was released on {oneTV.first_air_date}, and the last one on {oneTV.last_episode_to_air.air_date}. You can watch it at {oneTV.networks[0].name}.</p>}
                    <p className="description">Rating: {oneTV.vote_average}/10 ({oneTV.vote_count} votes)</p>
                {/* {oneTV.production_companies[0].logo_path &&    
                    <p className="description">
                        <img className="company-logo" src={IMG_API + oneTV.production_companies[0].logo_path} alt={oneTV.title}/>
                    </p>
                }     */}

                {isLoggedIn &&
                    <div>
                        <div>
                            <button className="card-button" onClick={() => handleToSeeTVList(oneTV.id)}>Add to TV Series to see list</button>
                        </div>
                        <div>
                            <button className="card-button" style={{backgroundColor: 'coral'}} onClick={() => handleSeenTVList(oneTV.id)}>Already seen!</button>
                        </div>
                    </div>
                }

                {user.myLists[0] &&
                    <div>
                        <button className="card-button" onClick={() => handleToCustomListONE(oneTV.id)}>{listONE.listName}</button>
                    </div>                    
                    }

                {user.myLists[1] &&
                    <div>
                        <button className="card-button" onClick={() => handleToCustomListTWO(oneTV.id)}>{listTWO.listName}</button>
                    </div>                    
                    }

                {user.myLists[2] &&
                    <div>
                        <button className="card-button" onClick={() => handleToCustomListTHREE(oneTV.id)}>{listTHREE.listName}</button>
                    </div>                    
                    }
                    
                    <a className="description" href={oneTV.homepage} target="_blank" rel="noreferrer noopener">TV Serie Homepage</a>

                    <div className='cast-container'>
                        <p className='cast-text'>Most relevant actors:</p>
                        <div className='cast-wrapper'>
                        {oneTV.credits.cast.slice(0, 5).map((cast, i) => {
                            return(
                                <div className="cast-card" key={i}>
                                    <img className="cast-pic" src={IMG_API + cast.profile_path} alt={oneTV.name}/>
                                    <p className="cast-name">{cast.name}</p>
                                </div>
                            )
                        })}
                            

                        </div>
                    </div>

                    <div className="interests">
                        {oneTV.genres.map((genre, i) => {
                            return(
                                <span className="interests_item" key={i}>{genre.name}</span>
                            )
                        })}
                    </div>
                    
                </div>
            </section>

        </div>

    )
}

export default TVDetailsPage