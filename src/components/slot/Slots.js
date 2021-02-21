import React, {useState, useEffect} from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';

function Slots() {

    const [slotList, setSlotList] = useState([]);

    const getSlotList = () => {
        axios.get(`http://localhost:8080/slots/`)
        .then(res => {
          console.log(res);
          setSlotList(res.data)
        });
      };
    
      useEffect(() => {
        getSlotList();
      }, []);


    return(
      <div className="main-container">
        <Link id="new-form-link" to="/new-slot"><h2 className="btn">Create New Slot</h2></Link>
        {slotList
            ? slotList.map((slot, index) => {
            return(
                <div key={index}>
                <Link id="image-link" to={`/slot/${slot.id}`}><div className="ind-image"><h2>{slot.startTime} - {slot.endTime}: {slot.service.name}</h2></div></Link>
                </div>
            );
            })
            : "Loading..."}
      </div>
    )
}

export default Slots;