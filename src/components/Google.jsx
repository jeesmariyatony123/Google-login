import React from 'react'
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Google() {
    return (
        <div>

            <GoogleLogin
                onSuccess={credentialResponse => {
                    const decoded = jwtDecode(credentialResponse.credential);
                    console.log(decoded);
                    toast.success(`${decoded.name} Succesfully logged in...`)
                }}
                onError={() => {
                    console.log('Login Failed');
                }}

            />
            <ToastContainer position='top-center' theme='colored' autoClose={3000} />
        </div>
    )
}

export default Google