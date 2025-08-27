import './Request.css'
import React,{useState} from 'react';
import axios from 'axios'
export default function Request()
{
     const [data, setdata] = useState({
        FirstName: "",
        LastName: "",
         Course: "",
            Phone: "",
            Message:""
    });

      const form = (e) => {
        setdata({
            ...data,
            [e.target.name]: e.target.value
        });
    };


     const submit = (e) => {
        e.preventDefault();
        axios.post("https://6888a2d1adf0e59551bac2a4.mockapi.io/barani", data)

        setdata({
       FirstName: "",
        LastName: "",
            Course: "",
            Phone: "",
            Message:""
        })
    };



    return(
        <div className='container'>
         <div className=" h-100 pb-5 " style={{ position: 'relative', zIndex: 1 }}>
            <div
            style={{backgroundImage:'url("https://cdn.pixabay.com/photo/2023/01/26/02/15/books-7744938_1280.jpg")',backgroundSize:"cover",top:"0",bottom:"0",right:"0",left:"0",opacity:"0.5",zIndex:1,position:"absolute"}}>
            </div>
                <form onSubmit={submit}>
                    <div className="row h-50 mt-5 pt-5">
                        <div className="col-lg-6"></div>
                        <div className="col-lg-6" style={{position: 'relative', zIndex: 1}}>
                            <h1>Request A Quote</h1>
                            <p className='pt-3'>
                                Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
                                there live the blind texts.
                            </p>
                            <div className="row" data-aos="flip-left">
                                <div className="d-flex gap-5" style={{ textAlign: 'left' }}>
                                    <div className="col-md-4">
                                        <label>First Name</label>
                                        <input
                                            type="text"
                                            placeholder="eg. John"
                                            required
                                            style={{ width: '250px' }}
                                            name="FirstName"
                                            onChange={form}
                                            value={data.FirstName}
                                           
                                            id="f"
                                        />
                                    </div>
                                    <div className="col-md-4 ps-5">
                                        <label>Last Name</label>
                                        <input
                                            type="text"
                                            placeholder="eg. Smith"
                                            required
                                            style={{ width: '250px' }}
                                            name="LastName"
                                            onChange={form}
                                            value={data.LastName}
                                            id="f"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className='row mt-4'>
                                <div className="d-flex gap-5" style={{ textAlign: 'left' }}>
                                <div className='col-md-4'>
                                    <label>Choose a course</label><br />
                                    <select name="Course" onChange={form} value={data.Course }id="f" style={{ width: '250px' }}>
                                        <option value="" disabled>select</option>
                                        <option value="HTML">HTML</option>
                                        <option value="CSS">CSS</option>
                                        <option value="JS">JS</option>
                                        <option value="Python">Python</option>
                                    </select>
                                </div>
                                <div className='col-md-4 ps-5'>
                                    <label>Phone</label>
                                    <input type="number" name="Phone" onChange={form} value={data.Phone} placeholder="Eg. 9876543210" required id="f" style={{ width: '250px' }}></input>
                                </div>
                                </div>
                            </div>
                            <div className="row mt-4">
                                <div className="d-flex gap-5" style={{ textAlign: 'left' }}>
                                    <div className="col-md-4">
                                        <label>Message</label>
                                        <input
                                            type="text"
                                            placeholder="Message"
                                            required
                                            style={{ width: '250px' }}
                                            name="Message"
                                            onChange={form}
                                            value={data.Message}
                                            id="f"
                                        />
                                    </div>
                                    <div className="col-md-4 ps-5 pt-2 ms-4">
                                        <button type="submit" value="submit" style={{ borderRadius: "50px",padding:'10px',width:'200px',backgroundColor:'orangered',color:'white'}}>Request For Quote</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        </div>
                        </form>
                    </div>
                    </div>
                   
                 
    )
}