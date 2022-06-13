import axios from "axios";
import { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import Pagination from "@mui/material/Pagination";
import PokemonCard from "./components/Pokemon/PokemonCard/PokemonCard";
import Grid from "@mui/material/Grid";
import { Routes, Route } from "react-router-dom";

function App() {
  const limit = 24;
  const [listPokemon, setListPokemon] = useState([]);
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
  useEffect(() => {
    const fetchData = async () => {
      var pokemons = [];
      var res = await getListPokemon(limit, page * limit);
      for (var i = 0; i < limit; i++) {
        const itemData = await axios.get(res.results[i].url);
        pokemons = [...pokemons, itemData.data];
      }
      setListPokemon(pokemons);
    };
    fetchData();
  }, [page]);
  console.log(listPokemon);
  return (
    <div className="App">
      <Header />
      {listPokemon.length > 0 && (
        <>
          <Grid container spacing={2}>
            {listPokemon.map((item) => (
              <Grid item xs={3}>
                <PokemonCard pokemon={item} />
              </Grid>
            ))}
          </Grid>

          <Pagination
            className="pagination"
            count={23}
            color="secondary"
            onChange={handleChange}
          />
        </>
      )}
    </div>
  );
}

export default App;
