// import './MovieDetailsPage.css'
import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import { getUserData } from "../../services/auth.service"
import Spinner from "../../components/Spinner/Spinner"


function ProfileDetailsPage() {

    const { userId } = useParams()
    const [getUser, setGetUser] = useState()
    const [isLoading, setIsLoading] = useState(true)


    useEffect(() => {

        getUserData(userId)
            .then(response => {
                setGetUser(response.data)
                setIsLoading(false)
            })
            .catch(err => console.log(err))
    }, [])

    return (

            isLoading === true ? <Spinner /> :
        <>

            <section className="details_container">
                <div className="profile_desc_section">
                     <p className="description">{getUser.username}</p>
                     <p className="description">{getUser.email}</p>
                     <p className="description">{getUser.moviesWishList.length}</p>
                </div>
            </section>

        </>

    )
}

export default ProfileDetailsPage