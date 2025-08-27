export default function Product() {
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
            <div id="product">
                <div class="container">
                    <center className="bg-info p-3">
                        <h2>PRODUCTS</h2>
                        <p class="text-muted">We Provide a Quality Services for our Clients & Students and Make them Satisfied.
                        </p>
                    </center>
                    <div class="row mt-5">
                        <div class="col-md-6 col-lg-6 mb-4" data-aos="fade-right">
                            <div class="card h-100 shadow">
                                <div class="card-body d-flex ">
                                    <div class="align-content-center">
                                        <i class="fa-solid fa-desktop logo-icon"></i>
                                    </div>
                                    <div>
                                        <h5 class="card-title ps-3">Website Development</h5>
                                        <p class="card-text ps-3">Unique, responsive, and user-friendly designs that reflect
                                            your brand's identity.Robust, scalable, and secure websites built on the latest
                                            technologies.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-6 mb-4" data-aos="fade-right">
                            <div class="card h-100 shadow">
                                <div class="card-body d-flex ">
                                    <div class="align-content-center">
                                        <i class="fa-solid fa-desktop logo-icon"></i>
                                    </div>
                                    <div>
                                        <h5 class="card-title ps-3">Web Application Development</h5>
                                        <p class="card-text ps-3">Our team of expert developers craft scalable, secure and
                                            high-performance solutions that meet your unique needs.Tailored solutions that
                                            address your specific business challenges.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-6 mb-4" data-aos="fade-left">
                            <div class="card h-100 shadow">
                                <div class="card-body d-flex ">
                                    <div class="align-content-center">
                                        <i class="fa-solid fa-desktop logo-icon"></i>
                                    </div>
                                    <div>
                                        <h5 class="card-title ps-3">Mobile Application Development</h5>
                                        <p class="card-text ps-3">we harness the potential of mobile technology to drive
                                            business growth and innovation.Seamless apps that work across Android, iOS.Enhancing
                                            performance, security, and user experience .</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-6 mb-4" data-aos="fade-left">
                            <div class="card h-100 shadow">
                                <div class="card-body d-flex ">
                                    <div class="align-content-center">
                                        <i class="fa-solid fa-gauge-high logo-icon"></i>
                                    </div>
                                    <div>
                                        <h5 class="card-title ps-3">ERP & CRM</h5>
                                        <p class="card-text ps-3">Our team has extensive experience in ERP and CRM
                                            implementation ,Seamless integration with existing systems and processes,Ongoing
                                            support and training to ensure success</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <div class="container">
                    <center className="bg-info p-3">
                        <h2>Why choose us?</h2>
                        <p class="text-muted">At KREEVTECH SOLUTION's LLP, we pride ourselves on our unique blend of technical
                            expertise, innovative approach, and commitment to excellence</p>
                    </center>
                    <div class="row mt-5">
                        <div class="col-md-3 col-lg-4 mb-4" data-aos="fade-up">
                            <div class="card h-100 shadow pt-3">
                                <center><i class="fa-regular fa-gem" style={{fontSize: '50px'}}></i></center>
                                <div class="card-body d-flex ">
                                    <div>
                                        <h5 class="card-title ps-3">Expert Team</h5>
                                        <p class="card-text ps-3">Our team of seasoned professionals has years of experience in
                                            software development, web designing, and mobile app development.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3 col-lg-4 mb-4" data-aos="fade-up">
                            <div class="card h-100 shadow pt-3">
                                <center><i class="fa-solid fa-language" style={{fontSize: '50px'}}></i></center>
                                <div class="card-body d-flex ">
                                    <div>
                                        <h5 class="card-title ps-3">Customer Approach</h5>
                                        <p class="card-text ps-3">We prioritize our clients' needs, delivering tailored
                                            solutions that meet their specific goals and objectives.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3 col-lg-4 mb-4">
                            <div class="card h-100 shadow pt-3">
                                <center><i class="fa-solid fa-lightbulb" style={{fontSize: '50px'}}></i></center>
                                <div class="card-body d-flex">
                                    <div>
                                        <h5 class="card-title ps-3">Innovative Solutions:</h5>
                                        <p class="card-text ps-3">We stay ahead of the curve, leveraging the latest technologies
                                            and trends to drive innovation and excellence.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}