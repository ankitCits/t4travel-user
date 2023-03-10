import { BASE_URL } from '../../config';
import { USER_LOGOUT_SUCCESS, POST_USER_SIGNUP_SUCCESS, USER_LOGIN_SUCCESS, POST_USER_SIGNUP_VERIFY_SUCCESS,POST_USER_LOGIN_VERIFY_SUCCESS } from '../constants';


export const loginAuth = (Payload) => {
    console.log("REQ_SIGNUP_VERIFY_WITH_PAYLOAD : ", Payload)

    return async dispatch => {

        try {

            let myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");
            myHeaders.append("Authorization", "{{token}}");

            let formdata = new FormData();
            formdata.append("email ", Payload.email);
            formdata.append("password", Payload.password);

            let requestOptions = {
                method: 'POST',
                headers: myHeaders,
                body: formdata,
                redirect: 'follow'
            };

            // return Payload

            const fetchSignup = await fetch(`${BASE_URL}/login/`, requestOptions)
            const loginVerifyResponse = await fetchSignup.json();
            console.log("LOGIN_API_RESPONSE : ", loginVerifyResponse)
            if (loginVerifyResponse.status_code == 1) {
                console.log("LOGIN_API_RESPONSE_STATUS_TRUE")
                dispatch({
                    type: POST_USER_LOGIN_VERIFY_SUCCESS,
                    data: loginVerifyResponse.userData,
                    // message: '',
                    // status: 'Succuss',
                });

                return loginVerifyResponse
            } else {
                console.log("SIGNUP_FALSE")
                return loginVerifyResponse
            }


        } catch (error) {

            console.error(error);

        }

    };

}



export const postSignup = (Payload) => {
    console.log("REQ_SIGNUP_WITH_PAYLOAD : ", Payload)

    return async dispatch => {

        try {

            let myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");
            myHeaders.append("Authorization", "{{token}}");

            let formdata = new FormData();
            formdata.append("first_name ", Payload.fname);
            formdata.append("last_name", Payload.lname);
            formdata.append("email", Payload.email);
            formdata.append("password", Payload.password);

            let requestOptions = {
                method: 'POST',
                headers: myHeaders,
                body: formdata,
                redirect: 'follow'
            };

            // return Payload

            const fetchSignup = await fetch(`${BASE_URL}/users/`, requestOptions)
            const signupResponse = await fetchSignup.json();
            console.log("SIGNUP_API_RESPONSE : ", fetchSignup)
            if (signupResponse.email == Payload.email
                // && fetchSignup.status == 200
            ) {
                console.log("SIGNUP_TRUE")
                dispatch({
                    type: POST_USER_SIGNUP_SUCCESS,
                    data: signupResponse,
                    // message: '',
                    // status: 'Succuss',
                });

                return signupResponse
            } else {
                console.log("SIGNUP_FALSE")
                return signupResponse
            }


        } catch (error) {

            console.error(error);

        }

    };

}


export const postSignupVerify = (Payload) => {
    console.log("REQ_SIGNUP_VERIFY_WITH_PAYLOAD : ", Payload)

    return async dispatch => {

        try {

            let myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");
            myHeaders.append("Authorization", "{{token}}");

            let formdata = new FormData();
            formdata.append("email ", Payload.email);
            formdata.append("otp", Payload.otp);

            let requestOptions = {
                method: 'POST',
                headers: myHeaders,
                body: formdata,
                redirect: 'follow'
            };

            // return Payload

            const fetchSignup = await fetch(`${BASE_URL}/verify-email/`, requestOptions)
            const signupVerifyResponse = await fetchSignup.json();
            console.log("SIGNUP_VAERIFY_API_RESPONSE : ", signupVerifyResponse)
            if (signupVerifyResponse.status_code == 1) {
                console.log("SIGNUP_VERIFY_TRUE")
                dispatch({
                    type: POST_USER_SIGNUP_VERIFY_SUCCESS,
                    data: signupVerifyResponse,
                    // message: '',
                    // status: 'Succuss',
                });

                return signupVerifyResponse
            } else {
                console.log("SIGNUP_FALSE")
                return signupVerifyResponse
            }


        } catch (error) {

            console.error(error);

        }

    };

}


