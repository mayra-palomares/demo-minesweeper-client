import React, { useState, useEffect } from 'react';
import { GameHeader } from '../common/GameHeader';
import { Board } from './board/Board';
import { useMinesweeper } from '../../context/UseMinesweeper';
import { useParams } from 'react-router-dom';

export const Game = () => {
    const { getUser, getGameHistoryById } = useMinesweeper();
    const [gameHistory, setGameHistory] = useState({});
    const {id} = useParams();

    useEffect(() => {
        const user = getUser();
        getGameHistoryById(user.id, id).then(res => {
            setGameHistory(res)
        })
      }, []);

    return (
        <div>
            <GameHeader/>
            <Board gameHistory={gameHistory} ></Board>
        </div>
    )
}
