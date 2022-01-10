import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import { Fade } from "react-awesome-reveal";
import styles from "./programs.module.css";
import { MdOutlineMenuBook } from "react-icons/md";

function Programs() {
  const [programs, setPrograms] = useState([]);

  useEffect(() => {
    fetch(
      "https://sheets.googleapis.com/v4/spreadsheets/1y4HXXDT1x4AymHgF8Ancez9JY3kkTaURaT2cucIA5q0/values/Sheet1!A3:B6?key=AIzaSyAnBt9xAdMMEq6uOjdBP9p0L13jGbbRuDw"
    ).then((response) => {
      response.json().then(function (data) {
        setPrograms(data["values"]);
      });
    });
  }, []);
  return (
    <div className={styles.cards}>
      {programs.map((program, key) => {
        return (
          <div key={key}>
            <Fade
              durtion={1200}
              cascade
              damping={0.02}
              triggerOnce // to present each element on itself while moving down
              direction="up"
            >
              <Card className={styles.card}>
                <Card.Header className={styles.header}>{program}</Card.Header>
                <Card.Body>
                  <div className={styles.iconWrapper}>
                    <MdOutlineMenuBook className={styles.icon} />
                  </div>
                </Card.Body>
                <button className={styles.cardButton}>More Details</button>
              </Card>
            </Fade>
          </div>
        );
      })}
    </div>
  );
}

export default Programs;
