
import React, { useState } from 'react';
import Search from "./Search";
import Categories from "./category/Categories";
import styled from 'styled-components';
import Gallery from "./Gallery";
import Results from "./Results";
import './home.css';


function Home() {

    const [keyword, setKeyword] = useState();

    
    const searchData = (searchTerm) => {
        setKeyword(searchTerm);
    }


    return(
        <div className="home-container">
            <Gallery/>
            <div className="search-position">
                <Search onSubmit={searchData} />
            </div>
            <div className="result-container">
                <Results keyword={keyword}/>
            </div>
        </div>
    )
}

export default Home;