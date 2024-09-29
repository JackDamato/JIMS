import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const GetCurrentUser = () => {
    const navigate = useNavigate();

    const [userData, setUserData] = useState({
        password: '',
        email: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:5001/api/auth', userData);
            if (response.status === 200) {
              // User exists
                navigate('/workspaces/JIMS/linked-app/src/pages/LogIn.js');         
            }
            else {
                navigate('/workspaces/JIMS/linked-app/src/pages/Register.js');
            }
        } catch (error) {
            navigate('/workspaces/JIMS/linked-app/src/pages/Register.js');
            console.error('Error finding user:', error);
        }
    };

    return (
        <>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>

        <div className="user-profile">
            <h1>Find your account</h1>
            <form onSubmit={handleSubmit}>
                <div className='user-password-wrapper'>
                <div className='input-fields user-password'>
                    <label>Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={userData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className='input-fields user-password'>
                    <label>Password:</label>
                    <input
                        type="text"
                        name="password"
                        value={userData.password}
                        onChange={handleChange}
                        required
                    />
                </div>
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
        </>
    );
};

export default GetCurrentUser;
