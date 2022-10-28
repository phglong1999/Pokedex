import React from "react";
import { UpperCaseFirstLetter } from "../../../Utils/utils";
import ArrowLeft from "../../Svg/ArrowLeft";

export default function Header({ pokemon }) {
  console.log(pokemon);
  return (
    <div className="flex items-center text-[20px] font-bold">
      <button>
        <ArrowLeft />
      </button>
      <p className="text-white ml-[5px]">
        {UpperCaseFirstLetter(pokemon.name)}
      </p>
      <p className="text-white flex flex-1 justify-end">
        #{pokemon.id.toString().padStart(3, 0)}
      </p>
    </div>
  );
}
