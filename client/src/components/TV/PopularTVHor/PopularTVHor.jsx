import { useState, useEffect } from 'react'
import { getPopularTV } from '../../../services/tv.service'
import Spinner from '../../Spinner/Spinner'
import HorizontalScroll from 'react-scroll-horizontal'
import TVCard from '../../TV/TVCard/TVCard'


function PopularTVHor() {

    const [popularTV, setPopularTV] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {

        getPopularTV()
            .then(response => { 
                setPopularTV(response.data)
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
                    {popularTV.map((tv) => <TVCard {...tv} key={tv.id} />)}
                </HorizontalScroll>}
            <div class="fade-effect-scroll right">
            </div>
        </div>
    )
}

export default PopularTVHor
