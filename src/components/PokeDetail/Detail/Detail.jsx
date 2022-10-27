import React from "react";
import { color } from "../../../Utils/utils";
import Chip from "../../Chip/Chip";

export default function Detail({ moves, types, height, weight }) {
  return (
    <div className="bg-white h-[450px] relative mt-[-5rem] px-[20px] pt-[5rem] flex flex-col items-center gap-[16px]">
      <div className="flex justify-center gap-[5px]">
        {types.map((item, index) => (
          <Chip type={item.pokemon_v2_type.name} key={index} />
        ))}
      </div>
      <p
        className="font-bold"
        style={{ color: color[types[0].pokemon_v2_type.name] }}
      >
        About
      </p>
    </div>
  );
}
