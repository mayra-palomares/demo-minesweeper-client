import React, { useState }  from 'react';
import { useHistory } from 'react-router-dom';
import {
    Form,
    FormGroup,
    Label,
    Input,
    Button,
} from 'reactstrap';
import { useMinesweeper } from '../../context/UseMinesweeper';
import './../../App.css';

export const CreateGame = () => {
    const { getUser, createGame } = useMinesweeper()
    const [gameOptions, setGameOptions] = useState({numRows:0, numColumns:0, numMines:0})
    const history = useHistory();

    const onSubmit = () => {
        const user = getUser();
        createGame(user.id, gameOptions).then(res => {
            history.push(`/game/${res.id}`)
        })
    }

    const onChangeNumRows = (e) => {
        setGameOptions({
            ...gameOptions,
            numRows: e.target.value
        })
    }

    const onChangeNumColumns = (e) => {
        setGameOptions({
            ...gameOptions,
            numColumns: e.target.value
        })
    }

    const onChangeNumMines = (e) => {
        setGameOptions({
            ...gameOptions,
            numMines: e.target.value
        })
    }

    return (
        <div className="CreateGame">
            <h2>Create a new game!</h2>
            <Form>
                <FormGroup>
                    <Label>Number of Rows</Label>
                    <Input type="number" min={0}  value={gameOptions.numRows} onChange={onChangeNumRows}></Input>
                </FormGroup>
                <FormGroup>
                    <Label>Number of Columns</Label>
                    <Input type="number" min={0}  value={gameOptions.numColumns} onChange={onChangeNumColumns}></Input>
                </FormGroup>
                <FormGroup>
                    <Label>Number of Mines</Label>
                    <Input type="number" min={0}  value={gameOptions.numMines} onChange={onChangeNumMines}></Input>
                </FormGroup>
                <Button type ="button" onClick={onSubmit}>Create</Button>
            </Form>
        </div>
    )
}
