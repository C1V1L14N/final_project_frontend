
import React, { useState} from 'react';
import Search from "./Search";
import Gallery from "./Gallery";
import Results from "./Results";
import './home.css';


function Home() {

    const [keyword, setKeyword] = useState("");

    
    const searchData = (searchTerm) => {
        setKeyword(searchTerm);
    };


    return(
        <div className="home-container">
            <Gallery/>
            <div className="search-bar">
                <Search onSubmit={searchData} />
            </div>
            <div className="result-container">
                <Results keyword={keyword}/>
            </div>
        </div>
        
    )
}

export default Home;