export const postSignupVerifyResend = (Payload) => {
    console.log("REQ_SIGNUP_VERIFY_WITH_PAYLOAD : ", Payload)

    return async dispatch => {

        try {

            let myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");
            myHeaders.append("Authorization", "{{token}}");

            let formdata = new FormData();
            formdata.append("email ", Payload.email);

            let requestOptions = {
                method: 'POST',
                headers: myHeaders,
                body: formdata,
                redirect: 'follow'
            };

            // return Payload

            const fetchSignup = await fetch(`${BASE_URL}/resend-email-verification-otp/`, requestOptions)
            const signupVerifyResponse = await fetchSignup.json();
            console.log("SIGNUP_VAERIFY_API_RESPONSE : ", signupVerifyResponse)
            if (signupVerifyResponse.status_code == 1) {
                console.log("SIGNUP_VERIFY_TRUE")
                return signupVerifyResponse
            } else {
                console.log("SIGNUP_FALSE")
                return signupVerifyResponse
            }


        } catch (error) {

            console.error(error);

        }

    };

}

export const forgetEmail = (Payload) => {
    console.log("REQ_FORGET_PASSWORD_WITH_PAYLOAD : ", Payload)

    return async dispatch => {

        try {
            console.log("1")
            let myHeaders = new Headers();
            // myHeaders.append("Content-Type", "application/json");
            // myHeaders.append("Authorization", "{{token}}");

            let formdata = new FormData();
            formdata.append("email ", Payload.email);

            let requestOptions = {
                method: 'POST',
                headers: myHeaders,
                body: formdata,
                redirect: 'follow'
            };

            // return Payload

            const fetchForgetEmail = await fetch(`${BASE_URL}/forget-pass/`, requestOptions)
            const forgetEmailResponse = await fetchForgetEmail.json();
            console.log("SIGNUP_VAERIFY_API_RESPONSE : ", forgetEmailResponse)
            if (forgetEmailResponse.status_code == 1) {
                console.log("_FORGET_TRUE")
                // dispatch({
                //     type: POST_USER_SIGNUP_VERIFY_SUCCESS,
                //     data: forgetEmailResponse,
                //     // message: '',
                //     // status: 'Succuss',
                // });

                return forgetEmailResponse
            } else {
                console.log("SIGNUP_FALSE")
                return forgetEmailResponse
            }


        } catch (error) {

            console.error("CATCH___FORGET",error);

        }

    };

}


export const submitForgetData = (Payload) => {
    console.log("REQ_FORGET_PASSWORD_WITH_PAYLOAD : ", Payload)

    return async dispatch => {

        try {
            console.log("1")
            let myHeaders = new Headers();
            // myHeaders.append("Content-Type", "application/json");
            // myHeaders.append("Authorization", "{{token}}");

            let formdata = new FormData();
            formdata.append("email ", Payload.email);
            formdata.append("otp ", Payload.otp);
            formdata.append("new_password ", Payload.password);
            formdata.append("re_new_password ", Payload.passwordConfirm);

            let requestOptions = {
                method: 'POST',
                headers: myHeaders,
                body: formdata,
                redirect: 'follow'
            };

            // return Payload

            const fetchForgetEmail = await fetch(`${BASE_URL}/forget-pass-conf/`, requestOptions)
            const forgetEmailResponse = await fetchForgetEmail.json();
            console.log("FORGET_SUBMIT_API_RESPONSE : ", forgetEmailResponse)
            if (forgetEmailResponse.status_code == 1) {
                console.log("_FORGET_SUBMIT_TRUE")
                // dispatch({
                //     type: POST_USER_SIGNUP_VERIFY_SUCCESS,
                //     data: forgetEmailResponse,
                //     // message: '',
                //     // status: 'Succuss',
                // });

                return forgetEmailResponse
            } else {
                console.log("SIGNUP_SUBMIT_FALSE")
                return forgetEmailResponse
            }


        } catch (error) {

            console.error("CATCH___FORGET",error);

        }

    };

}

export const userContextLogin = (Payload) => {
    console.log("REQ_LOGIN_WITH_PAYLOAD : ", Payload)

    return async dispatch => {

        try {

            dispatch({
                type: USER_LOGIN_SUCCESS,
                data: true,
                // message: '',
                // status: 'Succuss',
            });


        } catch (error) {

            console.error(error);

        }

    };

}

export const userContextLogout = (Payload) => {
    console.log("REQ_LOGOUT_WITH_PAYLOAD : ", Payload)

    return async dispatch => {

        try {

            dispatch({
                type: USER_LOGOUT_SUCCESS,
                data: false,
                // message: '',
                // status: 'Succuss',
            });


        } catch (error) {

            console.error(error);

        }

    };

}