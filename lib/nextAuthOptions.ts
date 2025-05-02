import Google from "next-auth/providers/google";
import Facebook from "next-auth/providers/facebook";
import { NextAuthOptions, Session, User } from "next-auth";
import type { JWT } from "next-auth/jwt";


export const authOptions: NextAuthOptions = {

    session:{
        strategy: "jwt",
        maxAge: 30 * 24 * 60 * 60,
    },

    providers:[
        Google({
            clientId: process.env.CLIENT_ID as string,
            clientSecret: process.env.CLIENT_SECRET as string,
        }),   
        Facebook({
            clientId: process.env.FCAEBOOK_APP_ID as string,
            clientSecret: process.env.FACEBOOK_APP_SECRET as string,
        })
    ],

    cookies:{
        sessionToken:{
            name: "next-auth.session-token",
           options: {
            httpOnly: true,
            sameSite: "lax",
            secure: process.env.NODE_ENV === "production",
            path: "/",          
           }
        }
    },

    callbacks:{
        
        async jwt({token, user}:{ token: JWT; user?: User }){
            if(user){
                token.id = user.id; 
                token.email = user.email; 
                token.name = user.name; 
                token.image = user.image
            }
            return token
        },
       async session({session, token} : {session:Session, token: JWT}){
            if(token?.id){
                session.user.id = token.id;
                session.user.email = token.email;
                session.user.name = token.name;
                session.user.image = token.image
            }

            return session
       }
    },

    secret: process.env.NEXTAUTH_SECRET,

}