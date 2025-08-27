import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Get() {
    const [userData, setUserData] = useState([]);

    useEffect(() => {
        axios.get("https://6888a2d1adf0e59551bac2a4.mockapi.io/barani")
            .then(res => setUserData(res.data));
    }, []);

    return (
        <div style={{ padding: '20px'}}>
            <center>
            <h2 className='pb-4'>Quote Details</h2>
            {userData.length > 0 ? (
                <table border="1" cellPadding="10" style={{width: '80%',backgroundColor: 'white',boxShadow: '0 0 10px black'}}>
                    <thead>
                        <tr style={{ backgroundColor: 'green', color: 'white' }}>
                            <th style={{ border: '2px solid black' }}>FirstName</th>
                            <th style={{ border: '2px solid black' }}>LastName</th>
                            <th style={{ border: '2px solid black' }}>Course</th>
                            <th style={{ border: '2px solid black' }}>Phone</th>
                            <th style={{ border: '2px solid black' }}>Message</th>
                        </tr>
                    </thead>
                    <tbody>
                        {userData.map((user, index) => (
                            <tr key={index} style={{ textAlign: 'left' }}>
                                <td style={{ border: '2px solid black' }}>{user.FirstName}</td>
                                <td style={{ border: '2px solid black' }}>{user.LastName}</td>
                                <td style={{ border: '2px solid black' }}>{user.Course}</td>
                                <td style={{ border: '2px solid black' }}>{user.Phone}</td>
                                <td style={{ border: '2px solid black' }}>{user.Message}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <p>Loading data...</p>
            )}
            </center>
        </div>
    );
}