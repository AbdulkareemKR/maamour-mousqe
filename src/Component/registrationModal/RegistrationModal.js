import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
// import authStyle from "./auth.module.scss";
// import { Fade } from "react-awesome-reveal";
import { Button } from "react-bootstrap";
import React, { useState } from "react";

function RegistrationModal(props) {
  const [logIn, setLogIn] = useState(false);

  return (
    <div>
      <Modal
        show={props.showModal}
        onHide={props.handleClose}
        aria-labelledby="contained-modal-title-vcenter"
      >
        {/* <Image
          layout="fill"
          src={"/images/signIn/sign-in-header.svg"}
          alt="abstract green and blue pattern"
        /> */}
        <div className={authStyle["modal-footer"]}>
          <Form
            // validated={validated}
            className={authStyle["main-form"]}
            // onSubmit={handleSubmit}
            noValidate
          >
            <div className={authStyle["text-header"]}>
              <div className={authStyle["nav-container"]}>
                <Button
                  className={
                    logIn ? authStyle["active-tab"] : authStyle["tab-btns"]
                  }
                  // onClick={switchTab}
                  id="signIn"
                >
                  تسجيل الدخول
                </Button>
                <Button
                  className={
                    logIn ? authStyle["active-tab"] : authStyle["tab-btns"]
                  }
                  // onClick={switchTab}
                  id="signUp"
                >
                  حساب جديد
                </Button>
              </div>
            </div>
            <Fade duration="1000">
              <Alert className={authStyle["rules"]} variant="danger">
                <MdWarning className={authStyle["rules-icon"]} size="1.4rem" />
                <div>{validationError.msg}</div>
              </Alert>
            </Fade>
            <Fade duration="1000">
              <Form.Group>
                <Form.Label className={authStyle["labels"]}>
                  اسم المستخدم
                </Form.Label>
                <InputGroup hasValidation>
                  <FormControl
                    onChange={handleUsername}
                    value={username}
                    placeholder="Username"
                    type="text"
                    required
                  />
                </InputGroup>
              </Form.Group>
            </Fade>
            {tab === "signUp" && (
              <Fade duration="1000">
                <Form.Group>
                  <Form.Label className={authStyle["labels"]}>
                    البريد الإلكتروني
                  </Form.Label>
                  <InputGroup hasValidation>
                    <FormControl
                      onChange={handleEmail}
                      value={email}
                      placeholder="Email Address"
                      type="email"
                      required
                      isInvalid={isEmailInvalid}
                    />
                    <FormControl.Feedback
                      style={{ textAlign: "right" }}
                      type="invalid"
                    >
                      الرجاء استخدام بريد إلكتروني صالح
                    </FormControl.Feedback>
                  </InputGroup>
                </Form.Group>
              </Fade>
            )}
            <Fade duration="1000">
              <Form.Group>
                <Form.Label className={authStyle["labels"]}>
                  كلمة المرور
                </Form.Label>
                <InputGroup hasValidation>
                  <FormControl
                    onChange={handlePassword}
                    value={password}
                    placeholder="Password"
                    type={showPwd ? "text" : "password"}
                    required
                  />

                  <InputGroup.Append>
                    <Button
                      className={authStyle["pwd-toggle"]}
                      onClick={handleShowPwd}
                    >
                      {showPwd ? <MdVisibility /> : <MdVisibilityOff />}
                    </Button>
                  </InputGroup.Append>
                </InputGroup>
              </Form.Group>
            </Fade>
            {tab === "signUp" && (
              <Fade duration="1000">
                <Form.Group>
                  <Form.Label className={authStyle["labels"]}>
                    تأكيد كلمة المرور
                  </Form.Label>
                  <InputGroup>
                    <FormControl
                      onChange={handleConfirmPass}
                      value={confirmPass}
                      placeholder="Password Confirm"
                      type={showPwd ? "text" : "password"}
                      required
                      isInvalid={isConfirmPassInvalid}
                    />
                    <InputGroup.Append>
                      <Button
                        className={authStyle["pwd-toggle"]}
                        onClick={handleShowPwd}
                      >
                        {/* {showPwd ? (
                                    <MdVisibility />
                                  ) : (
                                    <MdVisibilityOff />
                                  )} */}
                      </Button>
                    </InputGroup.Append>
                    <FormControl.Feedback
                      style={{ textAlign: "right" }}
                      type="invalid"
                    >
                      الرجاء التاكد من التطابق كلمة المرور
                    </FormControl.Feedback>
                  </InputGroup>
                </Form.Group>
              </Fade>
            )}

            <div className={authStyle["submitContainer"]}>
              {/* {loadingTokenAuth || loadingRegister ? (
                          <Spinner animation="border" role="status" />
                        ) : ( */}
              <Button
                type="submit"
                className={authStyle["login-btn"]}
                // disabled={loadingTokenAuth}
              >
                {logIn ? "تسجيل الدخول" : "إنشاء حساب"}
              </Button>
              {/* )} */}

              <div className={authStyle.redirecter} style={{ fontSize: 12 }}>
                {"نسيت كلمة المرور؟ "}
                <button
                  type="button"
                  // onClick={resetPassMode}
                  className={authStyle.redirectBtn}
                >
                  {"أعد تعيين كلمة المرور"}
                </button>
              </div>
            </div>
          </Form>
        </div>
      </Modal>
      <Button variant="primary">Launch vertically centered modal</Button>
    </div>
  );
}

export default RegistrationModal;
