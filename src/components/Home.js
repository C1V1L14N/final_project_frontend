
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
        align-items: center;
        width: 100%;
        flex-grow: 1;
        margin: 5px;
        position: relative;
        top: 40px;
    `;

    const ResultContainer = styled.div`
        height: 200px;
        width: 80vw;
        top: 10px;
        margin: auto;
        background-color: #e3e3e3;
        opacity: 0.9;
        position: relative;
        z-index: 4;
        border-radius: 10px;
        overflow: scroll;
        /* display: flex;
        flex-direction: column;
        align-items: center; */
    `;
    

    const SearchPosition = styled.div`
        position: relative;
        top: 200px;
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