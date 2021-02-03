import React, {useState} from "react";

function NewBooking({}) {
    const [formData, setFormData] = useState({
        comments: '',
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
        fetch("http://localhost:8080/bookings/", {
            method: 'POST',
            body: JSON.stringify(formData),
            headers: {
              'Content-Type': 'application/json'
            }
        })
        .then(() => window.location = "/booking")
    }
    
    return(
        <div>
            <h3>Create New Booking</h3>
            <form>
                <div className="form_wrap">
                    <label htmlFor="comments">Comments:</label>
                    <input 
                    onChange={handleChange}
                    type="text"
                    name="comments"
                    id="name"
                    placeholder=""
                    value={formData.comments}
                    required/>
                </div>

                {/* <div className="form_wrap">
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
                    <label htmlFor="image">Image:</label>
                    <input 
                    onChange={handleChange}
                    type="text"
                    name="image"
                    id="image"
                    placeholder="Image"
                    value={formData.image}
                    required/>
                </div> */}

                <input onClick={handleSubmit} type="submit" value="submit" />
            </form>
        </div>
    )
    
}


export default NewBooking;