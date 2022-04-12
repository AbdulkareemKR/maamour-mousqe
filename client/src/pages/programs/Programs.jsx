import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import { Fade } from "react-awesome-reveal";
import styles from "./programs.module.css";
import { MdOutlineMenuBook } from "react-icons/md";

// import quran from "../../Component/images/quran.jpeg";
function Programs() {
  const [programs, setPrograms] = useState([]);
  const [loading, setLoading] = useState(true);

  return (
    <div className={styles.cards}>
      <Fade
        durtion={1200}
        cascade
        damping={0.02}
        triggerOnce // to present each element on itself while moving down
        direction="up"
      >
        <Card className={styles.card}>
          <Card.Header className={styles.header}>أشبال معمور</Card.Header>
          <Card.Body>
            <p className={styles.description}>
              برنامج من اجل تحفيظ القران الكريم عن طريق المصحف المعلم والمحفظ
              بالتكرار بدون نت موجه لجميع الفئات العمرية لحفظ تعليم وقراءة
              المصحف الشريف برواية ورش عن نافع والتمكن من حفظه بطريقة سهلة
              وميسرة
            </p>
            <div className={styles.iconWrapper}>
              <MdOutlineMenuBook
                style={{ margin: 0, padding: 0 }}
                className={styles.icon}
              />
            </div>
          </Card.Body>
        </Card>
        <Card className={styles.card}>
          <Card.Header className={styles.header}>الحديث النبوي </Card.Header>
          <Card.Body>
            <p className={styles.description}>
              برنامج من اجل تحفيظ القران الكريم عن طريق المصحف المعلم والمحفظ
              بالتكرار بدون نت موجه لجميع الفئات العمرية لحفظ تعليم وقراءة
              المصحف الشريف برواية ورش عن نافع والتمكن من حفظه بطريقة سهلة
              وميسرة
            </p>
            <div className={styles.iconWrapper}>
              <MdOutlineMenuBook
                style={{ margin: 0, padding: 0 }}
                className={styles.icon}
              />
            </div>
          </Card.Body>
        </Card>
        <Card className={styles.card}>
          <Card.Header className={styles.header}>مبادرة معمور</Card.Header>
          <Card.Body>
            <p className={styles.description}>
              برنامج من اجل تحفيظ القران الكريم عن طريق المصحف المعلم والمحفظ
              بالتكرار بدون نت موجه لجميع الفئات العمرية لحفظ تعليم وقراءة
              المصحف الشريف برواية ورش عن نافع والتمكن من حفظه بطريقة سهلة
              وميسرة
            </p>
            <div className={styles.iconWrapper}>
              <MdOutlineMenuBook
                style={{ margin: 0, padding: 0 }}
                className={styles.icon}
              />
            </div>
          </Card.Body>
        </Card>
        <a href="/iftar">
        <Card className={styles.card}>
          <Card.Header className={styles.header}>الإفطار الجماعي</Card.Header>
          <Card.Body>
            <p className={styles.description}>
         برنامج إفطار لأهل الحي في مسجود معمور
            </p>
            <div className={styles.iconWrapper}>
              <MdOutlineMenuBook
                style={{ margin: 0, padding: 0 }}
                className={styles.icon}
              />
            </div>
          </Card.Body>
          </Card>
          </a>
      </Fade>
    </div>
  );
}

export default Programs;
