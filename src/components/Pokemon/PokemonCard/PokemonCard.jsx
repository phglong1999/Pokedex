import { React } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "./PokemonCard.scss";

export default function PokemonCard({ pokemon }) {
  function parseColor() {
    return "var(--root-" + pokemon.types[0].type.name + ")";
  }
  return (
    <Card className="card-pokemon" sx={{ borderColor: parseColor() }}>
      <Typography
        paragraph
        sx={{
          color: parseColor(),
          textAlign: "right",
          marginTop: "10px",
          marginRight: "10px",
        }}
      >
        #{pokemon?.id}
      </Typography>
      <CardMedia
        component="img"
        image={pokemon?.sprites.other["official-artwork"].front_default}
        alt=""
      />
      <CardActions
        sx={{ backgroundColor: parseColor(), justifyContent: "center" }}
      >
        <Button
          sx={{ color: "white", textTransform: "capitalize" }}
          size="small"
        >
          {pokemon.name}
        </Button>
      </CardActions>
    </Card>
  );
}
