import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

export const REGISTER_REQUEST = 'REGISTER_REQUEST';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAILURE = 'REGISTER_FAILURE';

export function receiveRegister() {
  return {
    type: REGISTER_SUCCESS,
  };
}

export function registerError(payload) {
  return {
    type: REGISTER_FAILURE,
    payload,
  };
}

const pattern = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]+$/;
const nicknamePattern = RegExp("^[가-힣ㄱ-ㅎa-zA-Z0-9._-]{2,}\$")




export function registerUser(payload) {
  return (dispatch) => {
    if (payload.creds.email.match(pattern) != null && payload.creds.password.length >= 4 && payload.creds.password == payload.creds.confirmPassword && payload.creds.nickname.match(nicknamePattern) ) {
      // 여기다 요청 보내면 됨 
      toast("가입이 정상적으로 완료되었습니다.", {
        autoClose: 3000,
      });
      payload.history.push('/login');
    }  else if (!(payload.creds.email.match(pattern) != null)) {
      dispatch(registerError("이메일 형식이 올바르지 않습니다."));
      toast("이메일 형식이 올바르지 않습니다.");

    }  else if (! payload.creds.nickname.match(nicknamePattern)) {
      dispatch(registerError("닉네임 형식이 올바르지 않습니다."));
      toast("닉네임은 공백, 특수문자 제외 2자 이상이어야 합니다.");

    }else if (payload.creds.password.length < 4) {
      dispatch(registerError("비밀번호는 4자리 이상이어야 합니다."));
      toast("비밀번호는 4자리 이상이어야 합니다.");

    } else {
      dispatch(registerError("비밀번호가 일치하지 않습니다."));
      toast("비밀번호가 일치하지 않습니다.");
    }
  }
}
