import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Fade } from "react-awesome-reveal";
import styles from "./programs.module.css";

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
    <div>
      programs
      {programs.map((program, key) => {
        return (
          <div className={styles.cards} key={key}>
            <Fade
              durtion={1200}
              cascade
              damping={0.02}
              triggerOnce // to present each element on itself while moving down
              direction="up"
            >
              <Card className={styles.card}>
                <Card.Header>{program}</Card.Header>
                <Card.Body></Card.Body>
                <Button>More Details</Button>
              </Card>
            </Fade>
          </div>
        );
      })}
    </div>
  );
}

export default Programs;
