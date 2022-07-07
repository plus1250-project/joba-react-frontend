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

import { resetPasswordUser } from "../../actions/resetPassword.js";
import hasToken from "../../services/authService";

import loginImage from "../../assets/loginImage.svg";
import SofiaLogo from "../../components/Icons/SofiaLogo.js";


const ResetPassword = (props) => {

    const [state, setState] = useState({ password: '', confirmPassword: '' })

    const changeCred = (event) => {
        setState({ ...state, [event.target.name]: event.target.value })
    }

    const doResetPassword = (event) => {
        event.preventDefault();
        props.dispatch(resetPasswordUser({
            creds: state,
            history: props.history,
        }))
    }

    const { from } = props.location.state || { from: { pathname: '/template' } }

// 로그인 못하면 못들어옴
    if (!hasToken(JSON.parse(localStorage.getItem('authenticated')))) {
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
                                <p className="auth-header mb-0">비밀번호 변경</p>
                                <div className="logo-block">
                                    <SofiaLogo />
                                    <p className="mb-0">JOBA</p>
                                </div>
                            </div>
                            <div className="auth-info my-2">
                                <p>비밀번호 변경을 위해 새로운 비밀번호를 입력해주세요. </p>
                            </div>
                            {/* <form onSubmit={(event) => doLogin(event)}> */}
                            <form onSubmit={(event) => doResetPassword(event)}>
                                <FormGroup className="my-3">
                                    <FormText>password</FormText>
                                    <Input
                                        id="password"
                                        className="input-transparent pl-3"
                                        value={state.password}
                                        onChange={(event) => changeCred(event)}
                                        type="password"
                                        required
                                        name="password"
                                        placeholder="비밀번호는 4자 이상이어야 합니다."
                                    />
                                </FormGroup>
                                <FormGroup className="my-3">
                                    <FormText>confirm password</FormText>
                                    <Input
                                        id="confirmPassword"
                                        className="input-transparent pl-3"
                                        value={state.confirmPassword}
                                        onChange={(event) => changeCred(event)}
                                        type="password"
                                        required
                                        name="confirmPassword"
                                        placeholder="비밀번호를 한 번 더 입력해주세요."
                                    />
                                </FormGroup>
                                <div className="bg-widget d-flex justify-content-center">
                                    <Button className="rounded-pill my-3" type="submit" color="secondary-red">확인</Button>
                                </div>
                                <p className="dividing-line my-3">&#8195;Or&#8195;</p>
                                <div className="bg-widget d-flex justify-content-center">
                                    <Link to="/template">
                                        이전 화면으로 돌아가기
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


ResetPassword.propTypes = {
    dispatch: PropTypes.func.isRequired,
}

function mapStateToProps(state) {
    return {
        isFetching: state.auth.isFetching,
        isAuthenticated: state.auth.isAuthenticated,
        errorMessage: state.auth.errorMessage,
    };
}

export default withRouter(connect(mapStateToProps)(ResetPassword));
