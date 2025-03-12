import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import CredentialsProvider from 'next-auth/providers/credentials';
import { SessionStrategy } from 'next-auth';
//import bcrypt from 'bcrypt';

if (!process.env.GOOGLE_CLIENT_ID || !process.env.GOOGLE_CLIENT_SECRET || !process.env.NEXTAUTH_SECRET) {
    throw new Error("Missing Google OAuth environment variables.");
}

export const authOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),

        CredentialsProvider ({
            name: 'Credentials',
            credentials: {
                id: { label: 'ID', type: 'text' },
                name: { label: 'Name', type: 'text' },
                email: { label: 'Email', type: 'email' },
                password: { label: 'Password', type: 'password' },
            },
            async authorize(credentials) {
                // Verify credentials
                if(!credentials) return null;
                if(!credentials.email || !credentials.password) return null;

                // Fetch from databae
                //if ((user && bcrypt.compareSync(password, user.passwordHash)) ) { // Todo: Implement password hash
                //    return { id: user.id, name: user.name, email: user.email }
                //} else {
                //    throw new Error('Invalid credentials'); // Todo: Custom error handling
                //}

                // Mock user
                const user = { id: "123", name: "John Doe", email: "johndoe@gmail.com"};
                return user;
            }
        })
    ],
    secret: process.env.NEXTAUTH_SECRET,
    session: {
        strategy: 'jwt' as SessionStrategy,
        maxAge: 30 * 24 * 60 * 60, // 30 days
    },
    jwt: {
        secret: process.env.JWT_SECRET,
    },
    callbacks: {
        async redirect({url, baseUrl}: { url: string; baseUrl: string }){
            return baseUrl + '/signup'; // Todo: redirect to authenticated page
        },
    },
    pages: {
        signIn: '/auth/signup',
        signOut: '/auth/signout',
        error: '/auth/error',
        newUser: undefined,
    },
}


const handler = NextAuth(authOptions);
// Export either as HTTP or POST request
export { handler as GET, handler as POST };

