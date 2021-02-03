
import React from "react";
import Search from "./Search";
import Categories from "./Categories";
import styled from 'styled-components';
import Gallery from "./Gallery";

function Home() {

    const HomeContainer = styled.div`
        display: flex;
        flex-direction: column;
        width: 100%;
        flex-grow: 1;
        margin: 5px;
        position: relative;
        top: 40px;
    `;

    


    return(
        <HomeContainer>
            
            <Categories/>
            <Gallery/>
            <Search/>
        </HomeContainer>
    )
}

export default Home;