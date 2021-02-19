import React, { useEffect, useState } from "react";
import {useParams, BrowserRouter as Router} from 'react-router-dom';


const SlotDetails = () => {

    const slotId = useParams().slotId;

    const [slot, setSlot]= useState(null);
    useEffect(() => {
        fetch(`http://localhost:8080/slots/${slotId}`)
        .then(res => res.json())
        .then(data => setSlot(data))
    }, [])
    


    if (!slot){
        return <p>Loading...</p>
    }
    return (
        <div>
            <p>{slot.startTime}</p>
            <p>{slot.endTime}</p>
        </div>
    )

}

export default SlotDetails;