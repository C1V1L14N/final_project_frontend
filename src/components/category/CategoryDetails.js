import React, { useEffect, useState } from "react";
import {useParams, BrowserRouter as Router} from 'react-router-dom';
import styled from "styled-components";

const CategoryDetails = () => {

    const Title = styled.h4`
    color: #e3e3e3;
    font-family: Didot, sans-serif;
    font-size: 40px;
    padding: 0px;
    margin: 0px;
    `;

    const Ptag = styled.p`
    color: #e3e3e3;
    font-family: Didot, sans-serif;
    font-size: 25px;
    padding: 0px;
    margin: 0px;
    `;

    const ImageSize = styled.div`
    height: 300px;
    width: 400px;
    `;

    const Pic = styled.img`
    object-fit: cover;
    height: 100%;
    width: 100%;
    `;

    const Margin = styled.div`
    margin-left: 15px;
    position: relative;
    `;

    const categoryId = useParams().categoryId;

    const [category, setCategory]= useState(null);
    useEffect(() => {
        fetch(`http://localhost:8080/categories/${categoryId}`)
        .then(res => res.json())
        .then(data => setCategory(data))
    }, [])
    


    if (!category){
        return <p>Loading...</p>
    }
    return (
        <Margin>
            <Title>{category.name}</Title>
            <Ptag>{category.description}</Ptag>
            <ImageSize>
            <Pic src={category.image} alt="no available"/>
            </ImageSize>
        </Margin>
    )

}

export default CategoryDetails;