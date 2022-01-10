import { slide as Menu } from "react-burger-menu";
import "./sidebarStyle.css";
import React, { useState } from "react";
import RegistrationModal from "../registrationModal/RegistrationModal";
import { FaHome, FaSignInAlt } from "react-icons/fa";
import { TiGroup } from "react-icons/ti";
import { HiSpeakerphone } from "react-icons/hi";
import { MdDateRange } from "react-icons/md";
import { useNavigate } from "react-router-dom";
// import Offcanvas from "react-bootstrap/Offcanvas";
import Button from "react-bootstrap/Button";

function SidebarBootstrap() {
  const [showModal, setModal] = useState(false);
  const [logIn, setLogIn] = useState(true);
  const [page, setPage] = useState("home");
  // const [show, setShow] = useState(false);
  let navigate = useNavigate();

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
    setPage(page);
    navigate(page);
  };

  // const handleCloseSidebar = () => setShow(false);
  // const handleShowSidebar = () => setShow(true);

  return (
    <div id="outer-container">
      {/* <Button variant="primary" onClick={handleShowSidebar}>
        Launch
      </Button>
      <Offcanvas
        placement="end"
        scroll={true}
        show={show}
        onHide={handleCloseSidebar}
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas> */}
      <Menu right pageWrapId={"page-wrap"} outerContainerId={"outer-container"}>
        <main id="page-wrap">
          <Button
            id="/"
            className={`menu-item ${page === "/" ? "acitve" : ""}`}
            onClick={(e) => pageClick(e.target.id)}
          >
            <FaHome className="fa fa-home" />
            <br />
            الرئيسية
          </Button>
          <Button
            id="programs"
            className={`menu-item ${page === "programs" ? "acitve" : ""}`}
            onClick={(e) => pageClick(e.target.id)}
          >
            <TiGroup className="fa fa-users" aria-hidden="true" />
            <br />
            برامجنا
          </Button>
          <Button
            id="about"
            className={`menu-item ${page === "about" ? "acitve" : ""}`}
            onClick={(e) => pageClick(e.target.id)}
          >
            <MdDateRange className="fa" />
            <br />
            حجز القاعات
          </Button>
          <Button
            id="contact"
            className={`menu-item ${page === "contact" ? "acitve" : ""}`}
            onClick={(e) => pageClick(e.target.id)}
          >
            <HiSpeakerphone className="fa fa-phone" aria-hidden="true" />
            <br />
            الإعلانات
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
              <FaSignInAlt className="fa fa-sign-in" aria-hidden="true" />
              <br />
              تسجيل الدخول
            </div>
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
