import React from "react";
import styled from 'styled-components';

function Search() {

    

    const SearchInput = styled.input`
        align-self: center;
        border: none;
        margin: auto;
        margin-top: 230px;
        left: 30%;
        border-radius: 90px;
        height: 100px;
        width: 60rem;
        z-index: 1;
        opacity: 0.9;

        ::placeholder {
            position: relative;
            color: #333333;
            font-size: 50px;
            font-family: Didot, sans-serif;
            left: 20px;
            top: 10px;            
        }
    `;


    return(
        <>
        <SearchInput type="text" id="search" placeholder="Look for a service"></SearchInput>
        </>
    )
}

export default Search;