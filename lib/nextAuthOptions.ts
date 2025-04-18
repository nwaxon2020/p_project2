import Google from "next-auth/providers/google";
import { NextAuthOptions, Session, User as Users } from "next-auth";
import type { JWT } from "next-auth/jwt";
import ConnectDatabase from "@/lib/database";
import { User } from "@/models/schemas";
import bcrypt from "bcryptjs";
import Credentials from "next-auth/providers/credentials";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import { MongoClient } from "mongodb";

const client = new MongoClient(process.env.MONGO_URL as string)
const clientPromise = client.connect();

export const authOptions: NextAuthOptions = {

    session:{
        strategy: "jwt",
        maxAge: 30 * 60 * 24,
    },
    
    adapter: MongoDBAdapter(clientPromise),

    providers:[
        Google({
            clientId: process.env.CLIENT_ID as string,
            clientSecret: process.env.CLIENT_SECRETE as string,
        }),

        Credentials({
            name: "Credentials",
            credentials: {
                email: {type: "email"},
                password: {type: "password"},
            },
            async authorize(credentials:  Record<"email" | "password", string> | undefined){
                
                if (!credentials) throw new Error("Missing credentials");
                const {email, password} = credentials;

                await ConnectDatabase();

                const userExist = await User.findOne({email})
                if(!userExist){
                    throw new Error("Email not Found....Please ")
                }
                const validPassword = await bcrypt.compare(password, userExist.password)
                if(password.length < 8 || !validPassword){
                    throw new Error("Wrong Password...")
                }

                return {
                    id: userExist._id, 
                    email: userExist.email, 
                    name: userExist.username, 
                    image: userExist.profilePic
                }
            }
        }),
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
        
        async jwt({token, user}:{ token: JWT; user?: Users }){
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