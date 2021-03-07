import React, { useState } from 'react';
import axios from 'axios';
import { IconContext } from "react-icons";
import { FaWindowClose } from "react-icons/fa";

function BusinessAddress({ shop, toggle }) {

    const [formData, setFormData] = useState({
        address: shop.address,
        postcode: shop.postcode,
        town: shop.town,
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
        axios.patch(`http://localhost:8080/shops/${shop.id}?address=name`, formData)
        .then(() => window.location = `/business/${shop.id}`)
    }


    return(
        <div className="form-container">
            <div className="end-container">
                <h2 className="form-header">Edit Address</h2>
                <IconContext.Provider value={{ className: "close-icon"}}><FaWindowClose onClick={toggle}/></IconContext.Provider>
            </div>
            <form className="form-container" required>
            {/* address */}
                <div className="form_wrap">
                    <label className="label" htmlFor="address">Address:</label>
                    <input className="input"
                    onChange={handleChange}
                    type="text"
                    name="address"
                    id="address"
                    placeholder="Address"
                    value={formData.address}
                    required/>
                </div>
            {/* town */}
                <div className="form_wrap">
                    <label className="label" htmlFor="town">Town:</label>
                    <input className="input"
                    onChange={handleChange}
                    type="text"
                    name="town"
                    id="town"
                    placeholder="Town"
                    value={formData.town}
                    required/>
                </div>
            {/* postcode */}
                <div className="form_wrap">
                    <label className="label" htmlFor="postcode">Postcode:</label>
                    <input className="input"
                    onChange={handleChange}
                    type="text"
                    name="postcode"
                    id="postcode"
                    placeholder="Postcode"
                    value={formData.postcode}
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


export default BusinessAddress;