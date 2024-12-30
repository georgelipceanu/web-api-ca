import React, { useState } from "react";
import { useQuery } from 'react-query';
import { useNavigate, Link } from "react-router-dom";
import { getMovieRecommendations } from "../../api/tmdb-api";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import MonetizationIcon from "@mui/icons-material/MonetizationOn";
import StarRate from "@mui/icons-material/StarRate";
import NavigationIcon from "@mui/icons-material/Navigation";
import Fab from "@mui/material/Fab";
import Typography from "@mui/material/Typography";
import Drawer from "@mui/material/Drawer";
import MovieReviews from "../movieReviews";
import { Button, Select, MenuItem, FormControl, InputLabel } from "@mui/material";
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
      fontFamily: " sans-serif", 
};
const chip = { margin: 0.5,
  backgroundColor: "#999999", 
      color: "#ffffff", 
      fontFamily: "'Playfair Display', 'Poppins', sans-serif", 
 };

const MovieDetails = ({ movie }) => {  // Don't miss this!
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate(); // use navigate to change routes programmatically in dropdown


  const { data: recommendationsData, isLoading, error } = useQuery(
    ['recommendations', { id: movie.id }],
    getMovieRecommendations,
    { enabled: dropdownOpen } // only fetch when dropdown is open
  );

  const recommendations = recommendationsData?.results || [];

  const handleSelectRecommendation = (event) => {
    const selectedMovieId = event.target.value;
    if (selectedMovieId) {
      navigate(`/movies/${selectedMovieId}`);
    }
  };

  return (
    <>
      <Typography variant="h5" component="h3" style={{backgroundColor: "#a8a8a8", 
      fontFamily: "'Playfair Display', 'Poppins', sans-serif",} }>
        Overview
      </Typography>

      <Typography variant="h6" component="p" style={{backgroundColor: "#a8a8a8", 
      fontFamily: "'Playfair Display', 'Poppins', sans-serif",} }>
        {movie.overview}
      </Typography>

      <Paper 
        component="ul" 
        sx={{...root}}
      >
        <li>
          <Chip label="Genres" sx={{...chip}} color="primary" />
        </li>
        {movie.genres.map((g) => (
          <li key={g.name}>
            <Chip label={g.name} sx={{...chip}} />
          </li>
        ))}
      </Paper>
      <Paper component="ul" sx={{...root}}>
        <Chip icon={<AccessTimeIcon />} label={`${movie.runtime} min.`} sx={{...chip}}/>
        <Chip sx={{...chip}}
          icon={<MonetizationIcon />}
          label={`${movie.revenue.toLocaleString()}`}
        />
        <Chip sx={{...chip}}
          icon={<Language />}
          label={`${movie.original_language}`}
        />
        <Chip sx={{...chip}}
          icon={<StarRate />}
          label={`${movie.vote_average} (${movie.vote_count}`}
        />
        <Chip icon={<CalendarIcon />} label={`Released: ${movie.release_date}`} sx={{...chip}} />
      </Paper>
      <Paper 
        component="ul" 
        sx={{...root}}
      >
        <li>
          <Chip label="Production Countries" sx={{...chip}} color="primary" />
        </li>
        {movie.production_countries.map((g) => (
          <li key={g.name}>
            <Chip label={g.name} sx={{...chip}} />
          </li>
        ))}
      </Paper>

      <FormControl fullWidth sx={{ marginTop: 2 }} >
        <InputLabel id="recommendations-label" style={{backgroundColor: "#242424", 
      backgroundColor: "#999999", 
      fontFamily: "'Playfair Display', 'Poppins', sans-serif",} }>Recommendations</InputLabel> {/* FONT LOADING NOT WORKING */}
        <Select style={{backgroundColor: "#242424", 
      backgroundColor: "#999999", 
      fontFamily: "'Playfair Display', 'Poppins', sans-serif",} }
          labelId="recommendations-label"
          id="recommendations-select"
          open={dropdownOpen}
          onClose={() => setDropdownOpen(false)}
          onOpen={() => setDropdownOpen(true)}
          label="Recommendations"
          onChange={handleSelectRecommendation} // Call this function on selection
        >
          {isLoading ? (
            <MenuItem>Loading Recs</MenuItem>
          ) : error ? (
            <MenuItem>Error loading recommendations</MenuItem>
          ) : (
            recommendations.map((rec) => ( // DISPLAYS EACH MENU TYPE FOR EACH ITEM
              <MenuItem key={rec.id} value={rec.id}>
                {rec.title} 
              </MenuItem>
            ))
          )}
        </Select>
      </FormControl>

      <Fab
        color="secondary"
        variant="extended"
        onClick={() =>setDrawerOpen(true)}
        sx={{
          position: 'fixed',
          bottom: '1em',
          right: '1em'
        }}
      >
        <NavigationIcon />
        Reviews
      </Fab>
      <Drawer anchor="top" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <MovieReviews movie={movie} />
      </Drawer>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '1em' }}>
      <Link
        to={`/movies/${movie.id}/recommended`}
        state={{ //BUTTON MOVES TO RECOMMENDED PAGE FOR MOVIES
          movie: movie,
        }}
      >
        <Button variant="outlined" size="medium" color="primary" style={{backgroundColor: "#242424", 
      color: "#ffffff", 
      borderColor: "#ffffff",
      fontFamily: "'Playfair Display', 'Poppins', sans-serif",} }>
          See full recommendations page...
        </Button>
      </Link>
    </div>
  </>
  );
};
export default MovieDetails ;