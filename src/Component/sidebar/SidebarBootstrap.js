import { slide as Menu } from "react-burger-menu";
import "./sidebarStyle.css";
import React, { useState } from "react";
import { Button } from "react-bootstrap";
import RegistrationModal from "../registrationModal/RegistrationModal";
import { FaHome, FaQuestion } from "react-icons/fa";

function SidebarBootstrap() {
  const [showModal, setModal] = useState(false);
  const [logIn, setLogIn] = useState(true);
  const [page, setPage] = useState("home");

  const fireModal = () => {
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

  const pageClick = (page) => {
    console.log(page);
    setPage(page);
  };

  return (
    <div id="outer-container">
      <Menu right pageWrapId={"page-wrap"} outerContainerId={"outer-container"}>
        <main id="page-wrap">
          <Button
            id="home"
            className={`menu-item ${page === "home" ? "acitve" : ""}`}
            href="/"
            onClick={(e) => pageClick(e.target.id)}
          >
            <FaHome className="fa fa-home" />
            <br />
            الرئيسية
          </Button>
          <Button
            id="program"
            className={`menu-item ${page === "program" ? "acitve" : ""}`}
            // href="/program"
            onClick={(e) => pageClick(e.target.id)}
          >
            <i className="fa fa-users" aria-hidden="true"></i>
            <br />
            برامجنا
          </Button>
          <Button
            id="about"
            className={`menu-item ${page === "about" ? "acitve" : ""}`}
            // href="/about"
            onClick={(e) => pageClick(e.target.id)}
          >
            <FaQuestion style={{ fontSize: "2.5rem" }} className="fa" />
            <br />
            عن معمور
          </Button>
          <Button
            id="contact"
            className={`menu-item ${page === "contact" ? "acitve" : ""}`}
            // href="/contact"
            onClick={(e) => pageClick(e.target.id)}
          >
            <i className="fa fa-phone" aria-hidden="true"></i>
            <br />
            تواصل معنا
          </Button>
          <Button
            id="setting"
            className={`menu-item ${page === "setting" ? "acitve" : ""}`}
            onClick={fireModal}
          >
            {/* {logIn ? (
              <div
              // onClick={handleLogIn}
              >
                <i className="fa fa-cog" aria-hidden="true"></i>
                <br />
                إعدادات الحساب
              </div>
            ) : ( */}
            <div>
              <i className="fa fa-sign-in" aria-hidden="true"></i>
              <br />
              تسجيل الدخول
            </div>
            {/* )} */}
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
