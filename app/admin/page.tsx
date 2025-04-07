"use client";
import { useEffect, useState } from "react";

export default function Admin() {


    const [token, setToken] = useState<any>(null);
    const projectURL = process.env.NEXT_PUBLIC_SUPABASE_PROJECT_ID;
    const storedToken = localStorage.getItem(`sb-${projectURL}-auth-token`);

    useEffect(() => {

        
        if (storedToken) {
            try {
                const parsedToken = JSON.parse(storedToken);
                //console.log(parsedToken);
                
                const userRole = parsedToken.user.user_metadata.role;
                //console.log("User Role:", userRole);

                if(userRole !== "ADMIN") {
                    console.warn("User is not an admin. Redirecting...");
                    window.location.href = "/login";
                }

            } catch (error) {
                console.error("Error parsing JSON from localStorage:", error);
            }
        }
    }, [token]);

    if(!storedToken) {
        console.warn("No token found. Redirecting...");
        window.location.href = "/login";
    }


    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">

            <h1>Admin Page</h1>
            <a href="/forms" className="text-blue-500 hover:underline">Forms</a>
            
        </div>
    );
}
