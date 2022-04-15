import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import {  Trip } from "../pages/Trip";
import { Trips } from "../pages/Trips";
import { Travelers } from "../pages/Travelers";
import { Reservations } from "../pages/Reservations";
import { Welcome } from "../pages/Welcome";
import { Reservation } from "../pages/Reservation";
import { Traveler } from "../pages/Traveler";
import { EditTrip } from "../pages/EditTrip";
import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material/styles";
import { CreateTrip } from "../pages/CreateTrip";


const theme = createTheme(
  {
    typography: {
      ContrastTittle: {
        color: 'white',
        fontSize:55,
        fontFamily:'Square Peg'
      },
      ContrastSubtitle: {
        color: 'white',
        fontSize:40,
        fontFamily:'Square peg'
      },
      ContrastContent: {
        color: 'white',
        fontSize:15,
        fontFamily:'Montserrat'
      },
      h1:{
        color: '#ffd740',
        fontWeight:'bold',
        fontSize:100,
        fontFamily:'roboto'
      },
      h1Mobile:{
        color: '#ffd740',
        fontWeight:'bold',
        fontSize:60,
        fontFamily:'roboto'
      },
      ContrastLittle: {
        color: 'white',
        fontSize:12,
        fontFamily:'Montserrat'
      },
      
    },
    palette: {
      type: 'light',
      primary: {
        main: '#ffd740',
      },

      darkPrimary:{
        main:"#df8d1c"
      },
      secondary: {
        main: '#3d2719',
      },
    
     
    }
  }
)

const Router =()=>{
 return (
  <ThemeProvider theme={theme}>
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Welcome />}/>
            <Route path="/trips" element={<Trips />}/>
            <Route path="/trip/:tripId" element={<Trip/>}/>
            <Route path="/createTrip" element={<CreateTrip/>}/>
            <Route path="/editTrip/:idTrip" element={<EditTrip/>}/>
            <Route path="/travelers" element={<Travelers/>} />
            <Route path="traveler/:travelerId" element={<Traveler/>}/>
            <Route path="/reservations" element={<Reservations/>} />
            <Route path="/reservation/:reservationId" element={<Reservation/>}/>
        </Routes>
    </BrowserRouter>
  </ThemeProvider>
 )
}

export {Router};