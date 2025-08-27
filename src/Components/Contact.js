import './css/Contact.css';
import Footer from './Footer';
export default function Contact() {
    return (
        <div className='container'>
            <div className="mt-5">
                <h1 style={{ fontSize: '50px' }}><b>Contact Us</b></h1>
                <p className="mt-3" style={{ color: 'gray', fontSize: '20px' }}>Ready to get started? Feel free to reach out through <br />the contact form, and let's embark on a journey of <br /> innovation and success.</p>
            </div>
            <div class="row mt-5">
                <div class="col-md-4 col-lg-4 mb-4" data-aos="flip-right" id="C">
                    <h4>Contact Information</h4>
                    <p style={{color:'gray'}}>Fill up the form and our Team will get <br/>back to you within 24 hours.</p>
                    <div style={{fontWeight:'bold'}}>
                        <p><i class="fa-solid fa-phone"></i>(+91)-9876543210</p>
                        <p><i class="fa-solid fa-envelope"></i>materialtailwind@gmail.com</p>
                        <p><i class="fa-solid fa-ticket"></i>Open Support Ticket</p>
                        
                    </div>
                </div>
                <div class="col-md-8 col-lg-8 mb-4" data-aos="flip-left">

                    <div class="row ms-5" data-aos="flip-left">
                        <div class="d-flex gap-5" style={{ textAlign: 'left' }}>
                            <div class="col-md-4">
                                <label for="name" id="c">First Name</label>
                                <input type="text" placeholder="eg. John" required style={{ width: '300px' }} id="f"></input>
                            </div>
                            <div class="col-md-4 ps-5">
                                <label for="name" id="c">Last Name</label>
                                <input type="text" placeholder="eg. Smith" required style={{ width: '300px' }} id="f"></input>
                            </div>
                        </div>
                    </div>

                    <div class="row ms-5 mt-3" data-aos="flip-left">
                        <div class="d-flex" style={{ textAlign: 'left' }}>
                            <div class="col-md-4">
                                <label for="name" id="c">Email Address</label>
                                <input type="text" placeholder="eg. johnsmith@gmail.com" required style={{ width: '620px' }} id="f"></input>
                            </div>
                        </div>
                    </div>

                    <div class="row ms-5 mt-3" data-aos="flip-left">
                        <div class="col-md-8">
                            <p style={{ textAlign: 'left' }} id="c">What are you interested on?</p>
                            <div className="d-flex gap-3" style={{color:'gray'}}>
                                <label>
                                    <input type="radio" name="interest" value="web" /> Design
                                </label>
                                <label>
                                    <input type="radio" name="interest" value="mobile" /> Development
                                </label>
                                <label>
                                    <input type="radio" name="interest" value="design" /> Support
                                </label>
                                <label>
                                    <input type="radio" name="interest" value="marketing" /> Others
                                </label>
                            </div>
                        </div>
                    </div>

                    <div class="row ms-5 mt-3" data-aos="flip-left">
                        <div class="d-flex" style={{ textAlign: 'left' }}>
                            <div class="col-md-4">
                                <label for="message" id="c">Your Message</label>
                                <input type="text" required style={{ width: '620px',height:'100px' }} id="f"></input>
                            </div>
                        </div>
                    </div>

                    <div class="btn btn-dark mt-2" style={{marginLeft:'485px',color:'white'}}>Send Message</div>
                    
                </div>
            </div>
            <Footer/>
        </div>
    )
}