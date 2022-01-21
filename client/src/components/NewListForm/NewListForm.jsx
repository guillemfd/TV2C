import { useState, useContext } from 'react'
import { InputGroup, Form, FormControl, Button} from 'react-bootstrap'
import { saveList } from '../../services/movies.service'
import { AuthContext } from '../../context/auth.context'



function NewListForm(props) {

    const { user, updateUser } = useContext(AuthContext)

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
            .then(response => {
                updateUser(response.data.user)
            })
            .catch(err => console.log(err))
    }

    return (
        <Form onSubmit={handleSubmit}>
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
        <div className="form-group justify-content-center">
            <Button variant="info" type="submit" className="btn btn-primary">Create New List</Button>
        </div>
        </InputGroup>
        <div className="help-block" style={{margin: '-15px 0px 0px 57px', fontSize: '14px', color: 'white'}}>Give a name to your new list</div>




    </Form>
    )
}

export default NewListForm