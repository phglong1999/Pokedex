import React from "react";
import { color } from "../../../Utils/utils";

export default function BaseStats({ stats, type }) {
  console.log(stats);
  const renderStats = () => {};
  return (
    <>
      <p className="font-bold" style={{ color: color[type] }}>
        Base Stats
      </p>
      <div className="flex">
        <div className="flex flex-col border-r border-[#E0E0E0]">
          <p className="font-bold text-[14px]" style={{ color: color[type] }}>
            HP
          </p>
          <p className="font-bold text-[12px]" style={{ color: color[type] }}>
            ATK
          </p>
          <p className="font-bold text-[12px]" style={{ color: color[type] }}>
            DEF
          </p>
          <p className="font-bold text-[12px]" style={{ color: color[type] }}>
            SATK
          </p>
          <p className="font-bold text-[12px]" style={{ color: color[type] }}>
            SDEF
          </p>
          <p className="font-bold text-[12px]" style={{ color: color[type] }}>
            SPD
          </p>
        </div>
        <div className="flex flex-col"></div>
      </div>
    </>
  );
}
