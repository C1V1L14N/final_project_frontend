
import React, { useState } from 'react';
import Search from "./Search";
import Categories from "./category/Categories";
import styled from 'styled-components';
import Gallery from "./Gallery";
import Results from "./Results";


function Home() {

    const [keyword, setKeyword] = useState();

    const HomeContainer = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        flex-grow: 1;
        position: relative;
        top: 2.5vw;
    `;


    const SearchPosition = styled.div`
        position: relative;
        top: 9vw;
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
            <div className="result-container">
                <Results keyword={keyword}/>
            </div>
            

        </HomeContainer>
    )
}

export default Home;