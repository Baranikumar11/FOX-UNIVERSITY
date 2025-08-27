import Client from './Client';
export default function Home() {
    return (
        // <div>
        //     <div class="row">
        //         <div class="col-md-4">
        //             <div>
        //                 <h1>Welcome to my Web<br />Development Portofolio!</h1>
        //             </div>
        //         </div>

        //     <div class="col-md-4">
        //         <div>
        //             <p>I'm Lily Smith, a passionate web developer based in USA. Here, you'll get a glimpse of my journey in the world of web development, where creativity meets functionality.</p>
        //         </div>
        //     </div>


        //         <div class="col-md-8">
        //             <img src="https://themewagon.github.io/Next.js-Tailwind-CSS-Portfolio-Template/image/image-7.svg"></img>
        //         </div>
        //     </div>

        // </div>
        <div class="row d-flex pt-5">
            <div class="col-md-6 pt-5" style={{ textAlign: 'left' }}>
                <div class="container ps-5 flex-column flex-md-row align-items-center justify-content-between">
                    <h1>Welcome to my Web<br /> Development Portofolio!</h1>
                    <p style={{ fontSize: 20, color: 'grey' }}>I'm Lily Smith, a passionate web developer based in USA. Here, you'll get a glimpse of my journey in the world of web development, where creativity meets functionality.</p>
                    <h5> your Email</h5>
                    <div class="d-flex gap-4">
                        <div>
                            <input type="text" placeholder="enter a mail" style={{ width: 300, height:50 }}></input>
                        </div>
                        <div style={{width:200,height:50}}>
                            <button type="button" class="btn btn-dark btn-lg">Our Services</button>
                        </div>
                    </div>
                    <p>read my <span style={{textDecoration:'underline'}}>terms and contition</span> </p>
                </div>
            </div>
            <div class="col-md-6">
                <div data-aos="fade-up">
                    <img src="https://themewagon.github.io/Next.js-Tailwind-CSS-Portfolio-Template/image/image-7.svg" class="img-fluid mt-4 mt-md-0" height="100px"
                        width="600px" gap="10px" alt="..."></img>
                </div>
            </div>
            <Client />
        </div>
    );
}