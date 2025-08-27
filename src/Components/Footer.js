import './css/Footer.css'

export default function Footer() {
    return (
        <div className="container mt-5">
            <div class="fb">
                    <div><p className="mt-3" style={{textAlign:'left'}}>© 2025 Made with Material Tailwind by Creative Tim. Distributed by ThemeWagon</p></div>
                    <div class="n">
                        
                        <li> <a href="#" style={{textDecoration:'none',color:'black'}}>Home</a></li>
                        <li> <a href="#" style={{textDecoration:'none',color:'black'}}>About us</a></li>
                        <li> <a href="#" style={{textDecoration:'none',color:'black'}}>Blog</a></li>
                        <li> <a href="#" style={{textDecoration:'none',color:'black'}}>Service</a></li>
                        <button class="btn btn-outline-dark" type="submit" style={{backgroundColor:'black',color:'white'}}>Subscribe</button>
                    </div>
            </div>
        </div>
    )
}