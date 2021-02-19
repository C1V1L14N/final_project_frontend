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
    

    const Sinput = styled.input`
        border-radius: 90px;
        height: 5vw;
        min-height: 40px;
        width: 48vw;
        min-width: 300px;
        z-index: 1;
        font-size: 40px;
        padding-left: 25px;
        
        
        :focus {outline:none;};       

        ::placeholder {
            padding-left: 5px;
            position: relative;
            color: #333333;
            font-size: 50px;
            font-family: Didot, sans-serif;
        }
    `;

    const SubmitButton = styled.button`
    position: absolute;
    top: 25px;
    right: 25px;
        border-radius: 30px;
        height: 60px;
        width: 60px;
        background-color: #2c66a8;
        transition: 0.3s;
        color: white
        ;
        font-family: Didot, sans-serif;
        font-size: 14px;
        

        :hover {
            width: 120px;
        }
    `;
    
    return(
        <div>
            <form>
                <Sinput 
                onChange={handleForm}
                type="text" 
                name="search" 
                placeholder="Look for a service" 
                value={formData}
                autoFocus 
                required/>
                <SubmitButton onClick={handleSubmit} type="submit" value="submit">Search</SubmitButton>
            </form>
        </div>
    )
}

export default Search;