import React, {useState} from "react";

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
        <div>
            <h3>Create New Service</h3>
            <form>
                <div className="form_wrap">
                    <label htmlFor="name">Name:</label>
                    <input 
                    onChange={handleChange}
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Name"
                    value={formData.name}
                    required/>
                </div>

                <div className="form_wrap">
                    <label htmlFor="description">Description:</label>
                    <input 
                    onChange={handleChange}
                    type="text"
                    name="description"
                    id="description"
                    placeholder="Description"
                    value={formData.description}
                    required/>
                </div>

                <div className="form_wrap">
                    <label htmlFor="price">Price:</label>
                    <input 
                    onChange={handleChange}
                    type="number"
                    name="price"
                    id="price"
                    placeholder="Price"
                    value={formData.price}
                    required/>
                </div>

                <div className="form_wrap">
                    <label htmlFor="duration">Duration:</label>
                    <input 
                    onChange={handleChange}
                    type="number"
                    name="duration"
                    id="duration"
                    placeholder="Duration"
                    value={formData.duration}
                    required/>
                </div>

                <input onClick={handleSubmit} type="submit" value="submit" />
            </form>
        </div>
    )
    
}


export default NewService;