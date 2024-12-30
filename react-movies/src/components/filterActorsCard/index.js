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

const formControl = 
{
  margin: 1,
  minWidth: 220,
  backgroundColor: "#7ae6a3"
};

export default function FilterActorsCard(props) {

  const handleChange = (e, type, value) => {
    e.preventDefault();
    props.onUserInput(type, value); // NEW
  };

  const handleTextChange = (e, props) => {
    handleChange(e, "name", e.target.value);
  };

  const handleRoleChange = (e, props) => {
    handleChange(e, "role", e.target.value);
  };

  const handleSortChange = (e) => {
    handleChange(e, "sort", e.target.value);
  };

  const changeDirection = (e) => {
    e.preventDefault();
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
          Filter the actors.
        </Typography>
            <TextField
                sx={{...formControl}}
                id="filled-search"
                label="Search Name"
                type="search"
                variant="filled"
                value={props.titleFilter}
                onChange={handleTextChange}
            />

            <TextField
                sx={{...formControl}}
                id="filled-search-role"
                label="Search Role"
                type="search"
                variant="filled"
                value={props.roleFilter}
                onChange={handleRoleChange}
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
            <MenuItem value="popularity">Popularity</MenuItem>
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