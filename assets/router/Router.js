import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { Trips } from "../pages/Trips";
import { Travelers } from "../pages/Travelers";
import { Reservations } from "../pages/Reservations";
import { Welcome } from "../pages/Welcome";
import { EditTrip } from "../pages/EditTrip";
import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material/styles";
import { CreateTrip } from "../pages/CreateTrip";
import { CreateTraveler } from "../pages/CreateTraveler";
import { EditTraveler } from "../pages/EditTraveler";
import { CreateReservation } from "../pages/CreateReservation";


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
            <Route path="/createTrip" element={<CreateTrip/>}/>
            <Route path="/editTrip/:idTrip" element={<EditTrip/>}/>
            <Route path="/travelers" element={<Travelers/>} />
            <Route path="/createTraveler" element={<CreateTraveler/>}/>
            <Route path="/editTraveler/:idTraveler" element={<EditTraveler/>}/>
            <Route path="/reservations" element={<Reservations/>} />
            <Route path="/createReservation" element={<CreateReservation/>}/>
        </Routes>
    </BrowserRouter>
  </ThemeProvider>
 )
}

export {Router};