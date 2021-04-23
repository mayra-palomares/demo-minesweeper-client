import React from 'react';
import { Link } from 'react-router-dom';
import{
    Button,
} from 'reactstrap';
import './../../App.css';

export const GameOptions = props => {
    return (
        <div className="d-flex flex-column GameOptions">
            <div class="p-2">
                <Button type ="button" className="btn btn-info btn-lg btn-block" onClick={() => props.changeOption(0)}>New game</Button>
            </div>
            <div class="p-2">
                <Button type ="button" className="btn btn-info btn-lg btn-block" onClick={() => props.changeOption(1)}>Continue</Button>
            </div>
            <div class="p-2">
                <Link to="/" className="btn btn-info btn-lg btn-block" >Back</Link>
            </div>
        </div>
    )
}
