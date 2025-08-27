import { useState } from "react";
import axios from 'axios';
export default function Form(){
    const[data,setdata]=useState({
        name:"",
        password:"",
        email:""
    });
    const form = (e) => {
        setdata({
            ...data,
            [e.target.name]:e.target.value
        });
    }

        const submit = (e) => {
            e.preventDefault();
           axios.post("https://6888a2d1adf0e59551bac2a4.mockapi.io/hardik",data)
           setdata({
             name:"",password:"",email:""
           });
            
        
    }
    
    return(
        <div>
            <form onSubmit={submit}>
                <input type="text" name="name" id="name" placeholder="enter a name" value={data.name}onChange={form}></input>
                 <input type="password" name="password" id="password" placeholder="enter a password" value={data.password} onChange={form}></input>
                 <input type="email" name="email" id="email" placeholder="enter a email" value={data.email} onChange={form}></input>
                 <button type="submit">submit</button>
            </form>
        </div>
    )
}