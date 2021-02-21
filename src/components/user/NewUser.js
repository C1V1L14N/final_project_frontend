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
        <div className="main-container">
            <h2 className="form-header">Create New Profile</h2>
            <form className="form-container">

                <div className="form_wrap">
                    <label className="label" htmlFor="firstName">First Name:</label>
                    <input className="input"
                        onChange={handleChange}
                        type="text"
                        name="firstName"
                        id="firstName"
                        placeholder="First Name"
                        value={formData.firstName}
                        required/>
                </div>

                <div className="form_wrap">
                    <label className="label" htmlFor="lastName">Last Name:</label>
                    <input className="input"
                        onChange={handleChange}
                        type="text"
                        name="lastName"
                        id="lastName"
                        placeholder="Last Name"
                        value={formData.lastName}
                        required/>
                </div>

                <div className="form_wrap">
                    <label className="label" htmlFor="age">Age:</label>
                    <input className="input"
                        onChange={handleChange}
                        type="number"
                        name="age"
                        id="age"
                        placeholder="Age"
                        value={formData.age}
                        required/>
                </div>

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

                <div className="form_wrap">
                    <label className="label" htmlFor="email">Email:</label>
                    <input className="input"
                        onChange={handleChange}
                        type="text"
                        name="email"
                        id="email"
                        placeholder="Email"
                        value={formData.email}
                        required/>
                </div>

                <div className="form_wrap">
                    <label className="label" htmlFor="password">Password:</label>
                    <input className="input"
                        onChange={handleChange}
                        type="text"
                        name="password"
                        id="password"
                        placeholder="Password"
                        value={formData.password}
                        required/>
                </div>

                {/* <div className="form_wrap">
                    <label className="label" htmlFor="access">Access:</label>
                    <input
                        onChange={handleChange}
                        type="text"
                        name="access"
                        id="access"
                        placeholder="Access"
                        value={formData.access}
                        required/>
                </div> */}
                
                <input className="input" onClick={handleSubmit} type="submit" value="submit" />
            </form>
        </div>
    )

}

export default NewUser;