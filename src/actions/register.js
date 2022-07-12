import axios from 'axios';
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

let confirmEmailBoolean = false;

export function confirmEmail(payload) {
  if (!(payload.target.value.match(pattern) != null)) {
    registerError("이메일 형식이 올바르지 않습니다.");
    toast("이메일 형식이 올바르지 않습니다.");
  } else {
    axios({
      method: "post",
      url: BASEURL + "confirmemail",
      data: {
        email: payload.target.value,
      },
    })
      .then((res) => {
        //조건 확인
        if (null) {
          window.alert(res.data.result);
          toast("사용 가능한 이메일입니다.");

          console.log("사용가능");
          confirmEmailBoolean = true
        } else {
          toast("이미 사용된 이메일입니다. 다른 이메일을 사용해주세요.", {
            autoClose: 5000,
          });
          console.log("중복이메일");
          confirmEmailBoolean = false
        }
      })
      .catch((error) => {
        console.log(error);
        toast("이메일 중복 확인에 실패했습니다. 다시 시도해 주세요.");
        console.log("이메일 중복확인 axios 에러");
        confirmEmailBoolean = false
      })
  };
  return confirmEmailBoolean
}

let checkNicknameBoolean = false;


export function checkNickname(payload) {
  if (!payload.target.value.match(nicknamePattern)) {
    registerError("닉네임 형식이 올바르지 않습니다.");
    toast("닉네임은 공백, 특수문자 제외 2자 이상이어야 합니다.");
    checkNicknameBoolean = false;
  } else {
    checkNicknameBoolean = true;
  }
}

let checkPasswordBoolean = false;
export function checkPassword(payload){
  if (payload.target.value.length < 4) {
    registerError("비밀번호는 4자리 이상이어야 합니다.");
    toast("비밀번호는 4자리 이상이어야 합니다.");
    checkPasswordBoolean = false;
  } else {
    checkPasswordBoolean = true;
  }
}

// let checkConfirmPasswordBoolean = false;
// export function checkConfirmPassword(payload){
//   if (payload.creds.password == payload.creds.confirmPassword) {
//     registerError("비밀번호가 일치하지 않습니다.");
//     toast("비밀번호가 일치하지 않습니다.");
//     checkConfirmPasswordBoolean = false;
//   } else {
//     checkConfirmPasswordBoolean = true;
//   }
// }


const BASEURL = 'http://localhost:3000/';

export function registerUser(payload) {
  return (dispatch) => {
    if (confirmEmailBoolean == true && checkNicknameBoolean == true && checkPasswordBoolean == true && payload.creds.password == payload.creds.confirmPassword) {
      // 여기다 요청 보내면 됨 
      axios({
        method: "post",
        // url 뭐임 
        url: BASEURL+ "signup",
        data: {

          email: payload.creds.email,
          password: payload.creds.password,
          nickname: payload.creds.nickname,
        },
      })
        .then((res) => {
          if (null) {
            window.alert(res.data.result);
          
            toast("가입이 정상적으로 완료되었습니다.");
            payload.history.push('/login');
          } else {
            dispatch(registerError("가입 백앤드 실패값 반환"));
            toast("가입이 실패했습니다. 다시 시도해 주세요.");
            
          }
        })
        .catch((error) => {
          console.log(error);
          dispatch(registerError("가입 axios 에러 catch"));
          toast("가입이 실패했습니다. 다시 시도해 주세요.");
        });


      } else if (confirmEmailBoolean == false) {
        dispatch(registerError("이메일 형식이 올바르지 않거나 중복검사를 통과하지 못했습니다."));
        toast("이메일 형식이 올바르지 않거나 중복검사를 통과하지 못했습니다.");

    } else if ( checkNicknameBoolean == false) {
      dispatch(registerError("닉네임 형식이 올바르지 않습니다."));
      toast("닉네임은 공백, 특수문자 제외 2자 이상이어야 합니다.");

    } else if ( checkPasswordBoolean == false) {
      dispatch(registerError("비밀번호는 4자리 이상이어야 합니다."));
      toast("비밀번호는 4자리 이상이어야 합니다.");

    } else {
      dispatch(registerError("비밀번호가 일치하지 않습니다."));
      toast("비밀번호가 일치하지 않습니다.");
    }
  }
}
