import { useState } from "react"
import axios from "axios"
export default function Footer(){
   const [data,setdata] = useState({
              Email:""
          })

          const form = (e) =>{
            setdata({
                ...data,
                [e.target.name] : e.target.value 
            })
          }

          const submit = (e) => {
        e.preventDefault();
        axios.post("https://6888a2d1adf0e59551bac2a4.mockapi.io/hardik", data)

        setdata({
            Email:""
        })
    }
    return(
          

        <div>
             <div class="row">
                 <div class="col-md-3">
                    <h1>Have a Questions?</h1>
                    <p>	203 Fake St. Mountain View,<br/> San Francisco, California, USA</p>
                    <p>+2 392 3929 210</p>
                    <p>	info@yourdomain.com</p>
                 </div>

                  <div className="col-md-3"> 
                    <div class="d-flex">
                        <div>
                    <img src="https://www.bing.com/th/id/OIP.LFPuRTXXBA5hQi3RveP0GAHaG1?w=201&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2" style={{width:"100px",height:"100px"}}></img>
                    </div>
                    <div class="">
                     <p>Even the all-<br/>powerful Pointing<br/> has no control<br/> about</p>
                     <p>June 27, 2019</p>
                     <p> Admin  19</p>
                     </div>
                     </div>
                     <div class="d-flex">
                        <div>
                    <img src="https://www.bing.com/th/id/OIP.LFPuRTXXBA5hQi3RveP0GAHaG1?w=201&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2" style={{width:"100px",height:"100px"}}></img>
                    </div>
                    <div class="">
                     <p>Even the all-<br/>powerful Pointing<br/> has no control<br/> about</p>
                     <p>June 27, 2019</p>
                     <p> Admin  19</p>
                     </div>
                     </div>

                 </div>
             
             <div className="col-md-3">
                <h1>Links</h1>
                <a href="/">HOME</a><br/>
                <a href="/Offer">About</a><br/>
                <a href="/Course">Services</a><br/>
                <a href="Staff">Deparments</a><br/>
                <a href="Blog">Contact</a>
                
              </div>
              <div class="col-md-3">
                   <form onSubmit={submit}>
                   <h1>Subscribe Us!</h1>
                   <input type="email" name="Email" onChange={form}  value={data.Email}placeholder="Enter email Address"></input><br/>
                   <input type="button" value="Subscribes"></input>
                   </form>

                   <p>Connect With us</p>
                </div>  
             </div>
        </div>
    )
}