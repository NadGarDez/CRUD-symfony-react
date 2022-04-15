import React from 'react';
import { useParams } from 'react-router-dom';

const Trip = ()=>{
    const {siteId} = useParams();

    return (
        <h1>Site {siteId}</h1>
    )
}


export {Trip};