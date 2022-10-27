import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router";
import Header from "../components/Header/Detail/Header";
import Detail from "../components/PokeDetail/Detail/Detail";
import { color } from "../Utils/utils";

export default function PokeDetail() {
  const id = useParams().id;
  const [pokemon, setPokemon] = useState();

  useEffect(() => {
    axios
      .post("https://beta.pokeapi.co/graphql/v1beta", {
        query: `
          query getPokemon {
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
    <>
      {pokemon && (
        <div
          className="relative z-0 rounded-[12px] pt-[24px] pb-0 px-[16px] shadow-[0_8px_16px_4px_rgba(0,0,0,0.25)] m-4"
          style={{
            backgroundColor:
              color[pokemon.pokemon_v2_pokemontypes[0].pokemon_v2_type.name],
          }}
        >
          <Header pokemon={pokemon} />{" "}
          <img
            className="relative z-30"
            src={
              JSON.parse(pokemon.pokemon_v2_pokemonsprites[0].sprites).other[
                "official-artwork"
              ]["front_default"]
            }
            alt=""
          ></img>
          <img
            className="absolute top-6 right-8 z-20"
            src="Pokeball.svg"
            alt=""
          />
          <Detail
            types={pokemon.pokemon_v2_pokemontypes}
            moves={pokemon.pokemon_v2_pokemonmoves}
            height={pokemon.height}
            weight={pokemon.weight}
          />
        </div>
      )}
    </>
  );
}
