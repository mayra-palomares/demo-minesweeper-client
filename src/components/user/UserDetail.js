import React, {useState, useEffect} from 'react';
import { GameHeader } from '../common/GameHeader';
import { GameHistory } from '../game/GameHistory';
import { GameOptions } from '../game/GameOptions';
import { CreateGame } from "../game/CreateGame";

export const UserDetail = () => {
    const [option, setOption] = useState(0); 

    return (
        <div className="container">
            <GameHeader/>
            <div className="row align-items-start">
                <div className="col-4">
                    <GameOptions changeOption={(option) => setOption(option)}/>
                </div>
                <div className="col-8">
                    {option == 0 && <CreateGame></CreateGame>}
                    {option == 1 && <GameHistory></GameHistory>}
                </div>
            </div>
        </div>
    )
}
