import React from "react";
import Actor from "../actorCard/";
import Grid from "@mui/material/Grid2";

const ActorList = (props) => {//BOILER PLATE CODE FROM MOVIE LIST
    console.log(props);
  let actorCards = props.actors.map((m) => (
    <Grid key={m.id} size={{xs: 12, sm: 6, md: 4, lg: 3, xl: 2}} sx={{padding: "20px"}}>
       <Actor key={m.id} actor={m} action={props.action} />
    </Grid>
  ));
  return actorCards;
};

export default ActorList;