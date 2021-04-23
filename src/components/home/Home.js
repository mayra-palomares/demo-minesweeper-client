import React from 'react';
import { EnterUser } from '../user/EnterUser';
import './../../App.css';

export const Home = () => {
    return (
        <div className="Home">
            <h1>Minesweeper</h1>
            <EnterUser/>
        </div>
    )
}

