import React from "react";
// import logo from "./logo.png";
import styles from "./Style.module.css";
import Registration from "./Registration";
import backgroundLogo from "../images/background.png";
import mousqeLogo from "../images/mousqeLogo.jpg";

function RegistrationPage() {
  return (
    <div className="body">
      <img
        src={backgroundLogo}
        alt="backgroundLogo"
        className={styles.backgroundLogo}
      ></img>
      <img src={mousqeLogo} alt="logo.png" className={styles.logo}></img>
      <h2 className={styles.registrationLabel} style={{ textAlign: "center" }}>
        مسجد معمور
      </h2>
      <Registration />
    </div>
  );
}

export default RegistrationPage;
