import Header from '../header/Header.js';
import Footer from '../footer/Footer.js';
import { useParams } from 'react-router-dom';
import React, { useState } from 'react';
import travelData from '../../Data/db.json'
import './Tourdetails.css';

function TourDetails() {
    //Calling useState and useParams
    const { id } = useParams();
    const [showFullDescription, setShowFullDescription] = useState(false);

    //Calling the Id from Json File
    const selectedCity = travelData.find(city => city.id === id);

    // Not City found
    if (!selectedCity) {
        return <div>City not found</div>;
    }

    //Calling the rest of Info from the Json file
    const { name, info, image, price } = selectedCity;


    //HandleToggleDescription
    const handleToggleDescription = () => {
        setShowFullDescription(!showFullDescription);
    };


    return (
        <div>
            <Header />
            <div className="tour-details"> 
                <h2>{name}</h2>
                <img src={image} alt={name} />
                <p>{showFullDescription ? info : `${info.slice(0, 100)}...`}</p>
                <button onClick={handleToggleDescription}>
                    {showFullDescription ? 'See Less' : 'See More'}
                </button>
                <p>Price: {price}</p>
            </div>
            <Footer />
        </div>
    );
};

export default TourDetails;

