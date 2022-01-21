import './NavBar.css'
import { Navbar, Nav, Container, NavLink, NavDropdown, Form, FormControl, Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext, verifyStoredToken } from '../../context/auth.context'
import { useEffect, useState } from "react"
// import { getUserData } from '../../services/auth.service'
import { getListONE } from "../../services/movies.service"




function NavBar() {

    const { isLoggedIn, user, logOutUser } = useContext(AuthContext)
    const [listONE, setListONE] = useState([])
    const [listTWO, setListTWO] = useState([])
    const [listTHREE, setListTHREE] = useState([])

    useEffect(() => {
        return () => {
            console.log("cleaned up");
          };
    }, [user])

console.log("user data @ NavBar-->")
console.log(user)

    // const [getUser, setGetUser] = useState()

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

    // console.log('HOLA getUser')
    // console.log(getUser)

// ---------- ESTO SOLO FUNCIONA UNA VEZ CARGADO EL USUARIO ------------------------------
    // useEffect(() => {
    //     if (user.myLists[0]){
    //         getListONE(user.myLists[0])
    //             .then(response => { 
    //                 setListONE(response.data)
    //                 // setIsLoading(false)
    //             })
    //             .catch(error => console.log(error))
    //     }
    // }, [user])

    // useEffect(() => {
    //     getListONE(user.myLists[1])
    //         .then(response => { 
    //             setListTWO(response.data)
    //             // setIsLoading(false)
    //         })
    //         .catch(error => console.log(error))
    // }, [user])

    // useEffect(() => {
    //     getListONE(user.myLists[2])
    //         .then(response => { 
    //             setListTHREE(response.data)
    //             // setIsLoading(false)
    //         })
    //         .catch(error => console.log(error)) 
    // }, [user])
// ---------- ESTO SOLO FUNCIONA UNA VEZ CARGADO EL USUARIO ------------------------------




    return (
        <Navbar bg="dark" expand="lg" variant="dark">
            <Container>
                <Link to="/" className="navbar-brand">TV2C</Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">

                <Nav>
                    <NavDropdown title="Movies By..." id="basic-nav-dropdown">
                        <NavDropdown.Item >
                            <Link to="/movies" className='dropdown-item'>View All</Link>
                        </NavDropdown.Item>
                        <NavDropdown.Item >
                            <Link to="/movies/mostPopular" className='dropdown-item'>Most Popular</Link>
                        </NavDropdown.Item>
                        <NavDropdown.Item >
                            <Link to="/movies/shorterthan90" className='dropdown-item'>Shorter than 90'</Link>
                        </NavDropdown.Item>
                        <NavDropdown.Item >
                            <Link to="/movies/nowincinemas" className='dropdown-item'>Now in cinemas</Link>
                        </NavDropdown.Item>    
                                <NavDropdown.Divider />
                        <NavDropdown.Item >
                            <span className='dropdown-item' style={{fontWeight: 'bold'}}>Best of...</span>
                        </NavDropdown.Item>
                        <NavDropdown.Item >
                            <Link to="/movies/bestofalltime" className='dropdown-item'>All Time</Link>
                        </NavDropdown.Item>
                        <NavDropdown.Item >
                            <Link to="/movies/bestof2021" className='dropdown-item'>Last Year</Link>
                        </NavDropdown.Item>
                        <NavDropdown.Item >
                            <Link to="/movies/bestofsXXI" className='dropdown-item'>XXI Century</Link>
                        </NavDropdown.Item> 
                        <NavDropdown.Item >
                            <Link to="/movies/bestofsXX" className='dropdown-item'>XX Century</Link>
                        </NavDropdown.Item>
                                <NavDropdown.Divider />
                    </NavDropdown>


                    <NavDropdown title="TV Series By..." id="basic-nav-dropdown">
                        <NavDropdown.Item >
                            <Link to="/tv" className='dropdown-item'>View All</Link>
                        </NavDropdown.Item>
                        <NavDropdown.Item >
                            <Link to="/tv/mostPopular" className='dropdown-item'>Most Popular</Link>
                        </NavDropdown.Item>
                        <NavDropdown.Item >
                            <Link to="/tv/shorterthan25" className='dropdown-item'>Shorter than 25'</Link>
                        </NavDropdown.Item>    
                                <NavDropdown.Divider />
                        <NavDropdown.Item >
                            <span className='dropdown-item' style={{fontWeight: 'bold'}}>Best of...</span>
                        </NavDropdown.Item>
                        <NavDropdown.Item >
                            <Link to="/tv/bestofalltime" className='dropdown-item'>All Time</Link>
                        </NavDropdown.Item>
                        <NavDropdown.Item >
                            <Link to="/tv/bestof2021" className='dropdown-item'>Last Year</Link>
                        </NavDropdown.Item>
                        <NavDropdown.Item >
                            <Link to="/tv/bestofsXXI" className='dropdown-item'>XXI Century</Link>
                        </NavDropdown.Item> 
                        <NavDropdown.Item >
                            <Link to="/tv/bestofsXX" className='dropdown-item'>XX Century</Link>
                        </NavDropdown.Item>
                                <NavDropdown.Divider />
                    </NavDropdown>            


                    {isLoggedIn ?
                        <>

                            <NavDropdown title="My Lists" id="basic-nav-dropdown">
                                <NavDropdown.Item >
                                    <span className='dropdown-item' style={{textAlign: 'left', fontWeight: 'bold'}}>Default Lists</span>
                                </NavDropdown.Item>
                                <NavDropdown.Item >
                                    <Link to="/myLists/ListToSeeTV" className='dropdown-item'>Wish List</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item >
                                    <Link to="/mostPopular" className='dropdown-item'>Already Seen</Link>
                                </NavDropdown.Item>
                                            <NavDropdown.Divider />                            
                                
                                <NavDropdown.Item >
                                    <span className='dropdown-item' style={{textAlign: 'left', fontWeight: 'bold'}}>Custom Lists</span>
                                </NavDropdown.Item>
                            {user.myLists[0] &&
                                <div> 
                                <NavDropdown.Item >
                                    <Link to={`/myLists/${user.myLists[0]}`} className='dropdown-item'>List 1{listONE.listName}</Link>
                                </NavDropdown.Item>
                                </div>
                            }
                            {user.myLists[1] &&
                                <NavDropdown.Item >
                                    <Link to={`/myLists/${user.myLists[1]}`} className='dropdown-item'>List 2</Link>
                                </NavDropdown.Item>
                            }
                            {user.myLists[2] &&
                                <NavDropdown.Item >
                                    <Link to={`/myLists/${user.myLists[2]}`} className='dropdown-item'>List 3</Link>
                                </NavDropdown.Item>
                            }
                            </NavDropdown>


                            <NavLink as="span" className="nav-link">Logged in as {user?.username}</NavLink>
                            <NavLink as="span" onClick={logOutUser} className="nav-link">Log Out</NavLink>
                        </>
                        :
                        <>
                            <Link to="/login" className="nav-link">Log in</Link>
                            <Link to="/signup" className="nav-link">Sign Up</Link>
                        </>                    
                    }

                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar