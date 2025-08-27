import Form from "./Form";
import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Formget(){
      const[userdata,setUserData]= useState({
         
      })
   
   
   
    return(
        <div>
            {userdata.lenght>0 ? (
            <table border="1">
            <thead><tr>
                  <th>Name</th><th>password</th><th>email</th></tr>
            </thead>
            <tbody>
                 {userData.map((user, index) => (
                   <tr key={index}>
                       <td>{user.name}</td>
                       <td>{user.password}</td>
                       <td>{user.email}</td>
                   </tr>
                 ))}
            </tbody>
            </table>
            ): (<p>Loading...</p>)}
        </div>
    )
}