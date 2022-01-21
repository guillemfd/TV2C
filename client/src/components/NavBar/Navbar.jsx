import './NavBar.css'
import { Navbar, Nav, Container, NavLink, NavDropdown, Form, FormControl, Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from '../../context/auth.context'
import { useEffect, useState } from "react"
import { getUserData } from '../../services/auth.service'



function NavBar() {

    const { isLoggedIn, user, logOutUser } = useContext(AuthContext)
    const [getUser, setGetUser] = useState()

    useEffect(() => {
        if ( user) {
            getUserData(`${user._id}`)
                .then(response => {
                    setGetUser(response.data)
                    // setIsLoading(false)
                })
                .catch(err => console.log(err))
        }
    }, [user])

    console.log('HOLA getUser')
    console.log(getUser)


    return (
        <Navbar bg="dark" expand="lg" variant="dark">
            <Container>
                <Link to="/" className="navbar-brand">TV2C</Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">

                <Nav>
                    <NavDropdown title="Movies By..." id="basic-nav-dropdown">
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
                            <Link to="/movies/bestof2021" className='dropdown-item'>Last year</Link>
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
                            <Link to="/tv/bestof2021" className='dropdown-item'>Last year</Link>
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
                                    <Link to="/mostPopular" className='dropdown-item'>Wish List</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item >
                                    <Link to="/mostPopular" className='dropdown-item'>Already Seen</Link>
                                </NavDropdown.Item>
                                            <NavDropdown.Divider />
                            {/* {getUser.myLists[0] &&  */}
                            {getUser&& 
                                <div>
                                <NavDropdown.Item >
                                    <span className='dropdown-item' style={{textAlign: 'left', fontWeight: 'bold'}}>Custom Lists</span>
                                </NavDropdown.Item>
                                <NavDropdown.Item >
                                    <Link to={`/myLists/${getUser.myLists[0]}`} className='dropdown-item'>List 1</Link>
                                </NavDropdown.Item>
                                </div>
                            }
                            {getUser &&
                                <NavDropdown.Item >
                                    <Link to={`/myLists/${getUser.myLists[1]}`} className='dropdown-item'>List 2</Link>
                                </NavDropdown.Item>
                            }
                            {getUser &&
                                <NavDropdown.Item >
                                    <Link to={`/myLists/${getUser.myLists[2]}`} className='dropdown-item'>List 3</Link>
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