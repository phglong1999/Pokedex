import React from "react";
import CardList from "../components/Card/CardList";
import Header from "../components/Header/Home/AppBar/AppBar";
import Search from "../components/Header/Home/Search/Search";

export default function Home() {
  return (
    <div className="bg-[#f7f7f7] rounded-[12px] pt-[24px] pb-0 px-[16px] shadow-[0_8px_16px_4px_rgba(0,0,0,0.25)] m-4">
      <Header />
      <Search />
      <CardList />
    </div>
  );
}
