import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Col, Row, Form } from "react-bootstrap";
import styles from "./registrationModal.module.css";
import { FaIdCard } from "react-icons/fa";
import { BsFillPeopleFill } from "react-icons/bs";
import { HiTag } from "react-icons/hi";

// import React, { useState } from "react";

function RegistrationModal(props) {
  return (
    <div>
      <Modal
        show={props.showModal}
        onHide={props.handleClose}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header className={styles.title}>
          <Modal.Title
            className={styles.title}
            id="contained-modal-title-vcenter"
          >
            تسجيل الدخول <BsFillPeopleFill className={styles.icons} />
          </Modal.Title>
        </Modal.Header>
        <Row className={styles.registrationButtons}>
          <Col>
            <Button
              className={styles.createButton}
              onClick={props.handleLogOut}
            >
              إنشاء حساب
            </Button>
          </Col>
          <Col>
            <Button className={styles.createButton} onClick={props.handleLogIn}>
              تسجيل دخول
            </Button>
          </Col>
        </Row>
        <Form className={styles.formStyle}>
          <Modal.Body className="show-grid">
            <Form.Group as={Row} className={styles.group}>
              <Form.Label className={styles.label} column sm="4">
                <FaIdCard className={styles.icons} /> الايميل
              </Form.Label>
              <Col>
                <Form.Control
                  required
                  className={styles.input}
                  type="text"
                  placeholder="أدخل ايميلك"
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className={styles.group}>
              <Form.Label className={styles.label} column sm="4">
                <FaIdCard className={styles.icons} /> كلمة المرور
              </Form.Label>
              <Col>
                <Form.Control
                  required
                  className={styles.input}
                  type="password"
                  placeholder="أدخل كلمة المرور"
                />
              </Col>
            </Form.Group>

            {props.logIn ? (
              ""
            ) : (
              <div>
                <Form.Group as={Row} className={styles.group}>
                  <Form.Label className={styles.label} column sm="4">
                    <FaIdCard className={styles.icons} />
                    تأكيد كلمة المرور
                  </Form.Label>
                  <Col>
                    <Form.Control
                      required
                      className={styles.input}
                      type="password"
                      placeholder="أعد ادخال كلمة المرور"
                    />
                  </Col>
                </Form.Group>
                <Form.Group as={Row} className={styles.group}>
                  <Form.Label className={styles.label} column sm="4">
                    <HiTag className={styles.icons} /> المرحلة الدراسية
                  </Form.Label>
                  <Col>
                    <Form.Control as="select" className={styles.input}>
                      <option>تمهيدي</option>
                      <option>متوسط</option>
                      <option>ثانوي</option>
                      <option>جامعي</option>
                      <option>أب</option>
                    </Form.Control>
                  </Col>
                </Form.Group>
              </div>
            )}
          </Modal.Body>
          <Modal.Footer className={styles.footer}>
            {props.logIn ? (
              <Button
                className={`${styles.createButton} ${styles.submit}`}
                type="submit"
                // onClick={() => setModalShow(false)}
              >
                سجل دخول
              </Button>
            ) : (
              <Button
                className={`${styles.createButton} ${styles.submit}`}
                type="submit"
                // onClick={() => setModalShow(false)}
              >
                أنشئ الحساب
              </Button>
            )}
          </Modal.Footer>
        </Form>
      </Modal>
    </div>
  );
}

export default RegistrationModal;
