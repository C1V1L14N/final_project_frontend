import React, {useState, useEffect} from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';

const Results = () => {

    const [results, setResults] = useState([]);
    const [shops, setShops] = useState([]);
    const [categories, setCategories] = useState([]);
    const [services, setServices] = useState([]);

    const getResults = () => {
        const getShops = axios.get(`http://localhost:8080/shops/`)
        .then(res => {
        console.log(res);
        setShops(res.data);
        return res.data;
        });
        const getCategories = axios.get(`http://localhost:8080/categories/`)
        .then(res => {
        console.log(res);
        setCategories(res.data);
        return res.data;
        });
        const getServices = axios.get(`http://localhost:8080/services/`)
        .then(res => {
        console.log(res);
        setServices(res.data);
        return res.data;
        });

        Promise.all([getShops, getCategories, getServices])
        .then((allResults) => {
            setResults(allResults.flat());
        })

    };

    const linkToDetails = (result) => {
        if(result.price) {
            return `/service/${result.id}`
        } else if(result.address) {
            return `/shop/${result.id}`
        } else {
            return `/category/${result.id}`
        }
    }  

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


    return(
        <div>
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
                        </div>
                        : null}

                        {result.price
                        ? <div className="result-box service-result">
                            <h4>{result.name}(service)</h4>
                            <p>in {result.shops.name}</p>
                        </div>
                        : null}

                        {!result.address && !result.price
                        ? <div className="result-box category-result">
                            <h5>{result.name}(category)</h5>
                        </div>
                        : null}
                        {/* <h4>{result.name}</h4>
                        <Link to= {linkToDetails(result)}><button>Click for more Details</button></Link> */}
                    </div>
                );
            })
            : "Loading..."}
        </div>
    )
}

export default Results;