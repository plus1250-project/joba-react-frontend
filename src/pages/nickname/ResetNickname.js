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

import { resetNicknameUser } from "../../actions/resetNickname";
import hasToken from "../../services/authService";

import loginImage from "../../assets/loginImage.svg";
import SofiaLogo from "../../components/Icons/SofiaLogo.js";


const ResetNickname = (props) => {

    const [state, setState] = useState({ nickname :'' })

    const changeCred = (event) => {
        setState({ ...state, [event.target.name]: event.target.value })
    }

    const doResetNickname = (event) => {
        event.preventDefault();
        props.dispatch(resetNicknameUser({
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
                                <p className="auth-header mb-0">닉네임 변경</p>
                                <div className="logo-block">
                                    <SofiaLogo />
                                    <p className="mb-0">JOBA</p>
                                </div>
                            </div>
                            <div className="auth-info my-2">
                                <p>닉네임 변경을 위해 새로운 닉네임을 입력해주세요.<br/>닉네임은 공백, 특수문자 제외 2자 이상이어야 합니다.</p>
                            </div>
                            {/* <form onSubmit={(event) => doLogin(event)}> */}
                            <form onSubmit={(event) => doResetNickname(event)}>
                                <FormGroup className="my-3">
                                    <FormText>nickname</FormText>
                                    <Input
                                        id="nickname"
                                        className="input-transparent pl-3"
                                        value={state.nickname}
                                        onChange={(event) => changeCred(event)}
                                        type="nickname"
                                        required
                                        name="nickname"
                                        placeholder="닉네임 입력"
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


ResetNickname.propTypes = {
    dispatch: PropTypes.func.isRequired,
}

function mapStateToProps(state) {
    return {
        isFetching: state.auth.isFetching,
        isAuthenticated: state.auth.isAuthenticated,
        errorMessage: state.auth.errorMessage,
    };
}

export default withRouter(connect(mapStateToProps)(ResetNickname));
