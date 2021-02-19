import React from "react";
import styled, { keyframes } from 'styled-components';
import laundrette from '../assets/averie-woodard-axTG1hSQ6W4-unsplash.jpg'
import pole from '../assets/tim-mossholder-q49oU8NeOHQ-unsplash.jpg'
import local from '../assets/priscilla-du-preez-acNPOikiDRw-unsplash.jpg'
import barber from '../assets/mostafa-meraji-5npGPG0sSVk-unsplash.jpg'
import barber2 from '../assets/jonathan-cooper-sS3qRFsKZlg-unsplash.jpg'
import dogWalker from '../assets/matt-nelson-aI3EBLvcyu4-unsplash.jpg'
import nails from '../assets/kris-atomic-Xa8fX8bQCgs-unsplash.jpg'
import library from '../assets/janko-ferlic-sfL_QOnmy00-unsplash.jpg'
import groomer from '../assets/henar-langa-ZVdZw2p08y4-unsplash.jpg'
import shoes from '../assets/greg-rosenke-9uvZZ54XF3M-unsplash.jpg'
import therapy from '../assets/engin-akyurt-SMwCQZWayj0-unsplash.jpg'
import massage from '../assets/emiliano-vittoriosi-dsy_ILnH69A-unsplash.jpg'
import glasses from '../assets/david-travis-aVvZJC0ynBQ-unsplash.jpg'
import street from '../assets/charlie-green-yAMPbrx-vQE-unsplash.jpg'
import clean from '../assets/austrian-national-library-t5qnrCVkUz8-unsplash.jpg'
import rural from '../assets/annie-spratt-VOq2QltYffI-unsplash.jpg'

