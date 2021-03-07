import React, { useState } from 'react';
import axios from 'axios';
import { IconContext } from "react-icons";
import { FaWindowClose } from "react-icons/fa";

function BusinessPhone({ shop, toggle }) {

    const [formData, setFormData] = useState({
        telephoneNumber: shop.telephoneNumber
    })

    const handleChange = (evt) => {
        const newState = {...formData};
        newState[evt.target.name] = evt.target.value;
        setFormData(newState);
    }

    const handleSubmit = (evt) => {
        for(const[, value] of Object.entries(formData)) {
            if(value === "" || value === null){
                return
            }
        }
        evt.preventDefault();
        onFormSubmit(formData);
    }

    const onFormSubmit = function(){
        axios.patch(`http://localhost:8080/shops/${shop.id}?phone=name`, formData)
        .then(() => window.location = `/business/${shop.id}`)
    }


    return(
        <div className="form-container">
            <div className="end-container">
                <h2 className="form-header">Edit Telephone Number</h2>
                <IconContext.Provider value={{ className: "close-icon"}}><FaWindowClose onClick={toggle}/></IconContext.Provider>
            </div>
            <form className="form-container" required>
            {/* telephone number */}
                <div className="form_wrap">
                    <label className="label" htmlFor="telephoneNumber">Telephone Number:</label>
                    <input className="input"
                    onChange={handleChange}
                    type="text"
                    name="telephoneNumber"
                    id="telephoneNumber"
                    placeholder="Telephone Number"
                    value={formData.telephoneNumber}
                    required/>
                </div>
            {/* submit */}
                <div className="form_wrap" id="submit-wrap">
                    <input className="input" id="submit-btn" onClick={handleSubmit} type="submit" value="submit" required/>
                </div>
            </form>
        </div>
    );

}


export default BusinessPhone;