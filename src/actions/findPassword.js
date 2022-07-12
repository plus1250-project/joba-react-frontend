import { toast } from 'react-toastify';
import axios from 'axios';
import "react-toastify/dist/ReactToastify.css";

export const FINDPW_REQUEST = 'FINDPW_REQUEST';
export const FINDPW_SUCCESS = 'FINDPW_SUCCESS';
export const FINDPW_FAILURE = 'FINDPW_FAILURE';

export function receiveFindPassword() {
    return {
        type: FINDPW_SUCCESS,
    };
}

export function findPasswordError(payload) {
    return {
        type: FINDPW_FAILURE,
        payload,
    };
}

const pattern = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]+$/;
const BASEURL = 'http://localhost:3000/';

export function findPasswordUser(payload) {
    return (dispatch) => {
        if (payload.creds.email.match(pattern) != null ) {
            axios({
                method: "post",
                url: BASEURL + "findpw",
                data: {
                  email: payload.creds.email,
                },
              })
                .then((res) => {
                    // 조건 확인 
                  if (null) {
                    window.alert(res.data.result);
                    toast("메일 발송이 완료되었습니다.");
                  } else {
                    dispatch(findPasswordError("메일 발송에 실패했습니다. 다시 시도해 주세요."));
                    toast("메일 발송에 실패했습니다. 다시 시도해 주세요.");
                    console.log("비밀번호 찾기 메일 발송 백엔드 거부값");
                  }
                })
                .catch((error) => {
                    console.log(error);
                    toast("메일 발송에 실패했습니다. 다시 시도해 주세요.");
                    console.log("비밀번호 찾기 메일 발송 axios 에러");
                  })
            
        } else {
            dispatch(findPasswordError("이메일 형식이 올바르지 않습니다."));
            toast("이메일 형식이 올바르지 않습니다.");
        }

    }
}