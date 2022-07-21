import { toast } from 'react-toastify';
import axios from 'axios';
import "react-toastify/dist/ReactToastify.css";
import jwt from 'jwt-decode';

export const DELACC_REQUEST = 'DELACC_REQUEST';
export const DELACC_SUCCESS = 'DELACC_SUCCESS';
export const DELACC_FAILURE = 'DELACC_FAILURE';

export function receiveDeleteAccount() {
    return {
        type: DELACC_SUCCESS,
    };
}

export function deleteAccountError(payload) {
    return {
        type: DELACC_FAILURE,
        payload,
    };
}

const BASEURL = 'http://localhost:3000/';
const pwPattern1 = /[0-9]/;
const pwPattern2 = /[a-zA-Z]/;
const pwPattern3 = /[~!@#$%^&*()_+|<>?:{}]/;

// 비밀번호 확인 
export function deleteAccountUser(payload) {

    console.log(payload.creds.password);


    return (dispatch) => {
        let email = jwt(localStorage.getItem('bearerToken')).sub
        console.log(email);
        if (payload.creds.password.length >= 4 && payload.creds.password.match(pwPattern1) || payload.creds.password.match(pwPattern2) || payload.creds.password.match(pwPattern3)) {
            axios.delete(BASEURL + 'member', {
                data: {
                    email: email,
                    password: payload.creds.password,
                }
            })
            .then((res) => {
                //조건 확인
                if (res.status === 200) {
                    localStorage.removeItem('authenticated');
                    localStorage.removeItem('bearerToken');
                    toast("계정이 성공적으로 삭제되었습니다.");
                    payload.history.push('/#');
                } else {
                    dispatch(deleteAccountError("백엔드에서 비밀번호 불일치 반환"));
                    toast("비밀번호가 일치하지 않습니다.");
                }
            })
            .catch((error) => {
                console.log(error);
                dispatch(deleteAccountError("계정 삭제 axios error catch"));
                toast("계정 삭제 요청이 실패하였습니다.  다시 시도해주세요.");
                console.log("계정 삭제 axios 에러");
            })
        } else {
            dispatch(deleteAccountError("비밀번호는 문자, 숫자만 허용하여 4자 이상입니다."));
            toast("비밀번호는 문자, 숫자만 허용하여 4자 이상입니다.");
        }

    }
}