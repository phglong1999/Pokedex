import React from "react";
import { useParams } from "react-router-dom";
import Box from "@mui/material/Box";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
export default function PokemonDetail() {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState();
  async function getPokemon(id) {
    return (await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)).data;
  }
  useEffect(() => {
    const poke = async (id) => {
      setPokemon(await getPokemon(id));
    };
    poke(id);
  }, [id]);
  console.log(pokemon);
  return (
    <Box>
      <img
        src={pokemon?.sprites.other["official-artwork"].front_default}
        alt=""
      />
    </Box>
  );
}
