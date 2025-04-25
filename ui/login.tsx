"use client"
import { signIn } from "next-auth/react"
import "./login.css"
import "../app/globals.css"
import Link from "next/link"
import React, { useState } from "react"
import SimpleLoading from "@/ui/simpleLoading"


export default function LogInUi(){

    const [loading, setLoading] = useState(false);

    return(
        <div style={{margin:"0px", padding:"0px"}}>
            <div className="lg-container">
                <Link href={"/"}>
                    <div className="site-lg"><img src="/logo.jpg" alt="Logo" /> </div>
                </Link>
                <h1>Nomo Phonez</h1>
            </div><hr />
    
            <div className="signup">               
                <div className="login">
                    
                    { loading?  <SimpleLoading /> :
                        <>
                            <div>
                                
                                {<button className="google-btn" onClick={async() => {setLoading(true) ,await signIn("google", {callbackUrl: "/"}) }}><i className="fa fa-google"></i>oogle</button>}
                            </div>
                            
                            <div>
                                <p className="my-2">Sign Up With FaceBook account Here👇</p>
                                {<button onClick={async() => {setLoading(true) ,await signIn("facebook", {callbackUrl: "/"}) }}><i className="text-blue-800 fa fa-facebook"></i>aceBook</button>}
                            </div>
                        </>
                    }
                    
                </div>
            </div>
        </div>
    )
}