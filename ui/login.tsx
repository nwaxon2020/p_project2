"use client"
import { signIn } from "next-auth/react"
import "./login.css"
import "../app/globals.css"
import Link from "next/link"
import React, { useState } from "react"
import SimpleLoading from "@/ui/simpleLoading"
import { useRouter } from "next/navigation"


export default function LogInUi(){
    const router = useRouter()

    const [loading, setLoading] = useState(false);
    const [msg, setMsg] = useState("")
    const [error, setError] = useState("")

    const [formData, setFormData] = useState({
        email: "",
        password: ""
    })

    function handleOnChange(e: React.ChangeEvent<HTMLInputElement>){
        const {name, value} = e.target
        setFormData((prev)=> {
            return{
                ...prev,
                [name]: value,
            }
        })
    }

    async function handleSubmitSIgnup(e:React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        setLoading(true)
        setMsg("")
       
        const res = await signIn("credentials", {
            email: formData.email,
            password: formData.password,
            redirect: false,
        })
        if(res?.error){
            setLoading(false)
            setError(res.error)
            setTimeout(()=>{
                setError("")
            }, 6000)
        }else{
            window.scrollTo({top: 0, behavior: "smooth"})
            setMsg("Log In Sucessful ✔")
            setTimeout(()=>{
                router.push("/")
            }, 2000)
        }
    }


    return(
        <div style={{margin:"0px", padding:"0px"}}>
            <div className="lg-container">
                <Link href={"/"}>
                    <div className="site-lg"><img src="/logo.jpg" alt="Logo" /> </div>
                </Link>
                <h1>Nomo Phonez</h1>
            </div><hr />
            {msg && <p className="flash-msg">{msg}</p>}
            {error && <p className="flash-msg err">{error}{error === "Email not Found....Please " && <Link style={{color:"goldenrod", textDecoration:"underline", fontWeight:"bold"}} href={"/signup"}>Sign Up</Link>}</p>}

            <form className="signup" onSubmit={handleSubmitSIgnup}>               
                <div className="login">
                    <input type="email" name="email" required placeholder="Email@" onChange={handleOnChange} value={formData.email}/>
                    <input type="password" name="password" required placeholder="Password" onChange={handleOnChange} value={formData.password} minLength={8}/>

                    { loading?  <SimpleLoading /> :
                        <>
                            <div className="flex flex-col gap-10 items-center justify-center px-9 sm:flex-row sm:gap-4 text-center">
                            <button type="submit" className="google-btn">Log in</button> 
                            </div>
                            <div>
                                <p className="my-2">Don't have an account? <Link href={"/signup"} className="underline font-semibold p-[5px]" style={{ color:"bisque"}}>Sign Up</Link></p>
                                {<button className="google-btn" onClick={() => {setLoading(true) ,signIn("google") }}><i className="fa fa-google"></i>oogle</button>}
                            </div>
                        </>
                    }
                    
                </div>
            </form>
        </div>
    )
}