import { BrowserRouter,Routes,Route } from "react-router-dom";
import Nav from './Nav';
import Home from './home';
import Offer from "./Offer";
import Courses from "./Courses";
import Footer from './Footer'
import Certificate from "./Certificate";
import Recent from "./Recent";
import Get from "./Get";
import Contact  from "./Contact";
import Contactget from "./Contactget";
export default function Weblink()
{
    return(
        <div>
            <BrowserRouter>
            <Nav/>
            <Routes>
                <Route path="/" element={[<Home/>]}></Route>
                <Route path="/Offer" element={[<Offer/>]}></Route>
                <Route path="/Course" element={[<Courses/>]}></Route>
                <Route path="/Staff" element={[<Certificate/>]}></Route>
                 <Route path="/Blog" element={[<Recent/>]}></Route>
                 <Route path="/Get" element={[<Get/>]}></Route>
                 <Route path="/Contact" element={[<Contact/>]}></Route>
                 <Route path="/Cget" element={[<Contactget/>]}></Route>
            </Routes>
            <Footer/>
            </BrowserRouter>
        </div>
    )
}