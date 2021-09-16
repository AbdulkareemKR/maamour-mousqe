import { slide as Menu } from "react-burger-menu";
import "./sidebarStyle.css";
import React, { useState, useEffect, useCallback } from "react";
import Header from "./header/Header";
import RegistrationModal from "./registration/RegistrationModal";
import { Button } from "react-bootstrap";

function SidebarBootstrap() {
  const [registration, setRegistration] = useState(true);
  const [logIn, setLogIn] = useState(false);
  let modal = <RegistrationModal registration={true} setRegistration={false} />;

  const handleInputChange = useCallback(
    (event) => {
      setLogIn(event.target.value);
    },
    [setLogIn]
  );

  return (
    <div id="outer-container">
      <header>
        <Header />
      </header>
      <Menu right pageWrapId={"page-wrap"} outerContainerId={"outer-container"}>
        <main id="page-wrap">
          <a id="home" className="menu-item" href="/">
            <i className="fa fa-home"></i>
            <br />
            الرئيسية
          </a>
          <a id="program" className="menu-item" href="/program">
            <i className="fa fa-users" aria-hidden="true"></i>
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
            <i className="fa fa-phone" aria-hidden="true"></i>
            <br />
            تواصل معنا
          </a>
          <a id="setting" className="menu-item">
            {registration ? (
              <div
                onClick={() => {
                  setLogIn(true);
                }}
              >
                <i className="fa fa-sign-in" aria-hidden="true"></i>
                <br />
                تسجيل الدخول
              </div>
            ) : (
              <div>
                <i className="fa fa-cog" aria-hidden="true"></i>
                <br />
                إعدادات الحساب
              </div>
            )}
          </a>
        </main>
      </Menu>
      {logIn ? modal : ""}
    </div>
  );
}

export default SidebarBootstrap;
