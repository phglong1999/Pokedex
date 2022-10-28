import React from "react";
import { color } from "../../../Utils/utils";
import Weight from "../../Svg/Weight";

export default function About({ moves, types, height, weight }) {
  const ToUpper = (str) => {
    str = str.charAt(0).toUpperCase() + str.slice(1);
    let index = str.indexOf("-");
    return str.replace(str[index + 1], str[index + 1].toUpperCase());
  };
  return (
    <>
      <p className="font-bold" style={{ color: color[types[0].type.name] }}>
        About
      </p>
      <div className="flex items-center">
        <div className="border-r border-[#E0E0E0] flex flex-col items-center px-4">
          <div className="flex items-center gap-1">
            <Weight />
            <p className="text-[10px]">{weight / 10} kg</p>
          </div>
          <p className="text-[8px]">Weight</p>
        </div>
        <div className="border-r border-[#E0E0E0] flex flex-col items-center px-4">
          <div className="flex items-center gap-1">
            <Weight />
            <p className="text-[10px]">{height / 10} m</p>
          </div>
          <p className="text-[8px]">Height</p>
        </div>
        <div className="flex flex-col items-center px-4">
          {moves && moves.length && (
            <>
              <p className="text-[10px] ">{ToUpper(moves[0].move.name)}</p>
              <p className="text-[10px]">{ToUpper(moves[1].move.name)}</p>
            </>
          )}

          <p className="text-[8px]">Moves</p>
        </div>
      </div>
    </>
  );
}
