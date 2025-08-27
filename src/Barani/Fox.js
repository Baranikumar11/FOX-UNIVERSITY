import Courses from "./Courses";
export default function Fox(){
    return(
        <div>
        <div style={{position:"relative",height:"100vh",overflow:"hidden"}}>
            <div
            style={{backgroundImage:'url("https://cdn.pixabay.com/photo/2023/01/26/02/15/books-7744938_1280.jpg")',backgroundSize:"cover",top:"0",bottom:"0",right:"0",left:"0",opacity:"0.5",zIndex:1,position:"absolute"}}>
            </div>
            <div class="row mt-5 pt-5 ms-5 me-5 " style={{position:"relative",zIndex:1,}}>
                <div class="col-md-6">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/WLDbfSppbzE?si=w7rxC2k3dtXXzagu" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div > 
                <div class="col-md-6 ps-5">
                     <h1>Fox University</h1>
                     <p>Separated they live in. A small river named Duden flows by<br/> their place and supplies it with the necessary regelialia. It is a<br/> paradisematic country. A small river named Duden flows by<br/> their place and supplies it with the necessary regelialia. It is a <br/>paradisematic country, in which roasted parts of sentences fly<br/> into your mouth.</p>
                </div>
                 </div>
                 <div class="row mt-5 ms-5" style={{zIndex:1,position:"relative"}}>
                    <div class="col-md-3">
                    <b>18</b>
                    <h2>Certified Teachers</h2>
                 </div>
                 <div class="col-md-3">
                    <b>401</b>
                    <h2>Students</h2>
                 </div>
                 <div class="col-md-3">
                    <b>30</b>
                    <h2>Courses</h2>
                 </div>
                 <div class="col-md-3">
                    <b>50</b>
                    <h2>Awards Won</h2>
                 </div>
                 </div>
                
        </div>
         <Courses />
        </div>
    )
}