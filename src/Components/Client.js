import Project from './Project'
export default function Client(){
    return(
        <div class="mt-5 pt-5">
             <h5>My awesome clients</h5>
             <div class="d-flex container gap-5 justify-content-evenly mt-4">
                 <img src="https://themewagon.github.io/Next.js-Tailwind-CSS-Portfolio-Template/logos/logo-coinbase.svg" style={{width:'150px'}}></img>
                  <img src="https://themewagon.github.io/Next.js-Tailwind-CSS-Portfolio-Template/logos/logo-spotify.svg" style={{width:'150px'}}></img>
                  <img src="https://themewagon.github.io/Next.js-Tailwind-CSS-Portfolio-Template/logos/logo-pinterest.svg" style={{width:'150px'}}></img>
                   <img src="https://themewagon.github.io/Next.js-Tailwind-CSS-Portfolio-Template/logos/logo-google.svg" style={{width:'150px'}}></img>
                    <img src="https://themewagon.github.io/Next.js-Tailwind-CSS-Portfolio-Template/logos/logo-amazon.svg" style={{width:'150px'}}></img>
                     <img src="https://themewagon.github.io/Next.js-Tailwind-CSS-Portfolio-Template/logos/logo-netflix.svg" style={{width:'150px'}}></img>
                </div>
                <div class="mt-5">
                    <h5>MY SKILLS</h5>
                    <h1><b>What I do</b></h1>
                    <p style={{textAlign:'center', color:'grey', fontSize:'20px'}}>I'm not just a developer; I'm a digital dreamweaver. Crafting immersive online experiences is not just a job<br /> but my calling. Discover below how I can help you.</p>
                </div>


                <div class="ms-5 me-5 row g-5 mt-5 ">
                     <div class="col-md-4">
                          <h4>Frontend Web Development:</h4>
                          <p>Creating beautiful and functional web experiences is my forte. Using the latest technologies and best practices, I design and build websites that captivate and engage users.</p>
                     </div>
                     <div class="col-md-4">
                          <h4>Mobile App Development</h4>
                          <p>I specialize in creating responsive and intuitive mobile apps that work seamlessly across iOS & Android devices. From concept to deployment, I handle every stage of the development process.</p>
                     </div>
                     <div class="col-md-4">
                         <h4>Technology Stack</h4>
                         <p>I'm well-versed in the industry's most popular frontend technologies, including HTML5, CSS3, JavaScript, and frameworks like React and React Native.</p>
                     </div>

                </div>

                <div class="ms-5 me-5 row g-5 mt-5 ">
                     <div class="col-md-4">
                          <h4>Web Optimization</h4>
                          <p>Creating beautiful and functional web experiences is my forte. Using the latest technologies and best practices, I design and build websites that captivate and engage users.</p>
                     </div>
                     <div class="col-md-4">
                          <h4>User-Centric Design</h4>
                          <p>I specialize in creating responsive and intuitive mobile apps that work seamlessly across iOS & Android devices. From concept to deployment, I handle every stage of the development process.</p>
                     </div>
                     <div class="col-md-4">
                         <h4>Testing and Quality Assurance</h4>
                         <p>I'm well-versed in the industry's most popular frontend technologies, including HTML5, CSS3, JavaScript, and frameworks like React and React Native.</p>
                     </div>

                </div>
                <Project />
        </div>
    )
}