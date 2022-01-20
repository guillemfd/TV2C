import { useState, useEffect } from 'react'
import { getTVBestOfsXXI } from '../../../services/tv.service'
import Spinner from '../../Spinner/Spinner'
import HorizontalScroll from 'react-scroll-horizontal'
import TVCard from '../TVCard/TVCard'


function TVBestsXXIHor() {


    const [bestsXXITV, setBestsXXITV] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {

        getTVBestOfsXXI()
            .then(response => { 
                setBestsXXITV(response.data)
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
                    {bestsXXITV.map((tv) => <TVCard {...tv} key={tv.id} />)}
                </HorizontalScroll>}
            <div class="fade-effect-scroll right">
            </div>
        </div>
    )
}

export default TVBestsXXIHor
