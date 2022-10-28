import React from "react";
import PokeIcon from "../../../Svg/PokeIcon";
import ArrowDown from "../../../Svg/ArrowDown";

export default function AppBar() {
  return (
    <div className="flex items-center">
      <div className="flex items-center header_left">
        <PokeIcon />
        <p className="ml-[10px]">Pokedex</p>
      </div>
      <div className="flex items-center justify-end grow">
        <p className="mr-[5px]">#</p>
        <ArrowDown />
      </div>
    </div>
  );
}
