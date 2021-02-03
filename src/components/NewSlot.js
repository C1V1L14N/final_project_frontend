import React, {useState, useEffect} from "react";
// import { Link } from "react-router-dom";
import axios from 'axios';

function NewSlot() {

    const [serviceList, setServiceList] = useState([]);

    const getServiceList = () => {
        axios.get(`http://localhost:8080/services/`)
            .then(res => {
            // console.log(res);
            setServiceList(res.data)
            });
        };

        const serviceOptions = serviceList.map((service, index) => {
            return <option key={index} value={index}>{service.name}</option>
        })

        useEffect(() => {
            getServiceList();
        }, []);
    

    const [formData, setFormData] = useState({
        startTime: '',
        endTime: '',
        service: null
    });

    const handleChange = (evt) => {
        const newState = {...formData};
        newState[evt.target.name] = evt.target.value;
        setFormData(newState);
    }

    const handleService = function(event){
        const index = parseInt(event.target.value)
        const selectedService = serviceList[index]
        let copiedService = {...formData};
        copiedService['service'] = selectedService
        setFormData(copiedService)
    }

    const handleSubmit = (evt) => {
        evt.preventDefault();
        console.log(evt);
        onFormSubmit(formData);
    }

    const onFormSubmit = function(){
        fetch("http://localhost:8080/slots/", {
            method: 'POST',
            body: JSON.stringify(formData),
            headers: {
              'Content-Type': 'application/json'
            }
        })
        .then(() => window.location = "/slot")
    }
    
    return(
        <div>
            <h3>Create New Time Slot</h3>
            <form onSubmit={handleSubmit}>
                
                <div className="form_wrap">
                    <label htmlFor="startTime">Start Time:</label>
                    <input 
                    onChange={handleChange}
                    type="time"
                    name="startTime"
                    id="startTime"
                    value={formData.startTime}
                    required/>
                </div>

                <div className="form_wrap">
                    <label htmlFor="endTime">End Time:</label>
                    <input 
                    onChange={handleChange}
                    type="time"
                    name="endTime"
                    id="endTime"
                    value={formData.endTime}
                    required/>
                </div>

                <select name="service" onChange={handleService} defaultValue="select-service">
                    <option disabled value="select-service">Select a Service</option>
                    {serviceOptions}
                </select>

                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default NewSlot;