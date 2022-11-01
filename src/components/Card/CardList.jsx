import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import Card from "./Card";
import { Link } from "react-router-dom";

export default function CardList() {
  const [listPoke, setListPoke] = useState([]);
  const getPokemon = async () => {
    let data = await axios.post("https://beta.pokeapi.co/graphql/v1beta", {
      query: `
        query samplePokeAPIquery {
            pokemon_v2_pokemon(order_by: {id: asc}, limit: 900) {
                id
                name
                pokemon_v2_pokemontypes {
                    pokemon_v2_type {
                        name
                    }
                }
                pokemon_v2_pokemonsprites {
                    sprites
                }
            }
        }
      `,
    });
    return data;
  };
  useEffect(() => {
    getPokemon().then((response) => {
      setListPoke(response.data.data.pokemon_v2_pokemon);
    });
  }, []);
  return (
    <div className="flex flex-wrap ml-[-8px] mt-[-8px]">
      {listPoke.length !== 0 &&
        listPoke.map((item) => (
          <Link
            to={"/" + item.id}
            className="flex-[1_1_33.33333%] pl-[8px] pt-[8px] sm:flex-[1_1_25%] md:flex-[1_1_20%] lg:flex-[1_1_16.66666%] xl:flex-[1_1_14.28571%]"
            key={item.id}
          >
            <Card
              id={item.id}
              name={item.name}
              type={item.pokemon_v2_pokemontypes}
              image={JSON.parse(item.pokemon_v2_pokemonsprites[0].sprites)}
            />
          </Link>
        ))}
    </div>
  );
}
