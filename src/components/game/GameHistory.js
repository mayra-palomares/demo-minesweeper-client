import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useMinesweeper } from '../../context/UseMinesweeper';
import {
    Button
} from 'reactstrap'
import './../../App.css';

export const GameHistory = () => {

    const { getUser, getGameHistoryByUserId} = useMinesweeper()
    const [gameHistoryList, setGameHistoryList] = useState([])
    const history = useHistory();

    useEffect(() => {
        const user = getUser();
        getGameHistoryByUserId(user.id).then(res => {
            setGameHistoryList(res)
        })
      }, []);

    const playGame = gameHistoryId => {
        history.push(`/game/${gameHistoryId}`)
    }

    const formatTime = timer => {
        const minutes = Math.floor(timer / 60);
        const seconds = timer%60;
        return minutes+'m '+seconds+'s';
    }

    return (
        <div className="GameHistory">
            <h2>Game History</h2>
            <table class="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Rows</th>
                        <th scope="col">Columns</th>
                        <th scope="col">Mines</th>
                        <th scope="col">Time</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    {gameHistoryList && gameHistoryList.map(gameHistory => (
                        <tr>
                            <th scope="row">{gameHistory.gameNumber}</th>
                            <td>{gameHistory.game.numRows}</td>
                            <td>{gameHistory.game.numColumns}</td>
                            <td>{gameHistory.game.numMines}</td>
                            <td>{formatTime(gameHistory.game.timer)}</td>
                            <td>
                                <Button onClick={() => playGame(gameHistory.id)}>Play</Button>
                            </td>
                        </tr>
                    ))}
                    
                </tbody>
            </table>
        </div>
    )
}
