import React from "react";
import { color, UpperCaseFirstLetter } from "../../Utils/utils";

export default function Card({ name, id, type, image }) {
  return (
    <div
      className="card grow rounded-[8px] font-normal flex-1"
      style={{ border: "1px solid" + color[type[0].pokemon_v2_type.name] }}
    >
      <div className="flex flex-col items-center">
        <p
          className="self-end mr-[5px]"
          style={{ color: color[type[0].pokemon_v2_type.name] }}
        >
          #{id}
        </p>
        <img
          className="max-w-[75px]"
          alt=""
          src={image.other["official-artwork"]["front_default"]}
        ></img>
      </div>
      <div
        className="rounded-[0_0_8px_8px]"
        style={{ backgroundColor: color[type[0].pokemon_v2_type.name] }}
      >
        <p className="text-center text-[12px] text-white">
          {UpperCaseFirstLetter(name)}
        </p>
      </div>
    </div>
  );
}
