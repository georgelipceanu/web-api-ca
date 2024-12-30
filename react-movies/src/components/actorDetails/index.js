import React, { useState } from "react";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import MonetizationIcon from "@mui/icons-material/MonetizationOn";
import StarRate from "@mui/icons-material/StarRate";
import NavigationIcon from "@mui/icons-material/Navigation";
import Typography from "@mui/material/Typography";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import Language from "@mui/icons-material/Language";
import CalendarIcon from "@mui/icons-material/CalendarTodayTwoTone";

const root = {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    listStyle: "none",
    padding: 1.5,
    margin: 0,
    
      backgroundColor: "#a8a8a8", 
      color: "#000000", 
      fontFamily: "'Playfair Display', 'Poppins', sans-serif", 
    
};
const chip = { margin: 0.5,
      backgroundColor: "#999999", 
      color: "#ffffff", 
      fontFamily: "'Playfair Display', 'Poppins', sans-serif", // ADDITIONAL FONTS (FAILED TO LOAD)
 };

const ActorDetails = ({ actor }) => {  //BOILER PLATE CODE FROM MOVIE DETAILS

  return (
    <>
      <Typography variant="h5" component="h3"
      style={{
        backgroundColor: "#a8a8a8", 
        fontFamily: "sans-serif", 
      }}>
        Biography
      </Typography>

      <Typography variant="h6" component="p"
      style={{
        backgroundColor: "#a8a8a8", 
        fontFamily: "sans-serif", 
      }}>
        {actor.biography}
      </Typography>

      <Paper 
        component="ul" 
        sx={{...root}}
      >
        <Chip
            icon={<StarRate />}
            label={`Popularity: ${actor.popularity || "N/A"}`}
            sx={{ ...chip }}
          />
        <Chip icon={<CalendarIcon />} label={`Birthday: ${actor.birthday || "N/A"}`} sx={{ ...chip }} />

        {actor.deathday === null ? ( // CONDITIONAL FOR DEATH DAY, STILL ALIVE IF NULL,
          <Chip
            icon={<CheckCircleIcon />}
            label="Still Alive!"
            color="success"
            
          />
        ) : (
          <Chip
            icon={<RemoveCircleIcon />}
            label={`Death Day: ${actor.deathday}`}
            color="error"
            
          />
        )}

      </Paper>
      
      </>
  );
};
export default ActorDetails ;