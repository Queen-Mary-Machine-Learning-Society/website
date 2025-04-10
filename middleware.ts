import { NextResponse, type NextRequest } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { getToken } from "next-auth/jwt";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_PROJECT_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error(
    'NEXT_PUBLIC_SUPABASE_PROJECT_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY not defined in .env'
  );
}
const supabase = createClient(supabaseUrl, supabaseAnonKey);



export async function middleware(request: NextRequest) {

  // GET THE ID TOKEN FROM SUPABASE 
  const token = await getToken({ req: request, secret: process.env.JWT_SECRET });

  if (!token) {
    console.warn("No token found. Redirecting...");
    return NextResponse.redirect(new URL("/login", request.url));
  }

  //console.log("Full Token:", token);
  const email = token.email;
  //console.log("email:", email);

  // Get role from Supabase users table
  // Custom RPC function to get user role from email
  const { data, error } = await supabase.rpc("get_user_role", { user_email: email });
  if (error) {
    console.error("Error getting user role:", error);
    return NextResponse.error();
  }
  console.log("Data:", data);

  // if(data[0].role !== "admin") {
  //   console.warn("User is not an admin. Redirecting...");
  //   return NextResponse.redirect(new URL("/login", request.url));
  // }
}


export const config = {
  matcher: ['/admin/:path*'], // Applied to ADMIN pages
};