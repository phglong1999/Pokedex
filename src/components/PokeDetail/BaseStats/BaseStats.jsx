import React from "react";
import { color } from "../../../Utils/utils";

export default function BaseStats({ stats, type }) {
  const data = ["HP", "ATK", "DEF", "SATK", "SDEF", "SPD"];
  return (
    <>
      <p className="font-bold" style={{ color: color[type] }}>
        Base Stats
      </p>
      <div className="flex text-[14px] gap-2 w-[100%]">
        <div className="flex flex-col">
          {data.map((item, index) => (
            <p
              className="font-bold "
              style={{ color: color[type] }}
              key={index}
            >
              {item}
            </p>
          ))}
        </div>
        <div className="border border-[#E0E0E0]"></div>
        <div className="flex flex-col">
          {stats.map((item, index) => (
            <p className="font-thin" key={index}>
              {item.base_stat.toString().padStart(3, 0)}
            </p>
          ))}
        </div>
        <div className="flex grow flex-col">
          {stats.map((item, index) => (
            <div className="h-[100%] p-2 flex" key={index}>
              <div
                className="h-[100%]"
                style={{
                  backgroundColor: color[type],
                  width: (item.base_stat / 150) * 100 + "%",
                }}
              ></div>
              <div
                className="opacity-[0.2] h-[100%]"
                style={{
                  backgroundColor: color[type],
                  width: 100 - (item.base_stat / 150) * 100 + "%",
                }}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
