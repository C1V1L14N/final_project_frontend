import React, { useState} from 'react';
import './search.css';
import styled from 'styled-components';


function Search({onSubmit}) {

    const [formData, setFormData] = useState("");

    const handleForm = (evt) => {
        setFormData(evt.target.value);
    }

    const handleSubmit = (evt) => {
        evt.preventDefault();
        onSubmit(formData);
    }
    
    
    return(
        <div>
            <form>
                <input id="search-input"
                onChange={handleForm}
                type="text" 
                name="search" 
                placeholder="Look for a service" 
                value={formData}
                autoFocus 
                required/>
                <input id="search-button" onClick={handleSubmit} type="submit" value="Search"/>
            </form>
        </div>
    )
}

export default Search;