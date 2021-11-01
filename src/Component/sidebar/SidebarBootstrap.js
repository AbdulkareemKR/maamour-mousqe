import { slide as Menu } from "react-burger-menu";
import "./sidebarStyle.css";
import React, { useState } from "react";
import { Button } from "react-bootstrap";
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
      <Menu right pageWrapId={"page-wrap"} outerContainerId={"outer-container"}>
        <main id="page-wrap">
          <Button id="home" className="menu-item" href="/">
            <i className="fa fa-home"></i>
            <br />
            الرئيسية
          </Button>
          <Button id="program" className="menu-item" href="/program">
            <i className="fa fa-users" aria-hidden="true"></i>
            <br />
            برامجنا
          </Button>
          <Button id="about" className="menu-item" href="/about">
            <i style={{ fontSize: "2.5rem" }} className="fa">
              &#xf128;
            </i>
            <br />
            عن معمور
          </Button>
          <Button id="contact" className="menu-item" href="/contact">
            <i className="fa fa-phone" aria-hidden="true"></i>
            <br />
            تواصل معنا
          </Button>
          <Button onClick={fireModal} id="setting" className="menu-item">
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
          </Button>
        </main>
      </Menu>
      <RegistrationModal
        showModal={showModal}
        logIn={logIn}
        handleClose={handleClose}
        handleLogIn={handleLogIn}
        handleLogOut={handleLogOut}
      />
    </div>
  );
}

export default SidebarBootstrap;
