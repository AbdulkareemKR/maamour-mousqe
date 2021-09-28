import { slide as Menu } from "react-burger-menu";
import "./sidebarStyle.css";
import React, { useState } from "react";
import Header from "../header/Header";
import RegistrationModal from "../registrationModal/RegistrationModal";

function SidebarBootstrap() {
  const [showModal, setModal] = useState(false);
  const [logIn, setLogIn] = useState(false);

  const fireModal = () => {
    console.log("Modal launched!");
    setModal(true);
  };
  const handleClose = () => {
    setModal(false);
  };
  const handleLogIn = () => {
    setLogIn(true);
  };
  const handleLogOut = () => {
    setLogIn(false);
  };

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
          <a onClick={fireModal} id="setting" className="menu-item">
            {logIn ? (
              <div
              // onClick={handleLogIn}
              >
                <i className="fa fa-cog" aria-hidden="true"></i>
                <br />
                إعدادات الحساب
              </div>
            ) : (
              <div>
                <i className="fa fa-sign-in" aria-hidden="true"></i>
                <br />
                تسجيل الدخول
              </div>
            )}
          </a>
        </main>
      </Menu>
      <RegistrationModal showModal={showModal} handleClose={handleClose} />
    </div>
  );
}

export default SidebarBootstrap;
