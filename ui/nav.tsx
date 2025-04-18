"use client"
import "../app/globals.css"
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "./ui.css"
import "./login.css"
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";

export function Nav(){

    const path = usePathname();

    const [togleSidebar, setTogleSidebar] = useState(false);

    const { data: session } = useSession();
    
    const profilePic = session?.user?.image
    const username = session?.user?.name

    useEffect(() => {

        const handleResize = () => {
          if (window.innerWidth > 700) {
            setTogleSidebar(false);
          }
        };   
        window.addEventListener("resize", handleResize);
        
        
        return () => {
          window.removeEventListener("resize", handleResize);
        };
    }, []);

    //Handel Hambuger button for mobile view
    function handleHandburger(){
        if(togleSidebar === true){
            setTogleSidebar(false)     
        }else{
            setTogleSidebar(true)
        }
    }

    return(
        <>
            <nav>
                <div className="home-ui">
                    <div className="logo-container">
                        <Link href={"/"}>
                            <div className="site-logo"><img src="/logo.jpg" alt="" /> </div>
                        </Link>
                    </div>
                    <ul>
                        <li className={path === "/" ? "active": "hover:text-sky-400 transition"}><Link href={"/"}><i className="fa fa-home" style={{fontSize:"25px", color: "ffffff"}}></i></Link></li>
                        <li className={path === "/videos" ? "active": "hover:text-sky-400 transition"}><Link href={"/videos"}>Videos</Link></li>
                        <li className={path === "/trending" ? "active": "hover:text-sky-400 transition"}><Link href={"/trending"}>Trending</Link></li>
                    </ul>
                </div>
                <div className="signout-ui">
                    <ul>
                        <li className={path === "/contact" ? "dnt-display active": "dnt-display hover:text-sky-400 transition"}><Link href={"/contact"}>Contact</Link></li>
                        <li className="hover:text-sky-400 transition" style={{cursor:"pointer"}}><i className="fa fa-shopping-cart" style={{fontSize:"25px", color: "ffffff"}}></i></li>                       
                        <li className="dnt-display hover:text-sky-400 transition"><div style={{cursor:"pointer"}} onClick={()=> signOut()}>Sign Out</div></li>
                        <div className="img-holder">
                            <div className="img-holder-big"><img src={  profilePic || "/default-profile.png"} alt="User Profile" /></div>
                            <h3 style={{color: "goldenrod", fontSize:"0.8rem"}}>{ username}</h3>
                        </div>
                    </ul>
                    <div className="hamburger">{togleSidebar?
                        (<i onClick={handleHandburger} className="fa fa-angle-double-up" style={{fontSize: "25px", color: "goldenrod"}}></i>): 
                        (<i onClick={handleHandburger} className="fa fa-bars" style={{fontSize: "25px", color: "goldenrod"}}></i>)}
                    </div>
                </div>
            </nav><hr />
            
            {
                togleSidebar && <div className="sidebar">
                    <ul>
                        <div style={{marginLeft:"10px",width:"100%", display:"flex", flexDirection:"column", justifyContent:"center",alignItems:"flex-start", gap:"10px"}}>
                            <div className="img-holder-small"><img src={session?.user?.image || "/default-profile.png"} alt="User Profile" /></div>
                            <h3 style={{color:"goldenrod",marginTop:"-10px", borderBottom: "1px solid goldenrod"}}>{session?.user?.name?.split(" ")[0]}</h3>
                        </div>
                        <li className={path === "/" ? "active": ""} onClick={()=> setTimeout(()=>{{setTogleSidebar(false)}}, 1000)}>
                            <Link style={{display:"block"}} href={"/"}><i className="aside-link fa fa-home" style={{fontSize:"25px", color: "ffffff"}}></i></Link>
                        </li>
                        <li className={path === "/videos" ? "active": ""} onClick={()=> setTimeout(()=>{{setTogleSidebar(false)}}, 1000)}>
                            <Link style={{display:"block"}} href={"/videos"}>Videos</Link>
                        </li>
                        <li className={path === "/trending" ? "active": ""} onClick={()=> setTimeout(()=>{{setTogleSidebar(false)}}, 1000)}>
                            <Link style={{display:"block"}} href={"/trending"}>Trending</Link>
                        </li>
                        <li className={path === "/contact" ? "active": ""} onClick={()=> setTimeout(()=>{{setTogleSidebar(false)}}, 1000)}>
                            <Link style={{display:"block"}} href={"/contact"}>Contact</Link>
                        </li>
                        <li className="signout-link">
                            <div style={{display:"inline-block"}} onClick={()=> signOut()}>Sign Out</div>
                        </li>
                        <li>
                            <Link style={{display:"block"}} href={""}>Settings</Link>
                        </li>
                    </ul>              
                </div>
            }
        </>
    )
}

export function PathName(){

    const pathname = usePathname();

    return(

        <>
            {
                pathname.includes("/login") || pathname.includes("/signup")? <></> : <Nav/>
            }
        </>

    )
}