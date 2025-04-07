
import "./globals.css"

export default function NotFound(){
    return(
        <div className="notFound">
            <h1>Page Not Found!</h1>
            <p>The page you are looking for dose not exist..<a className="link" href={"/"}>Home</a></p>
        </div>
    )
}