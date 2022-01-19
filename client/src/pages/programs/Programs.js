import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import { Fade } from "react-awesome-reveal";
import styles from "./programs.module.css";
import { MdOutlineMenuBook } from "react-icons/md";
import axios from "axios";
import Spinner from "react-bootstrap/Spinner";

function Programs() {
  const [programs, setPrograms] = useState([]);
  const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   fetch(
  //     "https://sheets.googleapis.com/v4/spreadsheets/1y4HXXDT1x4AymHgF8Ancez9JY3kkTaURaT2cucIA5q0/values/Sheet1!A3:B6?key=AIzaSyAnBt9xAdMMEq6uOjdBP9p0L13jGbbRuDw"
  //   ).then((response) => {
  //     response.json().then(function (data) {
  //       setPrograms(data["values"]);
  //     });
  //   });
  // }, []);

  useEffect(() => {
    axios.get("http://localhost:3001/programs").then((response) => {
      setPrograms(response.data);
      setLoading(false);
    });
  }, []);

  return (
    <div className={styles.cards}>
      {loading ? (
        <div className={styles.loadingWrapper}>
          <Spinner animation="grow" className="spinner1" />
        </div>
      ) : (
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
                    <Card.Header className={styles.header}>
                      {program.name}
                    </Card.Header>
                    <Card.Body>
                      <p className={styles.description}>
                        {program.programDetails}
                      </p>
                      <div className={styles.iconWrapper}>
                        <MdOutlineMenuBook className={styles.icon} />
                      </div>
                    </Card.Body>
                  </Card>
                </Fade>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Programs;
