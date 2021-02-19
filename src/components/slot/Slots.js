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
        <div>
            <h3>Slot Component</h3>
            <Link to="/new-slot"><button className="btn">Add Slot</button></Link>
            {slotList
                ? slotList.map((slot, index) => {
                return(
                    <div key={index}>
                    <Link to={`/slot/${slot.id}`}><button>{slot.startTime} - {slot.endTime}: {slot.service.name}</button></Link>
                    </div>
                );
                })
                : "Loading..."}
        </div>
    )
}

export default Slots;