import { Helmet } from "react-helmet";
import React, { useState } from "react";
import HeaderBlock from "./HeaderBlock/HeaderBlock";
import MenuPrimary from "../../Assets/Layouts/Menu/MenuPrimary/MenuPrimary";
import HeaderPrimary from "../../Assets/Layouts/Headers/HeaderPrimary/HeaderPrimary";

function Home() {
  const style = {
    position: "relative",
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div style={style} className="home">
      <Helmet>
        <meta charset="utf-8" />
        <title>Electric Cars, Solar &amp; Clean Energy | Tesla</title>
      </Helmet>
      <HeaderPrimary isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      {isMenuOpen && <MenuPrimary />}
      <HeaderBlock />
    </div>
  );
}

export default Home;
