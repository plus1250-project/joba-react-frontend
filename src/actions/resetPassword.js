import { toast } from 'react-toastify';
import axios from 'axios';
import "react-toastify/dist/ReactToastify.css";
import jwt from 'jwt-decode';

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
const pwPattern1 = /[0-9]/;
const pwPattern2 = /[a-zA-Z]/;
const pwPattern3 = /[~!@#$%^&*()_+|<>?:{}]/;
const BASEURL = 'http://localhost:3000/';

export function resetPasswordUser(payload) {
    let email = jwt(localStorage.getItem('bearerToken')).sub
    console.log(email);
    console.log(payload.creds.password);

    return (dispatch) => {
        if (payload.creds.password.match(pwPattern1) || payload.creds.password.match(pwPattern2) || payload.creds.password.match(pwPattern3) && payload.creds.password.length >= 4 && payload.creds.password == payload.creds.confirmPassword) {
            axios.patch(BASEURL+'member/password',{
                email : email,
                password: payload.creds.password,
            })
            .then((res) => {
                //조건 확인
                console.log(res.data);
                if (res.status === 200) {
                    toast("비밀번호 수정이 완료되었습니다.");
                    payload.history.push('/#');
                } else {
                    dispatch(resetPasswordError("비밀번호 수정 백앤드 실패값 반환"));
                    toast("백엔드 실패값 반환 비밀번호 수정 요청이 실패하였습니다.  다시 시도해주세요.");
                }
            })
            .catch((error) => {
                console.log(error);
                dispatch(resetPasswordError("비밀번호 수정 axios error catch"));
                toast("비밀번호 수정 요청이 실패하였습니다.  다시 시도해주세요.");
                console.log("비밀번호 수정 axios 에러");
            })

        } else if (!payload.target.value.match(pwPattern1) && !payload.target.value.match(pwPattern2) && !payload.target.value.match(pwPattern3) || payload.target.value.length < 4) {
            dispatch(resetPasswordError("비밀번호는 4자리 이상이어야 합니다."));
            toast("비밀번호는 4자리 이상이어야 합니다.");
        } else {
            dispatch(resetPasswordError("비밀번호가 일치하지 않습니다."));
            toast("비밀번호가 일치하지 않습니다.");
        }

    }
}