function Gallery() {

    const GalleryContainer = styled.div`
        position: absolute;
        top: 0;
    `;

    const Gallery = styled.div`
        height: 100px;
        width: 100%;
        display: grid;
        grid-template-columns: repeat(8, calc(100% / 8));
        grid-template-rows: repeat(2, same-as-width );
        grid-gap: 0px;
        position: relative;
        margin: 0;
        padding: 0;
        border: 0;
        /* perspective: 2000; */

    `;


    const Image = styled.img`
        object-fit: cover;
        height: same-as-width;
        width: 100%;
        object-fit: cover;
        transition: 1s;
        perspective: 500;  
        /* transform: rotateY(60deg); */
        transform-origin: left;
        animation: picMove 10s ease forwards;

        /* :hover {
            transform: rotateY(0deg);
        } */

        @keyframes picMove {
            0% {transform: rotateY(90deg);
            }
            100% {transform: rotateY(0deg);
            }            
    }
    `;

    const Image2 = styled.img`
    height: same-as-width;
    width: 100%;
    object-fit: cover;
    transition: 1s;
    perspective: 500;  
    /* transform: rotateY(60deg); */
    transform-origin: left;
    animation: picMove 10s ease forwards;
    animation-delay: 0.3s;

    /* :hover {
        transform: rotateY(0deg);
    } */

    @keyframes picMove {
        0% {transform: rotateY(90deg);
        }
        100% {transform: rotateY(0deg);
        }            
    }
    `;

    const Image3 = styled.img`
    object-fit: cover;
    height: same-as-width;
    width: 100%;
    object-fit: cover;
    transition: 1s;
    perspective: 500;  
    /* transform: rotateY(60deg); */
    transform-origin: left;
    animation: picMove 10s ease forwards;
    animation-delay: 0.6s;

    /* :hover {
        transform: rotateY(0deg);
    } */

    @keyframes picMove {
        0% {transform: rotateY(90deg);
        }
        100% {transform: rotateY(0deg);
        }            
    }
    `;

const Image4 = styled.img`
object-fit: cover;
height: same-as-width;
width: 100%;
object-fit: cover;
transition: 1s;
perspective: 500;  
/* transform: rotateY(60deg); */
transform-origin: left;
animation: picMove 10s ease forwards;

/* :hover {
    transform: rotateY(0deg);
} */

@keyframes picMove {
    0% {transform: rotateY(90deg);
    }
    100% {transform: rotateY(0deg);
    }            
}
`;

const Image5 = styled.img`
object-fit: cover;
height: same-as-width;
width: 100%;
object-fit: cover;
transition: 1s;
perspective: 500;  
/* transform: rotateY(60deg); */
transform-origin: right;
animation: picMove 10s ease forwards;
animation-delay: 0.3s;

/* :hover {
transform: rotateY(0deg);
} */

@keyframes picMove {
0% {transform: rotateY(90deg);
}
100% {transform: rotateY(0deg);
}            
}
`;

const Image6 = styled.img`
object-fit: cover;
height: same-as-width;
width: 100%;
object-fit: cover;
transition: 1s;
perspective: 500;  
/* transform: rotateY(60deg); */
transform-origin: right;
animation: picMove 10s ease forwards;
animation-delay: 0.6s;

/* :hover {
transform: rotateY(0deg);
} */

@keyframes picMove {
0% {transform: rotateY(90deg);
}
100% {transform: rotateY(0deg);
}            
}
`;

const Image7 = styled.img`
object-fit: cover;
height: same-as-width;
width: 100%;
object-fit: cover;
transition: 1s;
perspective: 500;  
/* transform: rotateY(60deg); */
transform-origin: right;
animation: picMove 10s ease forwards;


/* :hover {
transform: rotateY(0deg);
} */

@keyframes picMove {
0% {transform: rotateY(90deg);
}
100% {transform: rotateY(0deg);
}            
}
`;

const Image8 = styled.img`
object-fit: cover;
height: same-as-width;
width: 100%;
object-fit: cover;
transition: 1s;
perspective: 500;  
/* transform: rotateY(60deg); */
transform-origin: right;
animation: picMove 10s ease forwards;
animation-delay: 0.3s;

/* :hover {
transform: rotateY(0deg);
} */

@keyframes picMove {
0% {transform: rotateY(90deg);
}
100% {transform: rotateY(0deg);
}            
}
`;


const Image9 = styled.img`
object-fit: cover;
height: same-as-width;
width: 100%;
object-fit: cover;
transition: 1s;
perspective: 500;  
/* transform: rotateY(60deg); */
transform-origin: left;
animation: picMove 10s ease forwards;

/* :hover {
    transform: rotateY(0deg);
} */

@keyframes picMove {
    0% {transform: rotateY(90deg);
    }
    100% {transform: rotateY(0deg);
    }            
}
`;

const Image10 = styled.img`
object-fit: cover;
height: same-as-width;
width: 100%;
object-fit: cover;
transition: 1s;
perspective: 500;  
/* transform: rotateY(60deg); */
transform-origin: left;
animation: picMove 10s ease forwards;
animation-delay: 0.3s;

/* :hover {
transform: rotateY(0deg);
} */

@keyframes picMove {
0% {transform: rotateY(90deg);
}
100% {transform: rotateY(0deg);
}            
}
`;

const Image11 = styled.img`
object-fit: cover;
height: same-as-width;
width: 100%;
object-fit: cover;
transition: 1s;
perspective: 500;  
/* transform: rotateY(60deg); */
transform-origin: left;
animation: picMove 10s ease forwards;
animation-delay: 0.6s;

/* :hover {
transform: rotateY(0deg);
} */

@keyframes picMove {
0% {transform: rotateY(90deg);
}
100% {transform: rotateY(0deg);
}            
}
`;

const Image12 = styled.img`
object-fit: cover;
height: same-as-width;
width: 100%;
object-fit: cover;
transition: 1s;
perspective: 500;  
/* transform: rotateY(60deg); */
transform-origin: left;
animation: picMove 10s ease forwards;

/* :hover {
transform: rotateY(0deg);
} */

@keyframes picMove {
0% {transform: rotateY(90deg);
}
100% {transform: rotateY(0deg);
}            
}
`;

const Image13 = styled.img`
object-fit: cover;
height: same-as-width;
width: 100%;
object-fit: cover;
transition: 1s;
perspective: 500;  
/* transform: rotateY(60deg); */
transform-origin: right;
animation: picMove 10s ease forwards;
animation-delay: 0.3s;

/* :hover {
transform: rotateY(0deg);
} */

@keyframes picMove {
0% {transform: rotateY(90deg);
}
100% {transform: rotateY(0deg);
}            
}
`;

const Image14 = styled.img`
object-fit: cover;
height: same-as-width;
width: 100%;
object-fit: cover;
transition: 1s;
perspective: 500;  
/* transform: rotateY(60deg); */
transform-origin: right;
animation: picMove 10s ease forwards;
animation-delay: 0.6s;

/* :hover {
transform: rotateY(0deg);
} */

@keyframes picMove {
0% {transform: rotateY(90deg);
}
100% {transform: rotateY(0deg);
}            
}
`;

const Image15 = styled.img`
object-fit: cover;
height: same-as-width;
width: 100%;
object-fit: cover;
transition: 1s;
perspective: 500;  
/* transform: rotateY(60deg); */
transform-origin: right;
animation: picMove 10s ease forwards;


/* :hover {
transform: rotateY(0deg);
} */

@keyframes picMove {
0% {transform: rotateY(90deg);
}
100% {transform: rotateY(0deg);
}            
}
`;

const Image16 = styled.img`
object-fit: cover;
height: same-as-width;
width: 100%;
object-fit: cover;
transition: 1s;
perspective: 500;  
/* transform: rotateY(60deg); */
transform-origin: right;
animation: picMove 10s ease forwards;
animation-delay: 0.3s;

/* :hover {
transform: rotateY(0deg);
} */

@keyframes picMove {
0% {transform: rotateY(90deg);
}
100% {transform: rotateY(0deg);
}            
}
`;





    

    


    



    return(
        <GalleryContainer>

                <Gallery>
                    <Image src={rural} alt="rural-village"/>
                    <Image2 src={glasses} alt="glasses"/>
                    <Image3 src={therapy} alt="therapy"/>
                    <Image4 src={shoes} alt="shoes"/>
                    <Image5 src={laundrette} alt="laundrette"/>
                    <Image6 src={barber} alt="barber"/>
                    <Image7 src={pole} alt="barber-pole"/>
                    <Image8 src={clean} alt="cleaner"/>
                    
                    <Image9 src={street} alt="street"/>
                    <Image10 src={local} alt="theatre-sign"/>
                    <Image11 src={barber2} alt="barber"/>
                    <Image12 src={library} alt="library"/>
                    <Image13 src={groomer} alt="dog-groomer"/>
                    <Image14 src={nails} alt="nail-salon"/>
                    <Image15 src={dogWalker} alt="dog-walker"/>
                    <Image16 src={massage} alt="massage"/>
                    

                </Gallery>
        </GalleryContainer>


    )
}

export default Gallery;