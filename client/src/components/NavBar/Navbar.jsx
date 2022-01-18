import './NavBar.css'
import { Navbar, Nav, Container, NavLink, NavDropdown, Form, FormControl, Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from '../../context/auth.context'



function NavBar() {

    const { isLoggedIn, user, logOutUser } = useContext(AuthContext)

    return (
        <Navbar bg="dark" expand="lg" variant="dark">
            <Container>
                <Link to="/" className="navbar-brand">TV2C</Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">

                <Form className="d-flex">
                    <FormControl
                    type="search"
                    placeholder="Search by title"
                    className="me-1"
                    aria-label="Search"
                    />
                    <Button variant="info">Search</Button>
                </Form>

                <Nav>
                    <NavDropdown title="Movies By..." id="basic-nav-dropdown">
                        <NavDropdown.Item >
                            <Link to="/movies/mostPopular" className='dropdown-item'>Most Popular</Link>
                        </NavDropdown.Item>
                        <NavDropdown.Item >
                            <Link to="/mostPopular" className='dropdown-item'>Latest Blockbusters</Link>
                        </NavDropdown.Item>
                        <NavDropdown.Item >
                            <Link to="/movies/shorterthan90" className='dropdown-item'>Shorter than 90'</Link>
                        </NavDropdown.Item>    
                                <NavDropdown.Divider />
                        <NavDropdown.Item >
                            <span className='dropdown-item' style={{textAlign: 'left', fontWeight: 'bold'}}>Best by...</span>
                        </NavDropdown.Item>
                        <NavDropdown.Item >
                            <Link to="/mostPopular" className='dropdown-item'>Viewers Rate</Link>
                        </NavDropdown.Item>
                        <NavDropdown.Item >
                            <Link to="/mostPopular" className='dropdown-item'>All Time</Link>
                        </NavDropdown.Item>
                        <NavDropdown.Item >
                            <Link to="/mostPopular" className='dropdown-item'>2010-2020</Link>
                        </NavDropdown.Item> 
                        <NavDropdown.Item >
                            <Link to="/mostPopular" className='dropdown-item'>2000-2010</Link>
                        </NavDropdown.Item>
                        <NavDropdown.Item >
                            <Link to="/mostPopular" className='dropdown-item'>XX Century</Link>
                        </NavDropdown.Item>
                                <NavDropdown.Divider />
                    </NavDropdown>


                    <NavDropdown title="TV Series By..." id="basic-nav-dropdown">
                        <NavDropdown.Item >
                            <Link to="/tv/mostPopular" className='dropdown-item'>Most Popular</Link>
                        </NavDropdown.Item>
                        <NavDropdown.Item >
                            <Link to="/mostPopular" className='dropdown-item'>Latest Blockbusters</Link>
                        </NavDropdown.Item>
                        <NavDropdown.Item >
                            <Link to="/mostPopular" className='dropdown-item'>Shorter than 20'</Link>
                        </NavDropdown.Item>    
                                <NavDropdown.Divider />
                        <NavDropdown.Item >
                            <span className='dropdown-item' style={{textAlign: 'left', fontWeight: 'bold'}}>Best by...</span>
                        </NavDropdown.Item>
                        <NavDropdown.Item >
                            <Link to="/mostPopular" className='dropdown-item'>Viewers Rate</Link>
                        </NavDropdown.Item>
                        <NavDropdown.Item >
                            <Link to="/mostPopular" className='dropdown-item'>All Time</Link>
                        </NavDropdown.Item>
                        <NavDropdown.Item >
                            <Link to="/mostPopular" className='dropdown-item'>2010-2020</Link>
                        </NavDropdown.Item> 
                        <NavDropdown.Item >
                            <Link to="/mostPopular" className='dropdown-item'>2000-2010</Link>
                        </NavDropdown.Item>
                        <NavDropdown.Item >
                            <Link to="/mostPopular" className='dropdown-item'>XX Century</Link>
                        </NavDropdown.Item>
                                <NavDropdown.Divider />
                    </NavDropdown>



                    {/* <NavDropdown title="Profile" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Profile</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Modify Profile</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.3">Log Out</NavDropdown.Item>
                    </NavDropdown> */}


                    {/* <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text>
                            Signed in as: <a href="/user">Guillem</a>
                        </Navbar.Text>
                    </Navbar.Collapse> */}


                    {isLoggedIn ?
                        <>

                            <NavDropdown title="My Lists" id="basic-nav-dropdown">
                                <NavDropdown.Item >
                                    <span className='dropdown-item' style={{textAlign: 'left', fontWeight: 'bold'}}>Movies</span>
                                </NavDropdown.Item>
                                <NavDropdown.Item >
                                    <Link to="/mostPopular" className='dropdown-item'>Wish List</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item >
                                    <Link to="/mostPopular" className='dropdown-item'>Already Seen</Link>
                                </NavDropdown.Item>
                                            <NavDropdown.Divider />
                                <NavDropdown.Item >
                                    <span className='dropdown-item' style={{textAlign: 'left', fontWeight: 'bold'}}>TV Series</span>
                                </NavDropdown.Item>
                                <NavDropdown.Item >
                                    <Link to="/movies/mostPopular" className='dropdown-item'>Wish List</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item >
                                    <Link to="/mostPopular" className='dropdown-item'>Already Seen</Link>
                                </NavDropdown.Item>
                            </NavDropdown>

                            <NavDropdown title="My Profile" id="basic-nav-dropdown">
                                <NavDropdown.Item >
                                    <span className='dropdown-item' style={{textAlign: 'left', fontWeight: 'bold'}}>{user?.username}{user?.email}</span>
                                </NavDropdown.Item>
                                <NavDropdown.Item >
                                    <Link to={`/myprofile/${user._id}`} className='dropdown-item'>My Profile</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item >
                                    <Link to="/editprofile" className='dropdown-item'>Edit Profile</Link>
                                </NavDropdown.Item>
                            </NavDropdown>

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