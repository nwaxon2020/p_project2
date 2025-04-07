import { getServerSession } from "next-auth"
import { redirect } from "next/navigation"
import { authOptions } from "@/lib/nextAuthOptions";

export default async function Contact(){
    const session = await getServerSession(authOptions);
    if(!session){
        redirect("/login")
    }
    return(
        <div><h1>Contact Page....</h1></div>
    )
}