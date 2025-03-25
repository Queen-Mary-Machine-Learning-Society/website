"use client";
import { useEffect, useState } from "react";

export default function Contact() {
    const [token, setToken] = useState<any>(null); // Use `any` or a specific type

    useEffect(() => {
        const storedToken = localStorage.getItem("sb-lnskwhrcpimttkpsqlhy-auth-token");

        if (storedToken) {
            try {
                const parsedToken = JSON.parse(storedToken);
                console.log(parsedToken);
                setToken(parsedToken);
                
                if(parsedToken.access_token) {
                    console.log("access token ",parsedToken.access_token);
                }

                if(parsedToken.refresh_token) {
                    console.log("refresh token ",parsedToken.refresh_token);
                }

                if(parsedToken.user.id) {
                    console.log("user id ",parsedToken.user.id);
                }


            } catch (error) {
                console.error("Error parsing JSON from localStorage:", error);
            }
        }
    }, []);

    return (
        <div>
            <h1>Admin Page</h1>
            {token && <pre>{JSON.stringify(token, null, 2)}</pre>}
        </div>
    );
}
