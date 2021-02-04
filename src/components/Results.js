import React, {useState, useEffect} from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import styled from 'styled-components';

const Results = ({keyword}) => {

    const [shops, setShops] = useState([]);
    const [categories, setCategories] = useState([]);
    const [services, setServices] = useState([]);
    const [allResults, setAllResults] = useState([]);
    const [results, setResults] = useState([]);

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

    

    const getResults = () => {
        const getShops = axios.get(`http://localhost:8080/shops/`)
        .then(res => {
        // console.log(res);
        setShops(res.data);
        return res.data;
        });
        const getCategories = axios.get(`http://localhost:8080/categories/`)
        .then(res => {
        // console.log(res);
        setCategories(res.data);
        return res.data;
        });
        const getServices = axios.get(`http://localhost:8080/services/`)
        .then(res => {
        // console.log(res);
        setServices(res.data);
        return res.data;
        });

        Promise.all([getShops, getCategories, getServices])
        .then((data) => {
            setAllResults(data.flat()); 
            const newResults = data.flat().filter((result) => {
                if(keyword) {
                    return (result.name).toLowerCase().includes(keyword.toLowerCase());
                        // console.log()
                
                }
            })
            console.log(newResults)
            setResults(newResults);
        });
    };

    // const linkToDetails = (result) => {
    //     if(result.price) {
    //         return `/service/${result.id}`
    //     } else if(result.address) {
    //         return `/shop/${result.id}`
    //     } else {
    //         return `/category/${result.id}`
    //     }
    // }  

    useEffect(() => {
        getResults();
    }, []);

    // Removes seconds from the time format
    const prettyDate2 = (time) => {
        var date = new Date(parseInt(time));
        return date.toLocaleTimeString(navigator.language, {
          hour: '2-digit',
          minute:'2-digit'
        });
    }

    if(!keyword) {
        return null;
    }
    return(
        <ResultContainer>
            {results
            ? results.map((result, index) => {
                return(
                    <div key={index}>
                        {result.address
                        ? <div className="result-box shop-result">
                            <h4>{result.name}</h4>
                            <p>{result.address}</p>
                            <p>{result.telephoneNumber}</p>
                            <p>Opens:{prettyDate2(result.openingHour)} Closes:{prettyDate2(result.closingHour)} </p>
                            <Link to= {`/shop/${result.id}`}><button>Click for more Details</button></Link>
                        </div>
                        : null}

                        {result.price
                        ? <div className="result-box service-result">
                            <h4>{result.name}(service)</h4>
                            <p>in {result.shops.name}</p>
                            <Link to= {`/service/${result.id}`}><button>Click for more Details</button></Link>
                        </div>
                        : null}

                        {!result.address && !result.price
                        ? <div className="result-box category-result">
                            <h5>{result.name}(category)</h5>
                            <Link to= {`/category/${result.id}`}><button>Click for more Details</button></Link>
                        </div>
                        : null}
                        {/* <h4>{result.name}</h4>
                        <Link to= {linkToDetails(result)}><button>Click for more Details</button></Link> */}
                    </div>
                );
            })
            : "Loading..."}
        </ResultContainer>
    )
}


export default Results;