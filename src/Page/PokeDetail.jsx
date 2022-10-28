import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router";
import Chip from "../components/Chip/Chip";
import Header from "../components/Header/Detail/Header";
import About from "../components/PokeDetail/About/About";
import BaseStats from "../components/PokeDetail/BaseStats/BaseStats";
import FlavorText from "../components/PokeDetail/FlavorText/FlavorText";
import { color } from "../Utils/utils";

export default function PokeDetail() {
  const id = useParams().id;
  const [pokemon, setPokemon] = useState();
  console.log(pokemon);
  useEffect(() => {
    const getPokemon = async () => {
      const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
      setPokemon(res.data);
    };
    getPokemon();
    // axios
    //   .post("https://beta.pokeapi.co/graphql/v1beta", {
    //     query: `
    //       query getPokemon {
    //         pokemon_v2_pokemon(where: {id: {_eq: ${id}}}) {
    //           id
    //           name
    //           height
    //           weight
    //           pokemon_v2_pokemontypes {
    //             pokemon_v2_type {
    //               name
    //             }
    //           }
    //           pokemon_v2_pokemonsprites {
    //             sprites
    //           }
    //           pokemon_v2_pokemonmoves(distinct_on: move_id) {
    //             move_id
    //             pokemon_v2_move {
    //               name
    //             }
    //           }
    //           pokemon_species_id
    //           pokemon_v2_pokemonstats {
    //             base_stat
    //             effort
    //             pokemon_v2_stat {
    //               name
    //             }
    //           }
    //         }
    //       }
    //     `,
    //   })
    //   .then((res) => {
    //     setPokemon(res.data.data.pokemon_v2_pokemon[0]);
    //     console.log(
    //       JSON.parse(
    //         res.data.data.pokemon_v2_pokemon[0].pokemon_v2_pokemonsprites[0]
    //           .sprites
    //       ).other
    //     );
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  }, [id]);
  return (
    <>
      {pokemon && (
        <div
          className="relative z-0 rounded-[12px] pt-[24px] pb-0 px-[16px] shadow-[0_8px_16px_4px_rgba(0,0,0,0.25)] m-4"
          style={{
            backgroundColor: color[pokemon.types[0].type.name],
          }}
        >
          <Header pokemon={pokemon} />{" "}
          <img
            className="relative z-30 ml-auto mr-auto"
            src={pokemon.sprites.other["official-artwork"]["front_default"]}
            alt=""
          ></img>
          <img
            className="absolute top-6 right-8 z-20"
            src="Pokeball.svg"
            alt=""
          />
          <div className="bg-white relative mt-[-5rem] px-4 pt-[5rem] flex flex-col items-center gap-[16px]">
            <div className="flex justify-center gap-[5px]">
              {pokemon.types.map((item, index) => (
                <Chip type={item.type.name} key={index} />
              ))}
            </div>
            <About
              types={pokemon.types}
              moves={pokemon.moves}
              height={pokemon.height}
              weight={pokemon.weight}
            />
            <FlavorText id={pokemon.id} />
            <BaseStats
              stats={pokemon.stats}
              type={pokemon.types[0].type.name}
            />
          </div>
        </div>
      )}
    </>
  );
}
