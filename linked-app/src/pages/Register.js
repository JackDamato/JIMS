import "/workspaces/JIMS/linked-app/src/pages/Register.css"

import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const Register = () => {
    const navigate = useNavigate();

    const [userData, setUserData] = useState({
        username: '',
        password: '',
        email: '',
        name: '',
        age: '',
        gender: '',
        major: '',
        year: '',
        clubs: '',
        bio: ''
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
            const response = await axios.post('http://localhost:5001/api/users', userData);
            console.log('User added:', response.data);
            // Reset form
            setUserData({ 
                username: '',
                password: '',
                email: '',
                name: '',
                age: '',
                gender: '',
                bio: '',
                major: '',
                year: '',
                clubs: '' });  
            navigate('/workspaces/JIMS/linked-app/src/pages/RegistrationSuccess.js');         
        } catch (error) {
            console.error('Error adding user:', error);
        }
    };

    return (
        <>
        <h1>Welcome! Are you ready to get link'd?</h1>
        <div className="user-profile">
            <h1>Create User Profile</h1>
            <form onSubmit={handleSubmit}>
                <div className='user-password-wrapper'>
                <div className='input-fields user-password'>
                    <label>Username:</label>
                    <input
                        type="text"
                        name="username"
                        value={userData.username}
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

                <div className='spacer'></div>
                <hr></hr>
                <div className='spacer'></div>

                <div className='input-fields'>
                    <label>Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={userData.email}
                        onChange={handleChange}
                        required
                    ></input>
                </div>

                <div className='spacer'></div>
                <hr></hr>
                <div className='spacer'></div>

                <div className='other-info-wrapper'>
                <div className='input-fields other-info'>
                    <label>Name:</label>
                    <input
                        type="text"
                        name="name"
                        value={userData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className='input-fields other-info'>
                    <label>Age:</label>
                    <input
                        type="text"
                        name="age"
                        value={userData.age}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className='input-fields other-info'>
                    <label>Gender:</label>
                    <input
                        type="text"
                        name="gender"
                        value={userData.gender}
                        onChange={handleChange}
                        required
                    />
                </div>
                </div>

                <div className='spacer'></div>
                <hr></hr>
                <div className='spacer'></div>

                <div className='input-fields school-info'>
                    <label>Major:</label>
                    <input
                        type="text"
                        name="major"
                        value={userData.major}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className='input-fields school-info'>
                    <label>Year:</label>
                    <input
                        type="text"
                        name="year"
                        value={userData.year}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className='input-fields'>
                    <label>Clubs:</label>
                    <textarea
                        type="text"
                        name="clubs"
                        value={userData.clubs}
                        onChange={handleChange}
                        required
                    ></textarea>
                </div>
                <div className='input-fields bio'>
                    <label>Bio - describe yourself and what you like to do:</label>
                    <textarea
                        type="text"
                        name="bio"
                        value={userData.bio}
                        onChange={handleChange}
                        required
                    ></textarea>
                </div>
            </form>
            <option>
                
            </option>
            <div className='spacer'></div>
            <div className='spacer'></div>

            <div className='spacer'></div>

            <div className='spacer'></div>

            <div className='spacer'></div>

            <div>
                <button type="submit">Submit</button>
            </div>
        <div className='spacer'></div>
        </div>
        </>
    );
};

export default Register;
