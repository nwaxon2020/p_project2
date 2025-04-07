
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/lib/nextAuthOptions";

export default function Home(){
  const session = getServerSession(authOptions);
  if(!session){
    redirect("/login")
  }
  return(
    <div>
      <h1>WELCOME HOME <span style={{color: "goldenrod"}}>Name</span></h1>
    </div>
  )
}