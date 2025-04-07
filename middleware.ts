import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export default async function middleware(req:NextRequest) {
    const token = await getToken({req})
    const path = req.nextUrl.pathname;
    const routers = ["/","/trending","/contact","/videos"].includes(path)

        if (routers && !token) {
            return NextResponse.redirect(new URL("/login", req.url));
        }
    return NextResponse.next();
} 