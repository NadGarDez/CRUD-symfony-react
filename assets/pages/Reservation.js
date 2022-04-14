import React from 'react';
import { useParams } from 'react-router-dom';

const Reservation = ()=>{
    const {reservationId} = useParams();
    return (
        <h1>Reservations {reservationId}</h1>
    )
}


export {Reservation};