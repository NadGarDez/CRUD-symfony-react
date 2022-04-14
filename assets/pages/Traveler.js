import React from 'react';
import { useParams } from 'react-router-dom';

const Traveler = ()=>{
    const {travelerId} = useParams();
    return (
        <h1>Traveler {travelerId}</h1>
    )
}

export {Traveler}