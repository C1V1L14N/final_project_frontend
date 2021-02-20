import React, {useState, useEffect} from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import './results.css';
// import styled from 'styled-components';

const Results = ({keyword}) => {

    const [shops, setShops] = useState([]);
    const [categories, setCategories] = useState([]);
    const [services, setServices] = useState([]);
    const [allResults, setAllResults] = useState([]);
    const [results, setResults] = useState([]);


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
                return null;
            })
            console.log(newResults)
            setResults(newResults);
        });
    };

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
        <div className="results">
            {results
            ? results.map((result, index) => {
                return(
                    <div key={index}>
                        {result.address
                        ? <div className="result-box shop-result">
                            <div className="image">
                                <img src={result.image} alt="no available"/>
                            </div>
                            <div className="result-details">
                                <h4>{result.name}</h4>
                                <p>{result.address}</p>
                                <p>{result.telephoneNumber}</p>
                                <p>Opens:{prettyDate2(result.openingHour)} Closes:{prettyDate2(result.closingHour)} </p>
                            </div>
                            <Link to= {`/shop/${result.id}`}><button className="details-btn">Click for more Details</button></Link>
                        </div>
                        : null}

                        {result.price
                        ? <div className="result-details result-box service-result">
                            <h4>{result.name}(service)</h4>
                            <p>in {result.shops.name}</p>
                            <Link to= {`/service/${result.id}`}><button className="details-btn">Click for more Details</button></Link>
                        </div>
                        : null}

                        {!result.address && !result.price
                        ? <div className="result-details result-box category-result">
                            <div className="image">
                                <img src={result.image} alt="no available"/>
                            </div>
                            <h4>{result.name}(category)</h4>
                            <Link to= {`/category/${result.id}`}><button className="details-btn">Click for more Details</button></Link>
                        </div>
                        : null}
                    </div>
                );
            })
            : "Loading..."}
        </div>
    )
}


export default Results;