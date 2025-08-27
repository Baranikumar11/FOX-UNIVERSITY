import {link} from "react-router-dom"

export default function About(){
    return(
        <div>
            <h1 className="text-center">AboutPage</h1>
            <link to={'/'}> <button className="btn btn-warning">Home</button></link>
            <br></br><br></br>
            <link to={'/Blog'}> <button className="btn btn-warning">Blog</button></link>
        </div>
    )
}