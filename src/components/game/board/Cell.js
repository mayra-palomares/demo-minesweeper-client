import React, {useState, useEffect} from 'react'
import './../../../App.css';

export const Cell = props => {

    const [cell, setCell] = useState({})

    useEffect(() => {
        const cell = props.cell || {}
        setCell(cell)
    }, [props.cell]);
    
    const getCellValue = cell => {
        let value = ''
        switch(cell.status){
            case "RED_FLAG":
                value = 'F';
                break;
            case "MINE":
                value = 'M';
                break;
            case "VISITED":
                value = cell.numNeighborsMines
                break;
        }
        return value;
    }

    const onRightClickCell = (e) => {
        e.preventDefault()
        props.onRightClickCell(cell)
    }

    const cellValue = getCellValue(cell)
    return (
        <div className="Cell" onClick={() => props.onClickCell(cell)} onContextMenu={onRightClickCell}>
            <span>{cellValue}</span> 
        </div>
    )
}

