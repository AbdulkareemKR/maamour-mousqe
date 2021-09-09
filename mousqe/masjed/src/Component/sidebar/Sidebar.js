import React from "react";
import styles from "./Sidebar.module.css";

function Sidebar() {
  return (
    <div className="sidebarPageContainer">
      <ul className={styles.sidebar}>
        <li>
          <a href="#">الخدمات</a>
        </li>

        <li>
          <a href="#">الشراكات</a>
        </li>

        <li>
          <a href="#">المحادثة</a>
        </li>
        <li>
          <a href="#">عن مسجد معمور</a>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
