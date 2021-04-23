import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import {
    Form,
    FormGroup,
    Label,
    Input,
    Button,
} from 'reactstrap'
import { useMinesweeper } from '../../context/UseMinesweeper';

export const EnterUser = () => {
    
    const {enterUser} = useMinesweeper()

    const history = useHistory();
    const [username, setUsername] = useState("")

    const onSubmit = () => {
        const user = {username}
        enterUser(user).then(res => {
            history.push(`/user/${res.id}`)
        })
    }

    const onChangeUsername = (e) => {
        setUsername(e.target.value)
    }

    return (
        <Form>
            <FormGroup>
                <Label>Username</Label>
                <Input type="text" placeholder="Enter Username" value={username} onChange={onChangeUsername}></Input>
            </FormGroup>
            <Button type ="button" onClick={onSubmit} className="btn btn-info">Play</Button>
        </Form>
    )
}
