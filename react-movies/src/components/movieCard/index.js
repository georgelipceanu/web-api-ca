import React, { useContext  } from "react";
import { MoviesContext } from "../../contexts/moviesContext";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardHeader from "@mui/material/CardHeader";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CalendarIcon from "@mui/icons-material/CalendarTodayTwoTone";
import StarRateIcon from "@mui/icons-material/StarRate";
import { Stack } from "@mui/material";
import Grid from "@mui/material/Grid2";
import img from '../../images/film-poster-placeholder.png';
import Avatar from '@mui/material/Avatar';
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import LightbulbIcon from '@mui/icons-material/Lightbulb';

export default function MovieCard({ movie, action }) {
  const { favorites, addToFavorites, watchList, addToWatchList } = useContext(MoviesContext);

  if (favorites.find((id) => id === movie.id)) {
    movie.favorite = true;
  } else {
    movie.favorite = false
  }

  if (watchList.find((id) => id === movie.id)) {
    movie.watchList = true;
  } else {
    movie.watchList = false
  }

  const handleAddToFavorite = (e) => {
    e.preventDefault();
    addToFavorites(movie);
  };

  return (
    <Card
    sx={{
      backgroundColor: "#1c3626",
      color: "#7ae6a3",
      fontFamily: "'Playfair Display', 'Poppins', sans-serif",
    }}>
      <CardHeader
        avatar={
          <Stack direction="row" spacing={1}>
            {movie.favorite && (
              <Avatar sx={{ backgroundColor: 'red' }}>
                <FavoriteIcon />
              </Avatar>
            )}
            {movie.watchList && (
              <Avatar sx={{ backgroundColor: 'blue' }}>
                <PlaylistAddIcon />
              </Avatar>
            )}
          </Stack>
        }
        title={
          <Typography variant="h5" component="p">
            {movie.title}{" "}
          </Typography>
        }
      />
      <CardMedia
        sx={{ height: 500 }}
        image={
          movie.poster_path
            ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
            : img
        }
      />
      <CardContent>
        <Grid container>
          <Grid size={{xs: 6}}>
            <Typography variant="h6" component="p">
              <CalendarIcon fontSize="small" />
              {movie.release_date}
            </Typography>
          </Grid>
          <Grid size={{xs: 6}}>
            <Typography variant="h6" component="p">
              <StarRateIcon fontSize="small" />
              {"  "} {movie.vote_average}{" "}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
      <CardActions disableSpacing>

   
      
        {action(movie)}

             
      <Link to={`/movies/${movie.id}/recommended`}
      state={{ 
        movie: movie,
      }}>
          <LightbulbIcon color="primary" /> {/* LINK TO RECOMMENDED  */}
        </Link>
      
        <Link to={`/movies/${movie.id}`}>
          <Button variant="outlined" size="medium" color="primary">
            More Info ...
          </Button>
        </Link>

        
      </CardActions>
    </Card>
  );
}
