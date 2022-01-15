// import './PopularMovies.css'
import { useState, useEffect } from 'react'
import { mostPopularTV } from '../../services/tv.service'
import Spinner from '../Spinner/Spinner'
import TVCard from '../TVCard/TVCard'


function PopularTV(props) {

    const [popularTV, setPopularTV] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {

        mostPopularTV()
            .then(response => { 
                setPopularTV(response.data)
                setIsLoading(false)
            })
            .catch(error => console.log(error))     

    }, [])

    return (

        isLoading === true ? <Spinner /> :
        <div className="cards_at_PopularMovies">
            {popularTV.map((tv) => <TVCard {...tv} key={tv.id} />)}
        </div>
    )
}

export default PopularTV
