// import Certify from "./Certify";
export default function Img(){
    return (
        <div id="carouselExample" class="carousel slide">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src="https://img.freepik.com/premium-photo/group-four-young-attractive-asian-girls-college-students-studying-together-using-laptop-university-campus-outdoor-concept-education-friendship-college-students-life_102814-2904.jpg" class="d-block w-100" alt="..."></img>
                     <div className="carousel-caption d-none d-md-block text-start" style={{ top: '30%', left: '10%', transform: 'translateY(-20%)' }}>
                        <h1 class="mt-5">Education Need,s <br /> Complete Solution</h1>
                        <p class="mt-3">A Small river Named Duden flows by their place and suppliesit with<br/>the necessary regelialia.</p>
                        <button type="button" class="btn" style={{backgroundColor:"Orange"}}>Contact Us</button></div>
                </div>
                <div class="carousel-item">
                    <img src="https://www.bing.com/th/id/OIP.LFPuRTXXBA5hQi3RveP0GAHaG1?w=201&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2" class="d-block w-100" alt="..."></img>
                     <div className="carousel-caption d-none d-md-block text-start" style={{ top: '30%', left: '10%', transform: 'translateY(-20%)' }}>
                        <h1 class="mt-5" style={{color:"black"}}>University, College <br /> School Education</h1>
                        <p class="mt-3" style={{color:"black"}}>A Small river Named Duden flows by their place and suppliesit with<br/>the necessary regelialia.</p>
                        <button type="button" class="btn" style={{backgroundColor:"Orange"}}>Contact Us</button></div>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
            {/* <Certify /> */}
        </div>
    )
}