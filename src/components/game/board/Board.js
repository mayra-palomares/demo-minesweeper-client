import React, {useState, useEffect} from 'react'
import { useMinesweeper } from '../../../context/UseMinesweeper';
import { useHistory } from 'react-router-dom';
import { Cell } from './Cell';
import { GameModal as Modal } from './../../common/GameModal';
import {FlagCounter} from './FlagCounter';
import { useStopwatch } from 'react-timer-hook';
import './../../../App.css';

export const Board = props => {
    
    const { makeMove } = useMinesweeper();
    const [gameHistory, setGameHistory] = useState({})
    const [modal, setModal] = useState({});
    const history = useHistory();



    useEffect(() => {
        const gameHistory = props.gameHistory || {};
        setGameHistory(gameHistory)
      }, [props.gameHistory]);

    const onClickCell = (rowIndex, columnIndex, minutes, seconds) => cell =>{
        const move = {
            rowIndex,
            columnIndex,
            move: 'VISIT',
            timer: calculateTime(minutes,seconds)
        }
        makeMove(gameHistory.userId, gameHistory.id, move).then(res => {
            updateGameHistory(res)
        })
    }

    const onRightClickCell = (rowIndex, columnIndex) => cell =>{
        const cellStatus = cell.status
        if(cellStatus === 'MINE' || cellStatus === 'VISITED') return;
        
        const move = {
            rowIndex,
            columnIndex,
            move: cellStatus === 'EMPTY'? 'PUT_FLAG' : 'REMOVE_FLAG',
            timer: calculateTime(minutes,seconds)
        }
        makeMove(gameHistory.userId, gameHistory.id, move).then(res => {
            updateGameHistory(res)
        })
    }

    const calculateTime = (minutes, seconds) => {
        return (60*minutes + seconds)
    }

    const updateGameHistory = gameHistory => {
        const game = gameHistory && gameHistory.game || {}
        if(game.status === 'FAIL'){
            setModal({
                show:true,
                message:"Game Over"
            })
        }else if(game.status === 'COMPLETED'){
            setModal({
                show:true,
                message:"Congratulations!"
            })
        }
        
        setGameHistory(gameHistory)
    }

    const closeModal = () => {
        setModal({
            ...modal,
            show: false
        })
        history.push(`/user/${gameHistory.userId}`)

    }

    const game = gameHistory && gameHistory.game || {};
    const board =  game && game.board || [];
    const numFlags = game && game.numFlags || 0;
    const initialTime = game && game.timer || 0;

    //Timer
    const {
        seconds,
        minutes,
        } = useStopwatch({ autoStart: true, offsetTimestamp: initialTime });
    return (
        <div className="Board">
            <div className="d-flex flex-row justify-content-center">
                <div className="p-2">
                    <FlagCounter numFlags={numFlags}/>
                </div>
                <div className="p-2">
                    <span>Time: </span>
                    <span>{minutes}</span>:<span>{seconds}</span>
                </div>
            </div>
            {board.map((row, rowIndex) =>(
            <div className="d-flex flex-row justify-content-center" key={rowIndex}>
                {row.map((cell,colIndex) => (
                    <div className="p-2 BoardRow align-self-center" key={colIndex}>
                        <Cell 
                        cell={cell} 
                        onClickCell={onClickCell(rowIndex, colIndex, minutes, seconds)}
                        onRightClickCell={onRightClickCell(rowIndex, colIndex, minutes, seconds)}
                        />
                    </div>
                ))}    
            </div>
            ))}

            <Modal
                title={"Minesweeper Game"}
                open={modal.show}
                closeModal={closeModal}
            >
                {modal.message}
            </Modal>
        </div>
    )
}
