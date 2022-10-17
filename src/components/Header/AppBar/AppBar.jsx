import React from "react";
import ArrowDown from "./ArrowDown";
import PokeIcon from "./PokeIcon";
import "./AppBar.scss";

export default function AppBar() {
  return (
    <div className="header flex-center">
      <div className="flex-center header_left">
        <PokeIcon />
        <p>Pokedex</p>
      </div>
      <div className="flex-center header_right">
        <p>#</p>
        <ArrowDown />
      </div>
    </div>
  );
}
