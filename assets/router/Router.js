import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { Site } from "../pages/Site";
import { Sites } from "../pages/Sites";
import { Travelers } from "../pages/Travelers";
import { Reservations } from "../pages/Reservations";
import { Welcome } from "../pages/Welcome";
import { Reservation } from "../pages/Reservation";
import { Traveler } from "../pages/Traveler";

import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material/styles";


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
      secondary: {
        main: '#e65100',
      },
      background: {
        default: '#fff8e1',
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
            <Route path="/sites" element={<Sites />}/>
            <Route path="/site/:siteId" element={<Site/>}/>
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