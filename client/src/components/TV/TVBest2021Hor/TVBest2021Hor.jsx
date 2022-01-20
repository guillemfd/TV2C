import { useState, useEffect } from 'react'
import { getTVBestOfTwentyOne } from '../../../services/tv.service'
import Spinner from '../../Spinner/Spinner'
import HorizontalScroll from 'react-scroll-horizontal'
import TVCard from '../../TV/TVCard/TVCard'


function TVBest2021Hor() {

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

        <div className="HorizontalScrollContainer">
            <div class="fade-effect-scroll left">
            </div>
                {isLoading === true ? <Spinner /> :
                <HorizontalScroll >              
                    {best2021TV.map((tv) => <TVCard {...tv} key={tv.id} />)}
                </HorizontalScroll>}
            <div class="fade-effect-scroll right">
            </div>
        </div>
    )
}

export default TVBest2021Hor
