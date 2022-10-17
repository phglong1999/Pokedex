import React from "react";
import Header from "../components/Header/AppBar/AppBar";
import Search from "../components/Header/Search/Search";
import "./Home.scss";

export default function Home() {
  return (
    <div className="home">
      <Header />
      <Search />
    </div>
  );
}
