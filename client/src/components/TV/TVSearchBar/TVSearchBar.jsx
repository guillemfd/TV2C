import { Navbar, Nav, Container, NavLink, NavDropdown, Form, FormControl, Button} from 'react-bootstrap'
import { useState } from 'react'
import TVCard from '../TVCard/TVCard'
import { Link } from 'react-router-dom'



function TVSearchBar() {
    const [query, setQuery] = useState("")
    const [results, setResults] =useState("")

    const onChange = (e) => {
        e.preventDefault()
        setQuery(e.target.value)

        fetch
            (`https://api.themoviedb.org/3/search/tv?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1&include_adult=false&query=${e.target.value}`)
            .then((res) => res.json())
            .then((data) => {
                if(!data.errors) {
                    setResults(data.results)
                } else {
                    setResults([])
                }
            })
    }

    console.log(results)



    return (

        <>

        <Form className="d-flex">
            <FormControl
            style={{width: '70vw', height: '60px', margin: '10px'}}
            type="text"
            placeholder="Search for a TV series"
            value={query}
            className="me-2"
            aria-label="Search"
            onChange={onChange}
            />
            <Link to="/tv">
                <Button variant="dark" size="xl" style={{width: '30vw', height: '60px', margin: '10px'}}>Suggest me TV Series!</Button>
            </Link>
        </Form>

            {results.length > 0 && (
            <div>
                <h1 style={{margin: '15px'}}>Top 20 most popular TV series for "{query}"</h1>
                <div className="cards_at_Movies_Pages">
                    {results.map((movie) => <TVCard {...movie} key={movie.id} />)}
                </div>
            </div>
            )}
        
        </>
    )

}

export default TVSearchBar