"use client";

import { useState } from "react";
import HandleSignUp from "../../repository/supabaseAnonServer";

export default function SignUp() {
    
    const [email, setEmail] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");


    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if(password !== confirmPassword){
            setError("Passwords do not match");
            return;
        }

        setError(""); // Reset in case of previous error
        
        // Insert user into database
        const result = await HandleSignUp(email, password, firstName, lastName);
        if (result?.error) {
            setError("Error creating user");
        }
        else {
        }


    }
    
    return (
        <div>
            <h1>Sign Up Page</h1>
            <form method="POST" onSubmit = {handleSubmit}>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" onChange={(e) => setEmail(e.target.value)}  required/>
                </div>
                <div>
                    <label htmlFor="firsName">First Name:</label>
                    <input type="text"  id="firstName" name="firstName" onChange={(e) => setFirstName(e.target.value)}  required />
                    <label htmlFor="lastName">Last Name:</label>
                    <input type="text"  id="lastName" name="lastName" onChange={(e) => setLastName(e.target.value)}  required />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input type="password"  id="password" name="password" onChange={(e) => setPassword(e.target.value)}  required />
                    <label htmlFor="confirmPassword">Confirm Password:</label>
                    <input type="password"  id="confirmPassword" name="confirmPassword" onChange={(e) => setConfirmPassword(e.target.value)}  required />
                </div>
                <button type="submit">Submit</button>
            </form>


        </div>
    )
}