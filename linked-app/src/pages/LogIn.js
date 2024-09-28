import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


const SuccessPage = () => {
    const [countdown, setCountdown] = useState(3);

    const navigate = useNavigate();
    useEffect(() => {
        // Set a timeout to redirect after 3 seconds
        const timer = setInterval(() => {
            setCountdown(prev => {
                if (prev <= 1) {
                    navigate('/workspaces/JIMS/linked-app/src/pages/DisplayPeople.js'); // Redirect to the home page
                    clearInterval(timer);
                    return 0; // Stop countdown at 0
                }
                return prev - 1; // Decrease countdown
            });
        }, 1000); // Update every second

        // Clean up the timer on component unmount
        return () => clearTimeout(timer);
    });

    return (
        <div>
            <h1>Welcome Back!</h1>
            <p>Redirecting to your Home Page...</p>
            <p>You will be redirected in {countdown} seconds.</p>
        </div>
    );
};

export default SuccessPage;
