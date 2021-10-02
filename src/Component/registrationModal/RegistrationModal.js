import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Col, Row, Form } from "react-bootstrap";
import styles from "./registrationModal.module.scss";

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
            أنشئ مجموعة <BsFillPeopleFill className={styles.icons} />
          </Modal.Title>
        </Modal.Header>
        <Form className={styles.formStyle}>
          <Modal.Body className="show-grid">
            <Form.Group as={Row} className={styles.group}>
              <Form.Label className={styles.label} column sm="4">
                <FaIdCard className={styles.icons} /> الاسم
              </Form.Label>
              <Col>
                <Form.Control
                  required
                  className={styles.input}
                  type="text"
                  placeholder="ادخل اسم المجموعة"
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className={styles.group}>
              <Form.Label column sm="4">
                <BsCardImage className={styles.icons} /> صورة العرض
              </Form.Label>
              <Col>
                {/* <input
                  type="file"
                  name="uploadfile"
                  id="img"
                  style={{ display: "none" }}
                />
                <label for="img">Click me to upload image</label> */}
                <Form.Control
                  className={styles.input}
                  type="file"
                  placeholder="اختر صورة العرض"
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className={styles.group}>
              <Form.Label className={styles.label} column sm="4">
                <HiTag className={styles.icons} /> نوع المجموعة
              </Form.Label>
              <Col>
                <Form.Control as="select" className={styles.input}>
                  <option>مواد دراسية</option>
                  <option>أندية طلابية</option>
                  <option>هوايات</option>
                </Form.Control>
              </Col>
            </Form.Group>

            <Form.Group as={Row} className={styles.group}>
              <Form.Label className={styles.label} column sm="4">
                <BsChatDotsFill className={styles.icons} /> المنصة
              </Form.Label>
              <Col>
                <Form.Control as="select" className={styles.input}>
                  <option>WhatsApp</option>
                  <option>Telegram</option>
                  <option>Discord</option>
                </Form.Control>
              </Col>
            </Form.Group>

            <Form.Group as={Row} className={styles.group}>
              <Form.Label className={styles.label} column sm="3">
                <MdDescription className={styles.icons} /> الوصف
              </Form.Label>
              {/* <FloatingLabel label="Comments"> */}
              <Col>
                <Form.Control
                  required
                  className={`${styles.input} ${styles.description}`}
                  as="textarea"
                  placeholder="اكتب وصفًا للمجموعة"
                  style={{ height: "100px" }}
                />
                {/* </FloatingLabel> */}
              </Col>
            </Form.Group>

            <Form.Group as={Row} className={styles.group}>
              <Form.Label className={styles.label} column sm="3">
                <FiLink className={styles.icons} /> الرابط
              </Form.Label>
              <Col>
                <Form.Control
                  required
                  className={`${styles.input} ${styles.link}`}
                  type="text"
                  placeholder="ادخل رابط المجموعة"
                />
              </Col>
            </Form.Group>
          </Modal.Body>
          <Modal.Footer className={styles.footer}>
            <Button
              className={styles.createButton}
              type="submit"
              // onClick={() => setModalShow(false)}
            >
              أنشئ المجموعة
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </div>
  );
}

export default RegistrationModal;
