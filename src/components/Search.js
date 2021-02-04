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
<<<<<<< HEAD
        border: 0;
        padding: 0;
        margin: 0;
=======
        padding-left: 30px;
        margin-left: auto;
        margin-right: auto;
        margin-top: 195px;
>>>>>>> be9dfe868e84a2f2398fa8efcebfb6bd6f849461
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
    )
}

export default Search;