import React, {useState, useEffect}  from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import img from '../../images/pexels-dziana-hasanbekava-5480827.jpg'
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import Button from "@mui/material/Button";
import { getGenres } from "../../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from '../spinner'

const formControl = 
  {
    margin: 1,
    minWidth: 220,
    backgroundColor: "#7ae6a3"
  };

export default function FilterMoviesCard(props) {

  const { data, error, isLoading, isError } = useQuery("genres", getGenres);

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }
  const genres = data.genres;
  if (genres[0].name !== "All"){
    genres.unshift({ id: "0", name: "All" });
  }

  const handleChange = (e, type, value) => {
    e.preventDefault();
    props.onUserInput(type, value); // NEW
  };

  const handleTextChange = (e, props) => {
    handleChange(e, "name", e.target.value);
  };

  const handleGenreChange = (e) => {
    handleChange(e, "genre", e.target.value);
  };


  const handleStartDateChange = (e) => {
    handleChange(e, "startDate", e.target.value);
  };

  const handleEndDateChange = (e) => {
    handleChange(e, "endDate", e.target.value);
  };

  const handleSortChange = (e) => {
    handleChange(e, "sort", e.target.value);
  };

  const changeDirection = (e) => {
    const change = props.direction === "ascending" ? "descending" : "ascending";
    props.onUserInput("direction", change); // CHANGES DIRECTION OF BUTTON ON USER INPUT
  };


  return (
    <Card 
      sx={{
        backgroundColor: "#1c3626",
        color: "#7ae6a3"
      }} 
      variant="outlined">
      <CardContent>
        <Typography variant="h5" component="h1">
          <SearchIcon fontSize="large" />
          Filter the movies.
        </Typography>
            <TextField
                sx={{...formControl}}
                id="filled-search"
                label="Search field"
                type="search"
                variant="filled"
                value={props.titleFilter}
                onChange={handleTextChange}
            />
        <FormControl sx={{...formControl}}>
          <InputLabel id="genre-label">Genre</InputLabel>
          <Select
            labelId="genre-label"
            id="genre-select"
            defaultValue=""
            value={props.genreFilter}
            onChange={handleGenreChange}
          >
            {genres.map((genre) => {
              return (
                <MenuItem key={genre.id} value={genre.id}>
                  {genre.name}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>

        <TextField
          sx={{ ...formControl }}
          id="start-date"
          label="Start Date"
          type="date" // NEW DATE TEXTFIELD TYPE
          variant="filled"
          value={props.startDate}
          onChange={handleStartDateChange}
        />
        <TextField
          sx={{ ...formControl }}
          id="end-date"
          label="End Date"
          type="date"
          variant="filled"
          value={props.endDate}
          onChange={handleEndDateChange}
        />
      </CardContent>

      <FormControl sx={{...formControl}}>
      <InputLabel id="genre-label">Sort by</InputLabel>
          <Select
            labelId="sort-label"
            id="sort-select"
            value={props.sort || ""}
            onChange={handleSortChange}
          >
            <MenuItem value="vote_average">Vote Average</MenuItem>
            <MenuItem value="alphabetically">Alphabetically</MenuItem>
      </Select>
      </FormControl>

      <FormControl sx={{ ...formControl }}>
        <Button 
          variant="contained" 
          onClick={changeDirection}
          startIcon={props.direction === "ascending" ? <ArrowUpwardIcon /> : <ArrowDownwardIcon />}
        >
          {props.direction === "ascending" ? "Ascending" : "Descending"}
        </Button>
      </FormControl>

      <CardMedia
        sx={{ height: 300 }}
        image={img}
        title="Filter"
      />
    </Card>
  );
}