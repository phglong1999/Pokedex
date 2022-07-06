import React from "react";
import Pagination from "@mui/material/Pagination";
import PokemonCard from "../PokemonCard/PokemonCard";
import Grid from "@mui/material/Grid";
import axios from "axios";
import { useEffect, useState } from "react";
import Box from "@mui/material/Box";

export default function ListPokemon() {
  const limit = 12;
  const [listPokemon, setListPokemon] = useState([]);
  const [pageNumber, setpageNumber] = useState(0);
  const [page, setPage] = useState(0);
  const handleChange = (event, value) => {
    setPage(value - 1);
  };
  async function getListPokemon(limit, offset) {
    return (
      await axios.get(
        `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
      )
    ).data;
  }
  function getPageNumber(a, b) {
    return parseInt(a / b) + (a % b === 0 ? 0 : 1);
  }
  useEffect(() => {
    const fetchData = async () => {
      var pokemons = [];
      var res = await getListPokemon(limit, page * limit);
      setpageNumber(getPageNumber(res.count, limit));
      for (var i = 0; i < res.results.length; i++) {
        const itemData = await axios.get(res.results[i].url);
        pokemons = [...pokemons, itemData.data];
      }
      setListPokemon(pokemons);
    };
    fetchData();
  }, [page]);
  console.log(listPokemon);
  return (
    <Box pb="60px">
      {" "}
      {listPokemon.length > 0 && (
        <>
          <Grid container spacing={2}>
            {listPokemon.map((item, index) => (
              <Grid
                key={index}
                item
                xs={12}
                sm={6}
                md={4}
                lg={3}
                xl={2}
                sx={{ display: "flex", justifyContent: "center" }}
              >
                <PokemonCard pokemon={item} />
              </Grid>
            ))}
          </Grid>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              position: "fixed",
              bottom: 0,
              left: 0,
              width: "100%",
              backgroundColor: "#fbfbfb",
              border: "1px solid",
              height: "50px",
              alignItems: "center",
            }}
          >
            {" "}
            <Pagination
              className="pagination"
              count={pageNumber}
              color="secondary"
              onChange={handleChange}
            />
          </Box>
        </>
      )}
    </Box>
  );
}
