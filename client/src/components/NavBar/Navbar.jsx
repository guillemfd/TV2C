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
                <NavLink to="/" className="navbar-brand">TV2C</NavLink>
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
                    <NavLink to="/" className="nav-link">Home</NavLink>

                    <Link to="/movies/mostPopular" className="nav-link">Movies Trendings</Link>

                    <NavDropdown title="Sort By..." id="basic-nav-dropdown">
                        <NavDropdown.Item >
                            <Link to="/mostPopular" className='dropdown-item'>Most Popular</Link>
                        </NavDropdown.Item>
                        <NavDropdown.Item >
                            <Link to="/mostPopular" className='dropdown-item'>Best Rated</Link>
                        </NavDropdown.Item>    
                        <NavDropdown.Item >
                            <Link to="/mostPopular" className='dropdown-item'>Latest Blockbusters</Link>
                        </NavDropdown.Item> 
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
                                    <span className='dropdown-item' style={{textAlign: 'left', fontWeight: 'bold'}}>{user?.username}</span>
                                </NavDropdown.Item>
                                <NavDropdown.Item >
                                    <Link to="/myprofile" className='dropdown-item'>My Profile</Link>
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