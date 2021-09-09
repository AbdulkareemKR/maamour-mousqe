import { Button, Form, Col, Row } from "react-bootstrap";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./Style.module.css";

function SignIn() {
  return (
    <Form style={{ width: "80%", margin: "auto" }}>
      <h2 className={styles.registrationLabel} style={{ textAlign: "center" }}>
        !مرحبا بعودتك
      </h2>
      <Form.Group as={Row} controlId="formPlaintextPassword">
        <Col xs="11" style={{ paddingRight: "0" }}>
          <Form.Control
            className={styles.arabic}
            type="email"
            placeholder="أدخل الإيميل"
            required
          ></Form.Control>
        </Col>
        <Form.Label
          style={{ padding: "0", margin: "0" }}
          column
          xs="1"
          className={styles.registrationLabel}
        >
          <h5 style={{ fontWeight: "bold" }}>@</h5>
        </Form.Label>
      </Form.Group>
      <Form.Group as={Row} controlId="formPlaintextPassword">
        <Col xs="11" style={{ paddingRight: "0" }}>
          <Form.Control
            className={styles.arabic}
            type="password"
            placeholder="أدخل الرقم السري"
            required
          ></Form.Control>
        </Col>
        <Form.Label
          column
          xs="1"
          className={styles.registrationLabel}
          style={{ padding: "0px" }}
        >
          <h5>
            <i className="fas fa-unlock-alt" />
          </h5>
        </Form.Label>
      </Form.Group>
      <Button className={styles.submitBtn} type="submit" block>
        تسجيل الدخول
      </Button>
    </Form>
  );
}

export default SignIn;
