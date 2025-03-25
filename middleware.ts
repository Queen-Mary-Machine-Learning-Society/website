import { NextResponse, type NextRequest } from 'next/server';
import { createClient } from '@supabase/supabase-js';


const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_PROJECT_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error(
    'NEXT_PUBLIC_SUPABASE_PROJECT_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY not defined in .env'
  );
}

const supabase = createClient(supabaseUrl, supabaseAnonKey);



export function middleware(request: NextRequest) {

  const response = NextResponse.next();
  


  if(request.nextUrl.pathname === '/admin') {
    return NextResponse.redirect(new URL('/contact', request.url))
  }

}
