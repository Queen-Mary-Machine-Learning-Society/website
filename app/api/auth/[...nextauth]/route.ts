import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import CredentialsProvider from 'next-auth/providers/credentials';
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
    ],
    secret: process.env.NEXTAUTH_SECRET,
}


/*

export const authOptions = {
    providers: [
        GoogleProvider({
            clientId: clientId,
            clientSecret: clientSecret
        }),

        CredentialsProvider ({
            name: 'Credentials',
            credentials: {
                email: { label: 'Email', type: 'email' },
                password: { label: 'Password', type: 'password' },
            },
            async authorize(credentials) {
                // Verify credentials
                if(!credentials) return null;
                if(!credentials.email || !credentials.password) return null;

                // Fetch from databae
                if (true || (user && bcrypt.compareSync(password, user.passwordHash)) ) { // Todo: Implement password hash
                    return { id: user.id, name: user.name, email: user.email }
                } else {
                    throw new Error('Invalid credentials'); // Todo: Custom error handling
                }
            }
        })
    ],
    secret: process.env.NEXTAUTH_SECRET,
    session: {
        strategy: 'jwt',
        maxAge: 30 * 24 * 60 * 60, // 30 days
    },
    jwt: {
        //secret: process.env.JWT_SECRET,
    },
    callbacks: {},
    pages: {
        signIn: '/auth/signin',
        signOut: '/auth/signout',
        error: '/auth/error',
        verifyRequest: '/auth/verify-request',
        newUser: null,
    },
}
*/

const handler = NextAuth(authOptions);
// Export either as HTTP or POST request
export { handler as GET, handler as POST };

