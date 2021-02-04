
import React from "react";
import Search from "./Search";
import Categories from "./Categories";
import styled from 'styled-components';
import Gallery from "./Gallery";
import Results from "./Results";

function Home() {

    // const []

    const HomeContainer = styled.div`
        display: flex;
        flex-direction: column;
        width: 100%;
        flex-grow: 1;
        margin: 5px;
        position: relative;
        top: 40px;
    `;

    
    const searchData = (searchTerm) => {
        console.log(searchTerm);
    }

    return(
        <HomeContainer>
            
            <Gallery/>
            <Search onSubmit={searchData} />
            <Results/>
        </HomeContainer>
    )
}

export default Home;