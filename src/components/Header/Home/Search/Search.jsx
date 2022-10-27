import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";

export default function Search() {
  const [searchValue, setSearchValue] = useState("");
  const onChangeHandler = (e) => {
    setSearchValue(e.target.value);
  };
  return (
    <div className="group focus:text-blue-300 relative">
      <input
        className="focus:border-blue-300 focus:shadow-[0_0_8px_0] focus:shadow-blue-300 rounded-md my-[8px] border-[2px] border-[#aaa] border-solid w-[100%] py-[8px] pl-[34px] pr-[8px] outline-none "
        placeholder="Search"
        value={searchValue}
        onChange={onChangeHandler}
      ></input>
      <SearchIcon className="group-focus-within:text-blue-300 text-[#aaa] absolute translate-y-[-50%] translate-x-0 left-[5px] top-1/2" />
    </div>
  );
}
