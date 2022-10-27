import React from "react";
import { color, UpperCaseFirstLetter } from "../../Utils/utils";

export default function Chip({ type }) {
  return (
    <div
      className="text-white rounded-[18px] flex items-center justify-center px-[12px] text-[0.8125rem] h-[32px]"
      style={{ backgroundColor: color[type] }}
    >
      <span>{UpperCaseFirstLetter(type.toLowerCase())}</span>
    </div>
  );
}
