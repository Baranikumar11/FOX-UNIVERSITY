import { useState } from "react";
import axios from "axios"

export default function Sigin(){


    // const [data,setdata]=useState({
    //     name:"",
    //     email:"",
    //     password:""
    // })

    // const [name,setname]=useState();
    // const [email,setEmail]=useState();

    // const [password,setpassword]=useState();

    // const [gender,setgender]=useState();


      const [data, setdata]=useState({
        name:"",
        email:"",
        password:"",
        gender:""

      });

    const form = (e)=>{

        setdata({
     ...data,
            [e.target.name]: e.target.value
        }
        )
        // setEmail({
        //     ...email,
        //     [e.target.email]:e.target.value
        // })

        // setpassword({
        //     ...password,
        //     [e.target.password]:e.target.value
        // })
        // setgender({
        //     ...gender,
        //     [e.target.gender]:e.target.value
        // })
    }


    const submit =(e)=>{

        e.preventDefault();
        axios.post("https://6888a2d1adf0e59551bac2a4.mockapi.io/barani",data)
   
        // console.log(name,email,password); 
        setdata({name: "",email:"",password:"",gender:"" })
        
    };
    


    return(
        <div>
       <form className="name form-control" onSubmit={submit} >
        <label>Name</label>
        <input type="text" name="name"  value={data.name} onChange={form} placeholder="Enter A name"  ></input>
          <label>Email</label>
        <input type="email" name="email" onChange={form} placeholder="Enter A email" value={data.email}></input>
          <label>Password</label>
        <input type="password" name="password" onChange={form} placeholder="Enater A password" value={data.password}></input>

        <br />
        <p>gender:</p>
        <input type="radio" name="gender" value="male"  onchange={form} checked={data.gender === "male"}></input><label>male</label>
        <input type="radio" name="gender" value="female"  onchange={form} checked={data.gender === "female"}></input><label>female</label>

        <input type="submit"></input>

       </form>
    </div>
    );
}