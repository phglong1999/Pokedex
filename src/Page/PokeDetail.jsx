import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router";
import { color } from "../Color/color";
import { UpperCaseFirstLetter } from "../components/Card/Card";
import ArrowLeft from "../components/PokeDatail/Svg/ArrowLeft";
import "./PokeDetail.scss";

export default function PokeDetail() {
  const id = useParams().id;
  const [pokemon, setPokemon] = useState();
  useEffect(() => {
    axios
      .post("https://beta.pokeapi.co/graphql/v1beta", {
        query: `query samplePokeAPIquery {
  pokemon_v2_pokemon(where: {id: {_eq: ${id}}}) {
    id
    name
    height
    weight
    pokemon_v2_pokemontypes {
      pokemon_v2_type {
        name
      }
    }
    pokemon_v2_pokemonsprites {
      sprites
    }
    pokemon_v2_pokemonmoves(distinct_on: move_id) {
      move_id
      pokemon_v2_move {
        name
      }
    }
    pokemon_species_id
  }
}
`,
      })
      .then((res) => {
        setPokemon(res.data.data.pokemon_v2_pokemon[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);
  return (
    <div>
      {pokemon && (
        <div
          className="pokeDetail"
          style={{
            backgroundColor:
              color[pokemon.pokemon_v2_pokemontypes[0].pokemon_v2_type.name],
          }}
        >
          <div className="appBar">
            <ArrowLeft />
            <p>{UpperCaseFirstLetter(pokemon.name)}</p>
          </div>
        </div>
      )}
    </div>
  );
}
