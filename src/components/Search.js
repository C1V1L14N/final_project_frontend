import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

// function Search() {
function Search({handleChange}) {

    const [formData, setFormData] = useState("");

    const handleForm = (evt) => {
        // const newState = {...formData};
        // newState[evt.target.name] = evt.target.value;
        setFormData(evt.target.value);
    }
    // useEffect(() => {
    //     handleChange(formData);
    // }, {});

    const handleSubmit = (evt) => {
        evt.preventDefault();
        handleChange(formData);
    }
    

    const SearchInput = styled.input`
        align-self: center;
        border: 3px;
        padding-left: 30px;
        margin-left: auto;
        margin-right: auto;
        margin-top: 185px;
        border-radius: 90px;
        height: 100px;
        width: 60rem;
        z-index: 1;
        opacity: 0.9;
        font-size: 40px;

        ::placeholder {
            position: relative;
            color: #333333;
            font-size: 50px;
            font-family: Didot, sans-serif;
        }
    `;


    return(
        <>
        <form>
            <SearchInput 
            onChange={handleForm}
            type="text" 
            name="search" 
            placeholder="Look for a service" 
            value={formData}
            autoFocus 
            required/>
            <input onClick={handleSubmit} type="submit" value="submit" />
        </form>
                {/* onSubmit={handleSubmit}

                onChange={changeSearchTerm}

                name="searchTerm" */}

        </>
    )
}

export default Search;