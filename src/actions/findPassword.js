import { toast } from 'react-toastify';
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

export function findPasswordUser(payload) {
    return (dispatch) => {
        if (payload.creds.email.match(pattern) != null ) {
            toast("메일 발송이 완료되었습니다");
        } else {
            dispatch(findPasswordError("메일 형식이 올바르지 않습니다."));
            toast("메일 형식이 올바르지 않습니다.");
        }

    }
}