import React, {useState, useEffect} from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';

const Results = () => {

    const [result, setResult] = useState([]);
    const [shops, setShops] = useState([]);
    const [categories, setCategories] = useState([]);
    const [services, setServices] = useState([]);

    const getResult = () => {
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
        .then((results) => {
            setResult(results.flat());
        })
        
    };
  

    useEffect(() => {
        getResult();
    }, []);

    return(
        null
    )
}

export default Results;