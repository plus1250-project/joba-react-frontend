import React, { useState } from "react";
import PropTypes from "prop-types";
import { withRouter, Redirect, Link } from "react-router-dom";
import { connect } from "react-redux";
import {
  Container,
  Row,
  Col,
  Button,
  FormGroup,
  FormText,
  Input,
} from "reactstrap";
import Widget from "../../components/Widget/Widget";
import Footer from "../../components/Footer/Footer";
import { loginUser } from "../../actions/auth";
import hasToken from "../../services/authService";

import loginImage from "../../assets/loginImage.svg";
import SofiaLogo from "../../components/Icons/SofiaLogo.js";


const FindPassword = (props) => {

  

  return (
    <div className="auth-page">
      <Container className="col-12">
        <Row className="d-flex align-items-center">
          <Col xs={12} lg={6} className="left-column">
            <Widget className="widget-auth widget-p-lg">
              <div className="d-flex align-items-center justify-content-between py-3">
                <p className="auth-header mb-0">비밀번호 찾기</p>
                <div className="logo-block">
                  <SofiaLogo />
                  <p className="mb-0">JOBA</p>
                </div>
              </div>
              <div className="auth-info my-2">
                <p>비밀번호 변경을 위해 인증번호를 <b>가입하셨던 이메일</b>로 보내드립니다! </p>
                <p>가입 시 입력했던 이메일을 입력해주세요.</p>
              </div>
              {/* <form onSubmit={(event) => doLogin(event)}> */}
              <form onSubmit={(event) => (event)}>
                <FormGroup className="my-3">
                  <FormText>Email</FormText>
                  <Input
                    id="email"
                    className="input-transparent pl-3"
                    // value={state.email}
                    // onChange={(event) => changeCreds(event)}
                    onChange={(event) => (event)}
                    type="email"
                    required
                    name="email"
                    placeholder="Email"
                  />
                </FormGroup>
        
                <div className="bg-widget d-flex justify-content-center">
                  <Button className="rounded-pill my-3" type="submit" color="secondary-red">전송</Button>
                </div>
                <p className="dividing-line my-3">&#8195;Or&#8195;</p>
                <div className="bg-widget d-flex justify-content-center">
                {/* <Link  to="/register">
                  <Button className="rounded-pill my-3" type="button"
                    color="secondary-red">회원가입</Button>
                </Link> */}
                <Link  to="/register">
                계정이 없으신가요? 여기서 회원가입하세요.
                </Link>
                </div>
              </form>
            </Widget>
          </Col>
          <Col xs={0} lg={6} className="right-column">
            <div>
              <img src={loginImage} alt="Error page" />
            </div>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  )
}


// Login.propTypes = {
//   dispatch: PropTypes.func.isRequired,
// }

function mapStateToProps(state) {
  return {
    isFetching: state.auth.isFetching,
    isAuthenticated: state.auth.isAuthenticated,
    errorMessage: state.auth.errorMessage,
  };
}

export default withRouter(connect(mapStateToProps)(FindPassword));
