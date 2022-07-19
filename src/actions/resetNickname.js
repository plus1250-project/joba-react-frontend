import { toast } from 'react-toastify';
import axios from 'axios';
import "react-toastify/dist/ReactToastify.css";
import jwt from 'jwt-decode';

export const RESETNN_REQUEST = 'RESETNN_REQUEST';
export const RESETNN_SUCCESS = 'RESETNN_SUCCESS';
export const RESETNN_FAILURE = 'RESETNN_FAILURE';

export function receiveResetNickname() {
    return {
        type: RESETNN_SUCCESS,
    };
}

export function resetNicknameError(payload) {
    return {
        type: RESETNN_FAILURE,
        payload,
    };
}

const BASEURL = 'http://localhost:3000/';
const nicknamePattern = RegExp("^[가-힣ㄱ-ㅎa-zA-Z0-9._-]{2,}\$")

export function resetNicknameUser(payload) {
    let email = jwt(localStorage.getItem('bearerToken')).sub
    console.log(email);
    console.log(payload.creds.nickname);

    return (dispatch) => {
        if (payload.creds.nickname.match(nicknamePattern)) {
            axios({
                method: "patch",
                url: BASEURL + "member/nickname",
                data: {
                    // 토큰에서 저장된 이메일 불러와서 추가해야함 
                    email: email,  
                  nickName: payload.creds.nickname,
                },
            })
                .then((res) => {
                    //조건 확인
                    if (res.status === 200) {
                        toast("닉네임 수정이 완료되었습니다.");
                        payload.history.push('/#');
                    } else {
                        dispatch(resetNicknameError("닉네임 수정 백앤드 실패값 반환"));
                        toast("닉네임 수정 요청이 실패하였습니다.  다시 시도해주세요.");
                    }
                })
                .catch((error) => {
                    console.log(error);
                    dispatch(resetNicknameError("닉네임 수정 axios error catch"));
                    toast("닉네임 수정 요청이 실패하였습니다.  다시 시도해주세요.");
                    console.log("닉네임 수정 axios 에러");
                })
        } else {
            dispatch(resetNicknameError("닉네임은 공백, 특수문자 제외 2자 이상이어야 합니다."));
            toast("닉네임은 공백, 특수문자 제외 2자 이상이어야 합니다.");
        }

    }
}