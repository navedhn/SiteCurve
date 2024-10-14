import React from "react";

// assets
import "./Header.scss";
import Stats from "./Components/Stats";

// Components
import TopBar from "./Components/Topbar";

const Header = () => {
  return (
    <header id="header-desktop">
      <TopBar />
      <Stats />
    </header>
  );
};

export default Header;
