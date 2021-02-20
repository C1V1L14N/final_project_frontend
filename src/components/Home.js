
import React, { useState } from 'react';
import Search from "./Search";
import Gallery from "./Gallery";
import Results from "./Results";
import styled from 'styled-components';
import './home.css';


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
    
    const searchData = (searchTerm) => {
        setKeyword(searchTerm);
    }


    return(
        <HomeContainer>
            <Gallery/>
            <div className="search-bar">
                <Search onSubmit={searchData} />
            </div>
            <div className="result-container">
                <Results keyword={keyword}/>
            </div>
        </HomeContainer>
    )
}

export default Home;