import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Col, Row, Form } from "react-bootstrap";
import styles from "./registrationModal.module.css";
import { FaIdCard } from "react-icons/fa";
import { BsFillPeopleFill } from "react-icons/bs";
import { HiTag } from "react-icons/hi";
import { MdEmail } from "react-icons/md";
import { AiFillUnlock } from "react-icons/ai";
import Container from "react-bootstrap/Container";
import brownLogo from "../images/brown-logo.png";
import { useState } from "react";
import axios from "axios";
// import { useNavigate } from "react-router-dom";

// import React, { useState } from "react";

function RegistrationModal(props) {
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    password: "",
    userType: "normal",
    educationLevel: "",
  });

  const [confirmPassword, setConfirmPassword] = useState("");
  const [feedback, setFeedback] = useState("");

  // let navigate = useNavigate();

  const register = (data) => {
    if (userInfo.password !== confirmPassword) {
      setFeedback("كلمة السر غير متطابقة");
    }
    axios.post("http://localhost:3001/auth", userInfo).then(() => {
      console.log(data);
    });
  };

  // const login = () => {
  //   // const data = { name: name, password: password };
  //   axios.post("http://localhost:3001/auth/login").then((response) => {
  //     if (response.data.error) {
  //       alert(response.data.error);
  //     } else {
  //       localStorage.setItem("accessToken", response.data.token);
  //       // setAuthState({
  //       //   name: response.data.name,
  //       //   id: response.data.id,
  //       //   status: true,
  //       // });
  //       navigate("/");
  //     }
  //   });
  // };

  return (
    <div>
      <Modal
        show={props.showModal}
        onHide={props.handleClose}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <img
          src={brownLogo}
          alt="شعار بني"
          className={styles.backgroundLogo}
        ></img>
        <div className={styles.containter}>
          <Modal.Header className={styles.title}>
            <Modal.Title
              className={styles.title}
              id="contained-modal-title-vcenter"
            >
              {props.logIn ? "تسجيل الدخول " : " إنشاء حساب "}
              <BsFillPeopleFill className={styles.icons} />
            </Modal.Title>
          </Modal.Header>
          <Container fluid style={{ margin: "auto" }}>
            <Row className={styles.registrationButtons}>
              <Col>
                <Button
                  className={`${styles.createButton} ${
                    props.logIn ? "" : `${styles.createButtonActive}`
                  }`}
                  onClick={props.handleLogOut}
                >
                  إنشاء حساب
                </Button>
              </Col>
              <Col>
                <Button
                  className={`${styles.createButton} ${
                    props.logIn ? `${styles.createButtonActive}` : ""
                  }`}
                  onClick={props.handleLogIn}
                >
                  تسجيل دخول
                </Button>
              </Col>
            </Row>
          </Container>
          <Form className={styles.formStyle}>
            <Container fluid style={{ margin: "auto" }}>
              <Modal.Body className="show-grid">
                {props.logIn ? (
                  ""
                ) : (
                  <Form.Group as={Row} className={styles.group}>
                    <Form.Label className={styles.label} column sm="4">
                      <FaIdCard className={styles.icons} /> الاسم
                    </Form.Label>
                    <Col>
                      <Form.Control
                        onChange={(e) =>
                          setUserInfo({ ...userInfo, name: e.target.value })
                        }
                        required
                        className={styles.input}
                        type="text"
                        placeholder="أدخل اسمك"
                      />
                    </Col>
                  </Form.Group>
                )}
                <Form.Group as={Row} className={styles.group}>
                  <Form.Label className={styles.label} column sm="4">
                    <MdEmail className={styles.icons} /> الايميل
                  </Form.Label>
                  <Col>
                    <Form.Control
                      onChange={(e) =>
                        setUserInfo({ ...userInfo, email: e.target.value })
                      }
                      required
                      className={styles.input}
                      type="email"
                      placeholder="أدخل ايميلك"
                    />
                  </Col>
                </Form.Group>

                <Form.Group as={Row} className={styles.group}>
                  <Form.Label className={styles.label} column sm="4">
                    <AiFillUnlock className={styles.icons} /> كلمة المرور
                  </Form.Label>
                  <Col>
                    <Form.Control
                      onChange={(e) =>
                        setUserInfo({ ...userInfo, password: e.target.value })
                      }
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
                        <AiFillUnlock className={styles.icons} />
                        تأكيد كلمة المرور
                      </Form.Label>
                      <Col>
                        <Form.Control
                          onChange={(e) => setConfirmPassword(e.target.value)}
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
                        <Form.Control
                          as="select"
                          onChange={(e) =>
                            setUserInfo({
                              ...userInfo,
                              educationLevel: e.target.value,
                            })
                          }
                          className={styles.input}
                        >
                          <option>دون الابتدائي</option>
                          <option>ابتدائي</option>
                          <option>متوسط</option>
                          <option>ثانوي</option>
                          <option>جامعة</option>
                          <option>والد/ة</option>
                        </Form.Control>
                      </Col>
                    </Form.Group>
                  </div>
                )}
                <div style={{ color: "red", textAlign: "center" }}>
                  {feedback}
                </div>
                <a className={styles.forget} href={"/"}>
                  هل نسيت كلمة المرور؟
                </a>
              </Modal.Body>
              <Modal.Footer className={styles.footer}>
                {props.logIn ? (
                  <Button
                    // onClick={login}
                    className={`${styles.createButton} ${styles.submit}`}
                    type="submit"
                    // onClick={() => setModalShow(false)}
                  >
                    سجل دخول
                  </Button>
                ) : (
                  <Button
                    onClick={register}
                    className={`${styles.createButton} ${styles.submit}`}
                    type="submit"
                    // onClick={() => setModalShow(false)}
                  >
                    أنشئ الحساب
                  </Button>
                )}
              </Modal.Footer>
            </Container>
          </Form>
        </div>
      </Modal>
    </div>
  );
}

export default RegistrationModal;
