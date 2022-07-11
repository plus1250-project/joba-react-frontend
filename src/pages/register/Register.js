import PropTypes from "prop-types";
import { useState } from "react";
import { connect } from "react-redux";
import { Link, Redirect, withRouter } from "react-router-dom";
import {
  Button, Col, Container, FormGroup,
  FormText,
  Input, Row
} from "reactstrap";
import Footer from "../../components/Footer/Footer.js";
import Widget from "../../components/Widget/Widget.js";

import { registerUser } from "../../actions/register.js";
import loginImage from "../../assets/registerImage.svg";
import SofiaLogo from "../../components/Icons/SofiaLogo.js";
import hasToken from "../../services/authService";

const Register = (props) => {

  const [state, setState] = useState({ email: '' , nickname:'', password: '', confirmPassword: '' })

  const changeCred = (event) => {
    setState({ ...state, [event.target.name]: event.target.value })
  }

  const emailChangeCred = (event) => {
    console.log(event.target.value);
  }


  const doRegister = (event) => {
    event.preventDefault();
    props.dispatch(registerUser({
      creds: state,
      history: props.history,
    }))
  }

  const { from } = props.location.state || { from: { pathname: '/template' } }

  if (hasToken(JSON.parse(localStorage.getItem('authenticated')))) {
    return (
      <Redirect to={from} />
    );
  }

  return (
    <div className="auth-page">
      <Container className="col-12">
        <Row className="d-flex align-items-center">
          <Col xs={12} lg={6} className="left-column">
            <Widget className="widget-auth widget-p-lg">
              <div className="d-flex align-items-center justify-content-between py-3">
                <p className="auth-header mb-0">회원가입</p>
                <div className="logo-block">
                  <SofiaLogo />
                  <p className="mb-0">JOBA</p>
                </div>
              </div>
              <div className="auth-info my-2">
                <p>서비스 이용을 위해 회원가입해주세요!</p>
              </div>
              <form onSubmit={(event => doRegister(event))}>
                <FormGroup className="my-3">
                  {/* 이메일 입력 */}
                  <FormText>Email</FormText>
                  <Input
                    id="email"
                    className="input-transparent pl-3"
                    value={state.email}
                    onChange={(event) => changeCred(event)}
                    onFocusout = {(event)=>emailChangeCred(event) }
                    required
                    name="email"
                    placeholder="이메일을 입력해주세요"
                  />
                </FormGroup>
                <FormGroup className="my-3">
                  {/* 닉네임 입력 */}
                  <FormText>Nickname</FormText>
                  <Input
                    id="nickname"
                    className="input-transparent pl-3"
                    value={state.nickname}
                    onChange={(event) => changeCred(event)}
                    required
                    name="nickname"
                    placeholder="닉네임을 입력해주세요"
                  />
                </FormGroup>
                
                {/* 비밀번호 입력 */}
                <FormGroup className="my-3">
                  <div className="d-flex justify-content-between">
                    <FormText>Password</FormText>
                  </div>
                  <Input
                    id="password"
                    className="input-transparent pl-3"
                    value={state.password}
                    onChange={(event => changeCred(event))}
                    type="password"
                    required
                    name="password"
                    placeholder="비밀번호는 4자 이상이어야 합니다."
                  />
                </FormGroup>
                <FormGroup className="my-3">
                  <div className="d-flex justify-content-between">
                    <FormText>Confirm password</FormText>
                    {/* <Link to="/error">Forgot password?</Link> */}
                  </div>
                  <Input
                    id="confirmPassword"
                    className="input-transparent pl-3"
                    value={state.confirmPassword}
                    onChange={(event => changeCred(event))}
                    type="password"
                    required
                    name="confirmPassword"
                    placeholder="비밀번호를 한번 더 입력해주세요"
                  />
                </FormGroup>
                <div className="bg-widget d-flex justify-content-center">
                  <Button className="rounded-pill my-3" type="submit" color="secondary-red">회원가입</Button>
                </div>
                <p className="dividing-line my-3">&#8195;Or&#8195;</p>
              </form>

              <div className="bg-widget d-flex justify-content-center">
                <Link  to="/login">
                계정이 있으신가요?
                </Link>

                </div>
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

Register.propTypes = {
  dispatch: PropTypes.func.isRequired,
}

function mapStateToProps(state) {
  return {
    isFetching: state.auth.isFetching,
    isAuthenticated: state.auth.isAuthenticated,
    errorMessage: state.auth.errorMessage,
  };
}

export default withRouter(connect(mapStateToProps)(Register));
