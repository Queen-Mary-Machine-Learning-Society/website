"use client";

import GoogleButton from "react-google-button";
import { signIn } from "next-auth/react";
import { useState } from "react";


export default function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
  
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault(); 
        setError(""); // Reset in case of previous error
        const result = await signIn("credentials", {
        email,
        password,
        redirect: false,
        });
        if (result?.error) {
            setError("Invalid email or password"); 
        } else {
            // Todo: redirect to authenticated page
            window.location.href = "/signup"; 
        }
    };


    return (
        <div>
            <h1 className="text-3xl font-bold text-center">Login Page</h1>
            <form onSubmit = {handleSubmit}>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)}required/>
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input type="password"  id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </div>
                <button type="submit">Submit</button>
                {error && <p>{error}</p>} 
            </form>
            

            <GoogleButton onClick={ () => signIn('google')} ></GoogleButton>
            
        </div>
    )
}