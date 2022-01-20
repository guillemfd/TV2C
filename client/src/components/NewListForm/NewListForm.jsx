import { useState, useContext } from 'react'
import { InputGroup, Form, FormControl, Button} from 'react-bootstrap'
import { saveList } from '../../services/movies.service'
import { AuthContext } from '../../context/auth.context'



function NewListForm(props) {

    const { user } = useContext(AuthContext)
    console.log(user._id)

    const [listForm, setListForm] = useState({ 
        listName: '',
        publishedBy: `${user._id}`,
        publishedUsername: `${user.username}`
    })


    const handleInputChange = e => {
        const { name, value } = e.target
        setListForm({ ...listForm, [name]: value })
    }

    const handleSubmit = e => {
        e.preventDefault()
        saveList(listForm)
            .then(response => console.log(response.data))
            .catch(err => console.log(err))
    }

    return (
        <Form onSubmit={handleSubmit}>
        <div className="help-block" style={{margin: '0px 0px 15px 57px', fontSize: '17px'}}>Give a name to your new list:</div>
        <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">🎬</InputGroup.Text>
            <FormControl
            controlId="listName"
            type="text"
            name="listName"
            value={listForm.listName}
            onChange={handleInputChange}
            placeholder="e.g. 'Mom's Recommendations'"
            aria-describedby="basic-addon1"
            />
        </InputGroup>

        <div className="form-group justify-content-center">
            <Button type="submit" className="btn btn-primary" style={{width: '75%'}}>Submit</Button>
        </div>

    </Form>
    )
}

export default NewListForm