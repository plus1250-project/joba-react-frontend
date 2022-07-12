import { toast } from 'react-toastify';
import axios from 'axios';
import "react-toastify/dist/ReactToastify.css";

export const RESETPW_REQUEST = 'RESETPW_REQUEST';
export const RESETPW_SUCCESS = 'RESETPW_SUCCESS';
export const RESETPW_FAILURE = 'RESETPW_FAILURE';

export function receiveResetPassword() {
    return {
        type: RESETPW_SUCCESS,
    };
}

export function resetPasswordError(payload) {
    return {
        type: RESETPW_FAILURE,
        payload,
    };
}

const BASEURL = 'http://localhost:3000/';

export function resetPasswordUser(payload) {
    return (dispatch) => {
        if (payload.creds.password.length >= 4 && payload.creds.password == payload.creds.confirmPassword) {
            axios({
                method: "post",
                url: BASEURL + "resetemail",
                data: {
                    // 토큰에서 저장된 이메일 불러와서 추가해야함 
                    email: null,  
                  password: payload.creds.password,
                },
            })
                .then((res) => {
                    //조건 확인
                    if (null) {
                        window.alert(res.data.result);
                        toast("비밀번호 수정이 완료되었습니다.");
                        payload.history.push('/#');
                    } else {
                        dispatch(resetPasswordError("비밀번호 수정 백앤드 실패값 반환"));
                        toast("비밀번호 수정 요청이 실패하였습니다.  다시 시도해주세요.");
                    }
                })
                .catch((error) => {
                    console.log(error);
                    dispatch(resetPasswordError("비밀번호 수정 axios error catch"));
                    toast("비밀번호 수정 요청이 실패하였습니다.  다시 시도해주세요.");
                    console.log("비밀번호 수정 axios 에러");
                })

        } else if (payload.creds.password.length < 4) {
            dispatch(resetPasswordError("비밀번호는 4자리 이상이어야 합니다."));
            toast("비밀번호는 4자리 이상이어야 합니다.");
        } else {
            dispatch(resetPasswordError("비밀번호가 일치하지 않습니다."));
            toast("비밀번호가 일치하지 않습니다.");
        }

    }
}