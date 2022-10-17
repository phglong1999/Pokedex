import React from "react";
import "./Search.scss";
import SearchIcon from "@mui/icons-material/Search";

export default function Search() {
  return (
    <div className="search">
      <input placeholder="Search"></input>
      <SearchIcon className="search_icon" />
    </div>
  );
}
