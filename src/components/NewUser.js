import React, {useState} from "react";

function NewUser() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        age: '',
        address: '',
        postcode: '',
        town: '',
        telephoneNumber: '',
        email: '',
        password: '',
        access: false
        // booking: ''
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
        fetch("http://localhost:8080/users/", {
            method: 'POST',
            body: JSON.stringify(formData),
            headers: {
              'Content-Type': 'application/json'
            }
        })
        .then(() => window.location = "/user")
    }

    return(
        <div>
            <h3>Create New Profile</h3>
            <div className="form_wrap">
                <label htmlFor="firstName">First Name:</label>
                <input
                    onChange={handleChange}
                    type="text"
                    name="firstName"
                    id="firstName"
                    placeholder="First Name"
                    value={formData.firstName}
                    required/>
            </div>

            <div className="form_wrap">
                <label htmlFor="lastName">Last Name:</label>
                <input
                    onChange={handleChange}
                    type="text"
                    name="lastName"
                    id="lastName"
                    placeholder="Last Name"
                    value={formData.lastName}
                    required/>
            </div>

            <div className="form_wrap">
                <label htmlFor="age">Age:</label>
                <input
                    onChange={handleChange}
                    type="number"
                    name="age"
                    id="age"
                    placeholder="Age"
                    value={formData.age}
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
                <label htmlFor="email">Email:</label>
                <input
                    onChange={handleChange}
                    type="text"
                    name="email"
                    id="email"
                    placeholder="Email"
                    value={formData.email}
                    required/>
            </div>

            <div className="form_wrap">
                <label htmlFor="password">Password:</label>
                <input
                    onChange={handleChange}
                    type="text"
                    name="password"
                    id="password"
                    placeholder="Password"
                    value={formData.password}
                    required/>
            </div>

            {/* <div className="form_wrap">
                <label htmlFor="access">Access:</label>
                <input
                    onChange={handleChange}
                    type="text"
                    name="access"
                    id="access"
                    placeholder="Access"
                    value={formData.access}
                    required/>
            </div> */}

            <input onClick={handleSubmit} type="submit" value="submit" />
        </div>
    )

}

export default NewUser;