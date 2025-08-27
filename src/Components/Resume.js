import Say from './Say'
export default function Resume(){
    return(
         <div class="container mt-5">
        <div class="row  " style={{textAlign:'left'}}>
             
              <div class="col-md-6">
             <h1>My Resume</h1>
             <p>Highly skilled and creative Web Developer with 5+ years of experience in crafting visually stunning and functionally robust websites and web applications.</p>
             <button>VIEW MORE</button>
             </div>
             <div class="col-md-6 ps-5">
                 <h5>Bachelor of Science in Computer Science</h5>

                 <h5>Certified Web Developer</h5>

                 <h5>Frontend Framework Proficiency Certification</h5>
             </div>
             </div>
             <Say />
        </div>
    )
}