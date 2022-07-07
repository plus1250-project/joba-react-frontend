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

// 여기다 백앤드 요청 추가하기
// 이메일 중복도 추가해야 함 
export function registerUser(payload) {
  return (dispatch) => {
    if (payload.creds.email.length > 0 && payload.creds.password.length >= 4 && payload.creds.password == payload.creds.confirmPassword) {
      toast("가입이 정상적으로 완료되었습니다.", {
        autoClose: 3000,
      });
      payload.history.push('/login');
    } else if (payload.creds.password.length < 4) {
      dispatch(registerError("비밀번호는 4자리 이상이어야 합니다."));
      toast("비밀번호는 4자리 이상이어야 합니다.",
        {
          autoClose: 3000,
          // position:toast.POSITION.TOP_LEFT,

          
        });
    } else {
      dispatch(registerError("비밀번호가 일치하지 않습니다."));
      toast("비밀번호가 일치하지 않습니다.");
    }
  }
}
