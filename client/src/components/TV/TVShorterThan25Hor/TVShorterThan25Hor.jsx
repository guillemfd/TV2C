import { useState, useEffect } from 'react'
import { getTVShorterThanTwenty } from '../../../services/tv.service'
import Spinner from '../../Spinner/Spinner'
import HorizontalScroll from 'react-scroll-horizontal'
import TVCard from '../../TV/TVCard/TVCard'


function TVShorterThan25Hor() {

    const [shorterThan25TV, setShorterThan25TV] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {

        getTVShorterThanTwenty()
            .then(response => { 
                setShorterThan25TV(response.data)
                setIsLoading(false)
            })
            .catch(error => console.log(error))     
    }, [])

    return (

        <div className="HorizontalScrollContainer">
            {isLoading === true ? <Spinner /> :
            <HorizontalScroll >              
                {shorterThan25TV.map((tv) => <TVCard {...tv} key={tv.id} />)}
            </HorizontalScroll>}
        </div>
    )
}

export default TVShorterThan25Hor
