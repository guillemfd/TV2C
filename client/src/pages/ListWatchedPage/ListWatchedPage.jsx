import { Container } from "react-bootstrap"
import { useContext } from 'react'
import { AuthContext } from '../../context/auth.context'



function ListWatchedPage(props) {

    const { user } = useContext(AuthContext)


    return (

        <Container>
            <h1 className="title">List: "TV Series to watch"</h1>
            <h2 className="Page_Subtitle" style={{marginLeft: '70px'}}>It was created on {user.createdAt.slice(0, 10)}, and now it has a total of {user.toseeTVList.length} elements.</h2>
            <table className="table">
                <tr>
                    <th>Movie / TV Serie</th>
                </tr>
                {user.seenTVList.map((title, i) => {
                return (
                    <tr>
                        <td key={i}>· {title}.</td>
                    </tr>
                 )})}
            </table>
        </Container>
    )
}


export default ListWatchedPage
