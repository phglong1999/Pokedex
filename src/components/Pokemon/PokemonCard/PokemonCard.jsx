import { React, useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "./PokemonCard.scss";
import axios from "axios";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);
export default function PokemonCard() {
  const [pokemon, setPokemon] = useState();
  useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/pokemon/25").then(function (response) {
      console.log(response.data);
      setPokemon(response.data);
    });
  }, []);

  return (
    <Card
      className="card-electric"
      sx={{ maxWidth: 275, margin: "5px", border: "1px solid" }}
    >
      <Typography paragraph>Method:</Typography>
      <CardMedia
        component="img"
        image={pokemon?.sprites.other["official-artwork"].front_default}
        alt=""
      />
      <CardActions sx={{ backgroundColor: "var(--root-electric)" }}>
        <Button sx={{ color: "white" }} size="small">
          {pokemon?.forms[0].name}
        </Button>
      </CardActions>
    </Card>
  );
}
