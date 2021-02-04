import React, {useState} from "react";

function NewCategory() {
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        image: ''
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
        fetch("http://localhost:8080/categories/", {
            method: 'POST',
            body: JSON.stringify(formData),
            headers: {
              'Content-Type': 'application/json'
            }
        })
        .then(() => window.location = "/category")
    }
    
    return(
        <div className="form-container">
            <h2 className="h3">Create New Category</h2>
            <form>
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
                    <label className="label" htmlFor="image">Image:</label>
                    <input className="input"
                    onChange={handleChange}
                    type="text"
                    name="image"
                    id="image"
                    placeholder="Image"
                    value={formData.image}
                    required/>
                </div>

                <input className="input" onClick={handleSubmit} type="submit" value="submit" />
            </form>
        </div>
    )
    
}


export default NewCategory;