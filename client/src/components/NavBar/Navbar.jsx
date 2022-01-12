import './NavBar.css'
import { Navbar, Nav, Container, NavDropdown, Form, FormControl, Button} from 'react-bootstrap'
import { Link, NavLink } from 'react-router-dom'

function NavBar() {
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

                    <Link to="/mostPopular" className="nav-link">Recomendations</Link>

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
                        <NavDropdown.Item href="#action/3.2">For him</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">For her</NavDropdown.Item>
                    </NavDropdown>


                    <NavDropdown title="My Lists" id="basic-nav-dropdown">
                        <NavDropdown.Item >
                            <Link to="/mostPopular" className='dropdown-item'>Wish List</Link>
                        </NavDropdown.Item>
                        <NavDropdown.Item >
                            <Link to="/mostPopular" className='dropdown-item'>Already Seen</Link>
                        </NavDropdown.Item>    
                    </NavDropdown>


                    <NavDropdown title="Profile" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Profile</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Modify Profile</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.3">Log Out</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar