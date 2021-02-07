import React from "react";
import styled from 'styled-components';

function Basket() {


    const BasketTitle = styled.h3`
        font-family: Didot, sans-serif;
        font-size: 50px;
        color: #e3e3e3;
        height: 400px;
        width: 600px;
    `;

    return(
        <BasketTitle>The basket view will display all bookings/appointments that the user has made and will allow the user to confirm them.</BasketTitle>
    )
}

export default Basket;