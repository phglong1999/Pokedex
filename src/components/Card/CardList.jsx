import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import Card from "./Card";
import "./CardList.scss";

export default function CardList() {
  const [listPoke, setListPoke] = useState([]);
  const getPokemon = async () => {
    let data = await axios.post("https://beta.pokeapi.co/graphql/v1beta", {
      query: `
        query samplePokeAPIquery {
            pokemon_v2_pokemon(order_by: {id: asc}, limit: 100) {
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
    <div className="cardList">
      {listPoke.length !== 0 &&
        listPoke.map((item) => (
          <Card
            id={item.id}
            name={item.name}
            type={item.pokemon_v2_pokemontypes}
            image={JSON.parse(item.pokemon_v2_pokemonsprites[0].sprites)}
          />
        ))}
    </div>
  );
}
