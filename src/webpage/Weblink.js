import { BrowserRouter ,Routes,Route} from "react-router-dom";
import Home from './Home'
import About from './About'
import Service from './Service'
import Product from './Product'
import Contact from './Contact'
export default function Weblink(){
    return(
        <div>
            <BrowserRouter>
            <Routes>
                <Route path="/" element={[<Home/>]}></Route>
                <Route path="/About" element={[<About/>]}></Route>
                <Route path="/Service" element={[<Service/>]}></Route>
                <Route path="/Product" element={[<Product/>]}></Route>
                <Route path="/Contact" element={[<Contact/>]}></Route>
            </Routes>
            </BrowserRouter>
        </div>
    )
}