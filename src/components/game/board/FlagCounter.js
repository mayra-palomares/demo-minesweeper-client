import React, {useState, useEffect} from 'react'
import{
    Label
} from 'reactstrap';
export const FlagCounter = props => {

    const [numFlags, setNumFlags] = useState(0);

    useEffect(() => {
        const numFlags = props.numFlags || 0;
        setNumFlags(numFlags)
      }, [props.numFlags]);

    return (
        <div>
            <Label>Flags: </Label>
            <span>{numFlags}</span>
        </div>
    )
}
