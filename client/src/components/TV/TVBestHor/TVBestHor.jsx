import { useState, useEffect } from 'react'
import { getTVBestOfAllTime } from '../../../services/tv.service'
import Spinner from '../../Spinner/Spinner'
import HorizontalScroll from 'react-scroll-horizontal'
import TVCard from '../../TV/TVCard/TVCard'


function TVBestHor() {

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

        <div className="HorizontalScrollContainer">
            {isLoading === true ? <Spinner /> :
            <HorizontalScroll >              
                {bestTV.map((tv) => <TVCard {...tv} key={tv.id} />)}
            </HorizontalScroll>}
        </div>
    )
}

export default TVBestHor
