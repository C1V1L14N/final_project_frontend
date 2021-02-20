import React from "react";
import './gallery.css'
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

    return(
        <div className="gallery">
            <img className="gal-img" id="gal-img1" src={rural} alt="rural-village"/>
            <img className="gal-img" id="gal-img2" src={glasses} alt="glasses"/>
            <img className="gal-img" id="gal-img3" src={therapy} alt="therapy"/>
            <img className="gal-img" id="gal-img4" src={shoes} alt="shoes"/>
            <img className="gal-img" id="gal-img5" src={laundrette} alt="laundrette"/>
            <img className="gal-img" id="gal-img6" src={barber} alt="barber"/>
            <img className="gal-img" id="gal-img7" src={pole} alt="barber-pole"/>
            <img className="gal-img" id="gal-img8" src={clean} alt="cleaner"/>
            
            <img className="gal-img" id="gal-img9" src={street} alt="street"/>
            <img className="gal-img" id="gal-img10" src={local} alt="theatre-sign"/>
            <img className="gal-img" id="gal-img11" src={barber2} alt="barber"/>
            <img className="gal-img" id="gal-img12" src={library} alt="library"/>
            <img className="gal-img" id="gal-img13" src={groomer} alt="dog-groomer"/>
            <img className="gal-img" id="gal-img14" src={nails} alt="nail-salon"/>
            <img className="gal-img" id="gal-img15" src={dogWalker} alt="dog-walker"/>
            <img className="gal-img" id="gal-img16" src={massage} alt="massage"/>
        </div>
    )
}

export default Gallery;