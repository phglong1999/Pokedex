import { React, useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "./PokemonCard.scss";
import axios from "axios";

export default function PokemonCard({ pokemon }) {
  return (
    <Card
      className="card-electric"
      sx={{ maxWidth: 275, margin: "5px", border: "1px solid" }}
    >
      <Typography
        paragraph
        sx={{
          color: "var(--root-electric)",
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
      <CardActions sx={{ backgroundColor: "var(--root-electric)" }}>
        <Button sx={{ color: "white" }} size="small">
          {pokemon?.forms[0].name}
        </Button>
      </CardActions>
    </Card>
  );
}
