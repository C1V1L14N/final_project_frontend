import React, {useState} from "react";


function NewShop() {
    const [formData, setFormData] = useState({
        name: '',
        address: '',
        postcode: '',
        town: '',
        openingHour: '',
        closingHour: '',
        telephoneNumber: '',
        email: '',
        image: ''
        // category: '',
        // services: ''
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
        fetch("http://localhost:8080/shops/", {
            method: 'POST',
            body: JSON.stringify(formData),
            headers: {
            'Content-Type': 'application/json'
            }
        })
        .then(() => window.location = "/shop")
    }

    return(
        <div>
            <h3>Create New Profile</h3>
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
                    <label htmlFor="address">Address:</label>
                    <input
                    onChange={handleChange}
                    type="text"
                    name="address"
                    id="address"
                    placeholder="Address"
                    value={formData.address}
                    required/>
                </div>

                <div className="form_wrap">
                    <label htmlFor="postcode">Postcode:</label>
                    <input
                    onChange={handleChange}
                    type="text"
                    name="postcode"
                    id="postcode"
                    placeholder="Postcode"
                    value={formData.postcode}
                    required/>
                </div>

                <div className="form_wrap">
                    <label htmlFor="town">Town:</label>
                    <input
                    onChange={handleChange}
                    type="text"
                    name="town"
                    id="town"
                    placeholder="Town"
                    value={formData.town}
                    required/>
                </div>

                <div className="form_wrap">
                    <label htmlFor="openingHour">Opening Hour:</label>
                    <input
                    onChange={handleChange}
                    type="time"
                    name="openingHour"
                    id="openingHour"
                    value={formData.openingHour}
                    required/>
                </div>

                <div className="form_wrap">
                    <label htmlFor="closingHour">Closing Hour:</label>
                    <input
                    onChange={handleChange}
                    type="time"
                    name="closingHour"
                    id="closingHour"
                    value={formData.closingHour}
                    required/>
                </div>

                <div className="form_wrap">
                    <label htmlFor="telephoneNumber">Telephone Number:</label>
                    <input
                    onChange={handleChange}
                    type="text"
                    name="telephoneNumber"
                    id="telephoneNumber"
                    placeholder="Telephone Number"
                    value={formData.telephoneNumber}
                    required/>
                </div>

                <div className="form_wrap">
                    <label htmlFor="email">Email address:</label>
                    <input
                    onChange={handleChange}
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                    value={formData.email}
                    required/>
                </div>

                <div className="form_wrap">
                    <label htmlFor="image">Image Link:</label>
                    <input
                    onChange={handleChange}
                    type="text"
                    name="image"
                    id="image"
                    placeholder="Image Link"
                    value={formData.image}
                    required/>
                </div>

                {/* <div className="form_wrap">
                    <label htmlFor="category">Category:</label>
                    <input
                    onChange={handleChange}
                    type="text"
                    name="category"
                    id="category"
                    placeholder="Category:"
                    value={formData.category}
                    required/>
                </div>

                <div className="form_wrap">
                    <label htmlFor="services">Services:</label>
                    <input
                    onChange={handleChange}
                    type="text"
                    name="services"
                    id="services"
                    placeholder="Services"
                    value={formData.services}
                    required/>
                </div> */}

                <input onClick={handleSubmit} type="submit" value="submit" />
            </form>
        </div>
    );

}

export default NewShop;