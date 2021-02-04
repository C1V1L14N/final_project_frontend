import React, { useState} from 'react';
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
    

    const SearchInput = styled.input`
        align-self: center;
        border: 3px;
        padding-left: 30px;
        margin-left: auto;
        margin-right: auto;
        margin-top: 130px;
        border-radius: 90px;
        height: 100px;
        width: 65rem;
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
<<<<<<< HEAD
        <div>
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
        </div>
=======
        <>
        <SearchInput  type="text" id="search" placeholder="Look for a service"></SearchInput>
        
        </>
>>>>>>> da3d0a670b47918972a6b749769aff0e3e589f62
    )
}

export default Search;