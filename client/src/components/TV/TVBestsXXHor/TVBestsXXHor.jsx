import { useState, useEffect } from 'react'
import { getTVBestOfsXX } from '../../../services/tv.service'
import Spinner from '../../Spinner/Spinner'
import HorizontalScroll from 'react-scroll-horizontal'
import TVCard from '../TVCard/TVCard'


function TVBestsXXHor() {


    const [bestsXXTV, setBestsXXTV] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {

        getTVBestOfsXX()
            .then(response => { 
                setBestsXXTV(response.data)
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
                    {bestsXXTV.map((tv) => <TVCard {...tv} key={tv.id} />)}
                </HorizontalScroll>}
            <div class="fade-effect-scroll right">
            </div>
        </div>
    )
}

export default TVBestsXXHor
