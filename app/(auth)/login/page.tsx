"use client";
import GoogleButton from "react-google-button";
import { signIn } from "next-auth/react";

export default function Login() {
    return (
        <div>
            <h1>Login Page</h1>
            <GoogleButton onClick={ () => signIn('google')} ></GoogleButton>
        </div>
    )
}