import React, {useState} from "react";
import './NewService.css';

function NewService() {
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        price: '',
        duration: ''
    });

    const handleChange = (evt) => {
        const newState = {...formData};
        newState[evt.target.name] = evt.target.value;
        setFormData(newState);
    }

    const handleSubmit = (evt) => {
        evt.preventDefault();
        onFormSubmit(formData);
    }

    const onFormSubmit = function(){
        fetch("http://localhost:8080/services/", {
            method: 'POST',
            body: JSON.stringify(formData),
            headers: {
              'Content-Type': 'application/json'
            }
        })
        .then(() => window.location = "/service")
    }
    
    return(
        <div className="form-container">
            <h2 className="h3" >Create New Service</h2>
            <form className="form-container">
                <div className="form_wrap">
                    <label className="label" htmlFor="name">Name:</label>
                    <input className="input"
                    onChange={handleChange}
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Name"
                    value={formData.name}
                    required/>
                </div>

                <div className="form_wrap">
                    <label className="label" htmlFor="description">Description:</label>
                    <input className="input"
                    onChange={handleChange}
                    type="text"
                    name="description"
                    id="description"
                    placeholder="Description"
                    value={formData.description}
                    required/>
                </div>

                <div className="form_wrap">
                    <label className="label" htmlFor="price">Price:</label>
                    <input className="input"
                    onChange={handleChange}
                    type="number"
                    name="price"
                    id="price"
                    placeholder="Price"
                    value={formData.price}
                    required/>
                </div>

                <div className="form_wrap">
                    <label className="label" htmlFor="duration">Duration:</label>
                    <input className="input"
                    onChange={handleChange}
                    type="number"
                    name="duration"
                    id="duration"
                    placeholder="Duration"
                    value={formData.duration}
                    required/>
                </div>

                <input className="input" onClick={handleSubmit} type="submit" value="submit" />
            </form>
        </div>
    )
    
}


export default NewService;