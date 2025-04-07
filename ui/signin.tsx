"use client"
import Link from "next/link";
import SimpleLoading from "./simpleLoading";
import { useState } from "react";
import "./login.css"
import axios from "axios";
import { useRouter } from "next/navigation";


export default function SignInUi(){

    const router = useRouter()

    //Setttings 
    const [loading, setLoading] = useState(false)
    const [sucessMsg, setSucessMsg] = useState("")
    const [error, setError] = useState("")

    //form data setting variable
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
        profilePic: ""
    })

    // function to pass in form inputs 
    function handleOnChange(e: React.ChangeEvent<HTMLInputElement>){
        const {name, value} = e.target;

        //set the user details for posting
        setFormData((prev)=>{
            return{
                ...prev,
                [name]: value
            }
        })
    }

    //function to handle profile image
    function handleProfileImage(e:React.ChangeEvent<HTMLInputElement>){
        const file = e.target.files?.[0]
        if(file){
            const objectImg = URL.createObjectURL(file)

            //set the user details plus profile picture for posting
            setFormData((prev) =>{
                return{
                    ...prev,
                    profilePic: objectImg
                }
            })
        }
    }
    async function handleSubmitSIgnup(e: React.FormEvent<HTMLFormElement>){
        //initialise all flash mesage reports
        setSucessMsg("");
        setError("")
        setLoading(true)

        //Prevent Page reload
        e.preventDefault()

        try {
            //pust form data info into database with Axios
            const {data} = await axios.post("/api/signup", formData)

            setFormData({username:"",email:"", password:"", profilePic:""})

            window.scrollTo({top: 0, behavior: "smooth"})
            setSucessMsg(data.message)   

            setTimeout(()=>{
                router.push("/")
            },2000)
               
        } catch (error:any) {
            if (error.response && error.response.data) {
                setError(error.response.data.error || "An unknown error occurred");
            } else {
                setError(error.message || "An unknown error occurred");
            }

        }finally{
            setLoading(false)
        }
    }

    return(
        <div style={{margin:"0px", padding:"0px"}}>
            <div>
                <div className="lg-container">
                    <Link href={"/"}>
                        <div className="site-lg"><img src="/logo.jpg" alt="Logo" /> </div>
                    </Link>
                    <h1>Nomo Phonez</h1>
                </div><hr />     
            </div>
            {error && <p className="flash-msg err">{error}{error === "User Email Already Exist...Please " && <span style={{color:"goldenrod", textDecoration:"underline"}}><Link href={"/login"}>LogIn</Link></span>} </p>}
            {sucessMsg && <p className="flash-msg">{sucessMsg}</p>}
            <form className="signup" onSubmit={handleSubmitSIgnup}>               
                <div className="login">
                    <div className="profile-img-container">
                        <div className="profile-img-hoder"><img style={{width:"100%", height:"100%"}} src={formData.profilePic || "https://cdn.prod.website-files.com/63b81fa3e0db3d52fd3385df/63f6415156b59484249d9585_Grayed%20out.jpg"} alt="Profile Picture" /></div>
                        <input type="file" accept="image/*" name="profilePic" onChange={handleProfileImage}/>                        
                    </div>
                    <input type="text" name="username" required placeholder="Full Name" minLength={3} onChange={handleOnChange} value={formData.username} />
                    <input type="email" name="email" required placeholder="Email@" onChange={handleOnChange} value={formData.email}/>
                    <input type="password" name="password" required placeholder="Password" onChange={handleOnChange} value={formData.password} minLength={8}/>

                    {loading ? <SimpleLoading /> : <button type="submit" className="google-btn">Sign Up</button> }
                    <div><p>Already have an account? <Link href={"/login"} className="underline font-semibold p-[5px]" style={{ color:"bisque"}}>Log In</Link></p></div>
                </div>
            </form>
        </div>
    )
}