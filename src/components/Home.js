
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

<<<<<<< HEAD
    const SearchPosition = styled.div`
        position: absolute;
        left: 50%;
        top: 50%;

=======
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
        margin: auto;
        
>>>>>>> be9dfe868e84a2f2398fa8efcebfb6bd6f849461
    `;

    
    const searchData = (searchTerm) => {
        setKeyword(searchTerm);
    }

    // function searchHasResults = (Results) => {
    //     if()
    // }

    return(
        <HomeContainer>
<<<<<<< HEAD
            
            <Gallery/>

            <SearchPosition>
                <Search onSubmit={searchData} />
            </SearchPosition>


=======
            <Gallery/>
            <SearchPosition>
                <Search onSubmit={searchData} />
            </SearchPosition>
>>>>>>> be9dfe868e84a2f2398fa8efcebfb6bd6f849461
            <Results keyword={keyword}/>

        </HomeContainer>
    )
}

export default Home;