import './Contact.css'
export default function Contact() {
    return (
        <div>
            <div id="contact">
                <div class="container">
                    <center>
                        <div style={{backgroundColor:'skyblue'}} className="p-3">
                        <h1 >Contact Us</h1>
                        </div>
                    </center>
                    <div class="row mt-5 container">
                        <div class="col-md-4 col-lg-4 mb-4" data-aos="flip-right">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3915.540568570961!2d77.000238779641!3d11.073031160974855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8f700203e268b%3A0x988a7b2a12279d46!2sIcon%20PG%20hostel!5e0!3m2!1sen!2sin!4v1751478608010!5m2!1sen!2sin"
                                width="400" height="465" style={{border:0}} allowfullscreen="" loading="lazy"
                                referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                        <div class="col-md-8 col-lg-8 mb-4" data-aos="flip-left">
                            <div class="d-flex ms-5">
                                <div class="d-flex">
                                    <div><i class="fa-solid fa-location-dot" style={{color: 'blue',fontSize: '30px'}}></i></div>
                                    <div class="ps-1">20,Collector Sivakumar Street,<br />Saibaba Colony,<br />Coimbatore - 641038
                                    </div>
                                </div>
                                <div class="d-flex ms-4">
                                    <div><i class="fa-solid fa-envelope" style={{color: 'blue',fontSize: '30px'}}></i></div>
                                    <div class="ps-1">kreevtechsolutions@gmail.com</div>
                                </div>
                                <div class="d-flex ms-4">
                                    <div><i class="fa-solid fa-phone" style={{color: 'blue',fontSize: '30px'}}></i></div>
                                    <div class="ps-1">7397099745</div>
                                </div>
                            </div><br />

                            <div class="row ms-5" data-aos="flip-left">
                                <div class="d-flex gap-5">
                                    <div class="col-md-4">
                                        <input type="text" placeholder="your name" required style={{width: '250px'}}></input>
                                    </div>
                                    <div class="col-md-4">
                                        <input type="email" placeholder="your email" required style={{width: '325px'}}></input>
                                    </div>
                                </div>
                            </div>

                            <div class="row ms-5 mt-3" data-aos="flip-left">
                                <div class="col-md-8">
                                    <input type="number" placeholder="your number" required style={{width: '600px', height: '30px'}}></input>
                                </div>
                            </div>

                            <div class="row ms-5 mt-3" data-aos="flip-left">
                                <div class="col-md-8">
                                    <select style={{width: '600px',height: '35px'}} required>
                                        <option>Select a subject</option>
                                        <option>Web Designing</option>
                                        <option>Web Development</option>
                                        <option>Python Programming</option>
                                        <option>Data Science & Machine Learning</option>
                                        <option>Java Programming</option>
                                        <option>Flutter Development</option>
                                    </select>
                                </div>
                            </div>

                            <div class="row ms-5 mt-3" data-aos="flip-left">
                                <div class="col-md-8">
                                    <textarea name="message" placeholder="Message" rows="8" cols="79"></textarea>
                                </div>
                            </div>
                            <center>
                                <div class="btn btn-primary mt-2">Send Message</div>
                            </center>
                        </div>
                    </div>
                </div>
            </div>

            <div class="py-2 bg-primary text-light">
                <div class="container">
                    <div class="row mt-5">
                        <div class="col-md-3 col-lg-4 mb-4">
                            <div class="card-body d-flex">
                                <div>
                                    <h5 class="card-title ps-3">KREEVTECH SOLUTION</h5><br />
                                    <p class="card-text ps-3" style={{textAlign:'justify'}}>KREEVTECH SOLUTION's is a Software
                                        Development & Training Company.
                                        We offer a diverse portfolio of programs to suit every skill level, from beginner to
                                        advanced. Our goal is to empower software developers and organizations globally with the
                                        skills and knowledge needed to succeed. Our courses provide a solid foundation in
                                        development principles, ensuring that students can code with precision and speed.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3 col-lg-4 mb-4">
                            <div class="card-body d-flex">
                                <div>
                                    <h5 class="card-title ps-5 ms-5">Useful Links</h5><br />
                                    <div class="ms-5 ps-5">
                                        <a class="hov" style={{color: 'white'}} href="/">Home</a><br /><br />
                                        <a class="hov" style={{color: 'white'}} href="/About">About us</a><br /><br />
                                        <a class="hov" style={{color: 'white'}} href="/Product">Product</a><br /><br />
                                        <a class="hov" style={{color: 'white'}} href="/Service">Service</a><br /><br />
                                        <a class="hov" style={{color: 'white'}} href="/Contact">Contact us</a><br />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3 col-lg-4 mb-4">
                            <div class="card-body d-flex">
                                <div>
                                    <h5 class="card-title ps-3">Contact Us</h5><br />
                                    <p class="card-text ps-3"><b>Address:</b> 20,Collector Sivakumar Street,<br />
                                        Saibaba Colony, Coimbatore - 641038 <br />
                                        <b>Phone:</b> 73970 99745 <br />
                                        <b>Email:</b> kreevtechsolutions@gmail.com
                                        <br /><br />
                                        <a href="https://www.instagram.com/kreevtech_solutions/?igsh=MXh3MWdmZ3hoMXQ3bQ%3D%3D#">
                                            <i class="fa-brands fa-instagram"></i></a>
                                        <a href="https://www.youtube.com/@ArunThangaiah.b">
                                            <i class="fa-brands fa-square-youtube"></i></a>
                                        <a href="https://www.linkedin.com/in/kreevtech-solutions-llp-90a688338/">
                                            <i class="fa-brands fa-linkedin"></i></a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <center>
                <footer class="bg-light p-3"><i class="fa-regular fa-copyright"></i>www.kreevtechsolutions.com. All Rights Reserved</footer>
            </center>
        </div>
    )
}