import { slide as Menu } from "react-burger-menu";
import "./sidebarStyle.css";

import React from "react";
import Header from "./header/Header";

let showSettings = (event) => {
  event.preventdefault();
};

function SidebarBootstrap() {
  return (
    <div id="outer-container">
      <header>
        <Header />
      </header>
      <Menu
        right
        pageWrapId={"page-wrap"}
        outerContainerId={"outer-container"}
      />
      <main id="page-wrap">
        <a id="home" className="menu-item" href="/">
          Home
        </a>
        <a id="about" className="menu-item" href="/about">
          About
        </a>
        <a id="contact" className="menu-item" href="/contact">
          Contact
        </a>
        <a
          onClick={(event) => showSettings(event)}
          className="menu-item--small"
          href=""
        >
          Settings
        </a>
      </main>
    </div>
  );
}

export default SidebarBootstrap;
