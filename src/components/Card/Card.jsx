import React from "react";
import "./Card.scss";
import { color } from "../../Color/color";

export const UpperCaseFirstLetter = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};
export default function Card({ name, id, type, image }) {
  return (
    <div
      className="card"
      style={{ border: "1px solid " + color[type[0].pokemon_v2_type.name] }}
    >
      <div className="card_media">
        <p style={{ color: color[type[0].pokemon_v2_type.name] }}>#{id}</p>
        <img
          alt=""
          src={image.other["official-artwork"]["front_default"]}
        ></img>
      </div>
      <div
        className="card_content"
        style={{ backgroundColor: color[type[0].pokemon_v2_type.name] }}
      >
        <p>{UpperCaseFirstLetter(name)}</p>
      </div>
    </div>
  );
}
