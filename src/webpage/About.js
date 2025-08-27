import './About.css'
export default function About() {
    return (
        <div>
           <nav class="nb">
                <div> <img src="https://www.kreevtechsolutions.com/images/image-removebg-preview.png" height="60px"
                    width="300px" alt="company logo"></img></div>
                <div class="n">
                    <li> <a href="/">Home</a></li>
                    <li> <a href="/About">About us</a></li>
                    <li> <a href="/Service">Service</a></li>
                    <li> <a href="/Product">Product</a></li>
                    <li> <a href="/Contact">Contact us</a></li>
                </div>
            </nav>
            <div className="container" id="about">
                <center style={{backgroundColor:'skyblue'}} className='p-3'>
                    <h1>About us</h1>
                    <p class="text-muted fs-5">We love Our Passion!<br />We Provide a Quality Services for our Clients & Students
                        <br /> and Make them Satisfied.
                    </p>
                </center>

                <div class="row p-5">
                    <div class="col-md-6">
                        <p style={{ textAlign: 'justify' }}>KREEVTECH SOLUTION's is a Software Development & Training Company. We offer
                            a diverse portfolio of
                            programs to suit every skill level, from beginner to advanced. Our goal is to empower software
                            developers and organizations globally with the skills and knowledge needed to succeed. Our courses
                            provide a solid foundation in development principles, ensuring that students can code with precision and
                            speed.</p>
                        <br />
                        <div class="d-flex gap-3">
                            <div class="logo-icon"><i class="fa-solid fa-desktop"></i></div>
                            <div>
                                <h5>Website Development</h5>
                                <p>We design and develop custom software solutions to meet the unique needs of our clients.</p>
                            </div>
                        </div>
                        <div class="d-flex pt-3 gap-3">
                            <div class="logo-icon"><i class="fa-solid fa-desktop"></i></div>
                            <div>
                                <h5>Software Development</h5>
                                <p>Our team creates visually stunning and user-friendly websites that drive engagement and
                                    conversion.</p>
                            </div>
                        </div>
                        <div class="d-flex pt-3 gap-3">
                            <div class="mbl-icon"><i class="fa-solid fa-mobile-screen-button"></i></div>
                            <div>
                                <h5>Mobile app development</h5>
                                <p>We craft innovative mobile apps that deliver seamless user experiences and drive business
                                    results.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <img src="https://www.kreevtechsolutions.com/images/KT%201.jpg" class="img-fluid" alt="Client"></img>
                    </div>
                </div>


                <div class="py-5 bg-light">
                    <div class="row p-5">
                        <div class="col-md-6">
                            <img src="https://www.kreevtechsolutions.com/images/blog-2.jpg" class="img-fluid" alt="Vision"
                                width="1000px"></img>
                        </div>
                        <div class="col-md-6">
                            <h2>VISION</h2>
                            <p style={{ textAlign: 'justify' }}>At KREEVTECH SOLUTION's LLP , our vision is to continuously evolve and
                                expand as a leading IT service
                                provider, delivering top-notch web and software development solutions that exceed global standards.
                                We strive to propel our customers towards success, amplifying their achievements and showcasing
                                their excellence. Our core values of innovation, agility, and customer-centricity will drive us
                                towards realizing this vision.</p>
                        </div>
                    </div>
                    <div class="row p-5 pb-3">
                        <div class="col-md-6">
                            <h2>MISSION</h2>
                            <p style={{ textAlign: 'justify' }}>Our mission at KREEVTECH SOLUTION's LLP is to empower a team of
                                dedicated professionals, fostering a
                                culture of innovation, exploration, and growth. We encourage our team members to take ownership of
                                their technical and professional development, driving excellence in everything they do. With a
                                transparent and open work environment, we prioritize collaboration, creativity, and customer
                                satisfaction, ensuring that our solutions meet the highest standards of quality and exceed
                                expectations.</p>
                        </div>
                        <div class="col-md-6">
                            <img src="https://www.kreevtechsolutions.com/images/KT%201.jpg" class="img-fluid" alt="Mission"></img>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}