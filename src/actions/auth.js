import { toast } from 'react-toastify';
import axios from 'axios';

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOGOUT_REQUEST = 'LOGOUT_REQUEST';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';

export function receiveLogin() {
  return {
    type: LOGIN_SUCCESS
  };
}

function loginError(payload) {
  return {
    type: LOGIN_FAILURE,
    payload,
  };
}

function requestLogout() {
  return {
    type: LOGOUT_REQUEST,
  };
}

export function receiveLogout() {
  return {
    type: LOGOUT_SUCCESS,
  };
}

// logs the user out
export function logoutUser() {
  return (dispatch) => {
    dispatch(requestLogout());
    localStorage.removeItem('authenticated');
    localStorage.removeItem('bearerToken');
    dispatch(receiveLogout());
  };
}

const pattern = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]+$/;
const pwPattern1 = /[0-9]/;	
const pwPattern2 = /[a-zA-Z]/;
const pwPattern3 = /[~!@#$%^&*()_+|<>?:{}]/;

const BASEURL = 'http://localhost:3000/';

// 여기서 로그인 요청 보내기
export function loginUser(creds) {
  console.log("이메일& 비밀번호 ", creds.email, " | ", creds.password);
  return (dispatch) => {
    dispatch(receiveLogin());
    // 여기에 요청 보내고 성공 실패 나누기 
    if (creds.email.match(pattern)!=null && creds.password.length >= 4 && creds.password.match(pwPattern1) || creds.password.match(pwPattern2) || creds.password.match(pwPattern3)) {
      axios.post(BASEURL+"login", null, {params :{
            username: creds.email,
            password: creds.password,
      }})
      .then((res) => {
        console.log(res.status);
        if(res.status === 202) {
          localStorage.setItem('bearerToken', res.data.accessToken)
          localStorage.setItem('authenticated', true)
          document.location.href = "/it";
        }
        console.log(res.data.accessToken);
      })
      .catch((error) => {
        console.log(error);
      });

    } else if (!(creds.email.match(pattern) != null) ) {
      dispatch(loginError("이메일 형식이 올바르지 않습니다."));
      toast("이메일 형식이 올바르지 않습니다.");
    } else {
      dispatch(loginError('비밀번호는 문자, 숫자만 허용하여 4자 이상입니다.'));
      toast('비밀번호는 문자, 숫자만 허용하여 4자 이상입니다.');
    }
  }
}

