import { Navbar, Nav, Container, NavLink, NavDropdown, Form, FormControl, Button} from 'react-bootstrap'
import { useState } from 'react'


function SearchBar() {
    const [query, setQuery] = useState("")
    const [results, setResults] =useState("")

    const onChange = (e) => {
        e.preventDefault()
        setQuery(e.target.value)

        fetch
            (`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1&include_adult=false&query=${e.target.value}`)
            .then((res) => res.json())
            .then((data) => {
                if(!data.errors) {
                    setResults(data.results)
                } else {
                    setResults([])
                }
            })
    }


    return (

        <Form className="d-flex">
            <FormControl
            type="text"
            placeholder="Search for a movie"
            value={query}
            className="me-1"
            aria-label="Search"
            onChange={onChange}
            />
            <Button variant="info" >Search</Button>
        </Form>
    )

}

export default SearchBar