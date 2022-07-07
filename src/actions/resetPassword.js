import { toast } from 'react-toastify';
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

//   // 여기다 백앤드 요청 추가하기?
//   export function resetPasswordUser(payload) {
//     return (dispatch) => {
//       if ( payload.creds.password.length >= 4 && payload.creds.password == payload.creds.confirmPassword ) {
//         toast.success("비밀번호 수정이 완료되었습니다.",{
//           autoClose: 10000,
//         });
//         // 어디로 가야할까? home으로 보낼까 login으로 보낼까 login으로 보내려면 로그아웃도 시켜야 함 
//         payload.history.push('/login');
//       } else {
//         dispatch(resetPasswordError("비밀번호가 일치하지 않습니다."));
//         toast.error("비밀번호가 일치하지 않습니다.");

//       }
//     }
//   }

export function resetPasswordUser(payload) {
    return (dispatch) => {
        if (payload.creds.password.length >= 4 && payload.creds.password == payload.creds.confirmPassword) {
            toast("비밀번호 수정이 완료되었습니다.", {
                autoClose: 10000,
            });
            // 어디로 가야할까? home으로 보낼까 login으로 보낼까 login으로 보내려면 로그아웃도 시켜야 함 
            payload.history.push('/login');
        } else if (payload.creds.password.length < 4 ) {
            dispatch(resetPasswordError("비밀번호는 4자리 이상이어야 합니다."));
            toast("비밀번호는 4자리 이상이어야 합니다.");
        } else {
            dispatch(resetPasswordError("비밀번호가 일치하지 않습니다."));
            toast("비밀번호가 일치하지 않습니다.");
        }

    }
}