import { slide as Menu } from "react-burger-menu";
import "./sidebarStyle.css";

import React from "react";
import Header from "./header/Header";

function SidebarBootstrap() {
  return (
    <div id="outer-container">
      <header>
        <Header />
      </header>
      <Menu right pageWrapId={"page-wrap"} outerContainerId={"outer-container"}>
        <main id="page-wrap">
          <a id="home" className="menu-item" href="/">
            <i style={{ fontSize: "2rem" }} className="fa fa-home"></i>
            <br />
            الرئيسية
          </a>
          <a id="program" className="menu-item" href="/program">
            <i
              style={{ fontSize: "2rem" }}
              className="fa fa-users"
              aria-hidden="true"
            ></i>
            <br />
            برامجنا
          </a>
          <a id="about" className="menu-item" href="/about">
            <i style={{ fontSize: "2.5rem" }} className="fa">
              &#xf128;
            </i>
            <br />
            عن معمور
          </a>
          <a id="contact" className="menu-item" href="/contact">
            <i
              style={{ fontSize: "2rem" }}
              className="fa fa-phone"
              aria-hidden="true"
            ></i>
            <br />
            تواصل معنا
          </a>
          <a id="setting" className="menu-item" href="/setting">
            <i
              style={{ fontSize: "2rem" }}
              className="fa fa-cog"
              aria-hidden="true"
            ></i>
            <br />
            الإعدادات
          </a>
        </main>
      </Menu>
    </div>
  );
}

export default SidebarBootstrap;
