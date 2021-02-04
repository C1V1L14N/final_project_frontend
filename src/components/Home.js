
import React, { useState } from 'react';
import Search from "./Search";
import Categories from "./Categories";
import styled from 'styled-components';
import Gallery from "./Gallery";
import Results from "./Results";

function Home() {

    const [keyword, setKeyword] = useState();

    const HomeContainer = styled.div`
        display: flex;
        flex-direction: column;
        width: 100%;
        flex-grow: 1;
        margin: 5px;
        position: relative;
        top: 40px;
    `;

    const SearchPosition = styled.div`
        position: absolute;
        left: 50%;
        top: 50%;

    `;

    
    const searchData = (searchTerm) => {
        setKeyword(searchTerm);
    }

    return(
        <HomeContainer>
            
            <Gallery/>

            <SearchPosition>
                <Search onSubmit={searchData} />
            </SearchPosition>


            <Results keyword={keyword}/>
        </HomeContainer>
    )
}

export default Home;