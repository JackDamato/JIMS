import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './DisplayPeople.css'; // Optional CSS file for styling

const DisplayPeople = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchItems = async () => {
            try {
                const response = await axios.get('http://localhost:5001/api/items');
                setItems(response.data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchItems();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div className="item-grid">
            {items.map((item) => (
                <div className="card" key={item._id}>
                    <h2>{item.name}</h2>
                    <p>{item.age} years old</p>
                    <p>{item.gender}</p>
                    <hr size='1'></hr>
                    <div className='school-card-info-wrapper'>
                        <div>
                            <p>Major: {item.major}</p>
                        </div>
                        <div>
                            <p>Year: {item.year}</p>
                        </div>
                    </div>
                    <p1>Clubs and Organizations:</p1>
                    <br></br>
                        <p>{item.clubs}</p>
                    <hr size='1'></hr>
                    <p1>About:</p1>
                    <br></br>
                        <p>{item.bio}</p>
                </div>
            ))}
        </div>
    );
};

export default DisplayPeople;






// import React from 'react';

// const DisplayPeople = () => {
//     return (
//         <div>
//             <p>
//                 PLEASE WORK.
//             </p>
//         </div>
//     );
//     };

// export default DisplayPeople;