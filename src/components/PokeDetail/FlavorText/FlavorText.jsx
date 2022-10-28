import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";

export default function FlavorText({ id }) {
  const [species, setSpecies] = useState();
  useEffect(() => {
    const getSpecies = async () => {
      const res = await axios.get(
        `https://pokeapi.co/api/v2/pokemon-species/${id}`
      );
      console.log(res.data);
      setSpecies(res.data);
    };
    getSpecies();
  }, [id]);
  const getFlavorText = () => {
    for (let i = 0; i < species.flavor_text_entries.length; i++) {
      if (species.flavor_text_entries[i].language.name === "en") {
        return species.flavor_text_entries[i].flavor_text;
      }
    }
    return "";
  };
  return (
    <>{species && <p className="text-xs text-center">{getFlavorText()}</p>}</>
  );
}
