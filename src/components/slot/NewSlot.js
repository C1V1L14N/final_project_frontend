import React, {useState, useEffect} from "react";
// import { Link } from "react-router-dom";
import axios from 'axios';
import { IconContext } from "react-icons";
import { FaCheckSquare } from "react-icons/fa";

function NewSlot() {

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

    const handleService = function(event){
        const index = parseInt(event.target.value)
        const selectedService = serviceList[index]
        let copiedService = {...formData};
        copiedService['service'] = selectedService
        setFormData(copiedService)
    }


    useEffect(() => {
        getServiceList();
    }, []);

    const handleSubmit = (evt) => {
        evt.preventDefault();
        // console.log(evt);
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
        <div className="main-container">
            <h2 className="form-header">Create New Time Slot</h2>
            <form className="form-container">
                
                <div className="form-wrap">
                    <label className="label" htmlFor="startTime">Start Time:</label>
                    <input className="input"
                    onChange={handleChange}
                    type="time"
                    name="startTime"
                    id="startTime"
                    value={formData.startTime}
                    required/>
                </div>

                <div className="form-wrap">
                    <label className="label" htmlFor="endTime">End Time:</label>
                    <input className="input"
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

                <input className="input" onClick={handleSubmit} type="submit" value="submit" />
            </form>
        </div>
    )
}

export default NewSlot;