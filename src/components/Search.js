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
        border: 3px;

        padding-left: 30px;
        border-radius: 100px;
        height: 100px;
        width: 65rem;
        z-index: 1;
        opacity: 0.9;
        font-size: 40px;
        
        :focus {outline:none;};

        

        ::placeholder {
            position: relative;
            color: #333333;
            font-size: 50px;
            font-family: Didot, sans-serif;
        }
    `;

    const SubmitButton = styled.button`
    position: absolute;
    top: 215px;
    right: 25px;
        border-radius: 30px;
        height: 60px;
        width: 60px;
        background-color: #2c66a8;
        transition: 0.3s;
        color: #e3e3e3;
        font-family: Didot, sans-serif;
        font-size: 14px;
        

        :hover {
            width: 120px;
        }
    `;

    
    return(
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
                <SubmitButton onClick={handleSubmit} type="submit" value="submit">Submit</SubmitButton>
            </form>
        </div>
    )
}

export default Search;