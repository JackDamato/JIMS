import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './DisplayPeople.css'; // Optional CSS file for styling


const DisplayPeople = () => {
    const [items, setItems] = useState([]);
    const [ids, setids] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const userId = '66f878aa7957aabbd1e7f08c';
        const getIds = async () => {
            try {
                const res = await axios.get('http://127.0.0.1:5000/api/data', {userId});
                setids(res.data);
            } catch (error) {
                setError(error.message);
            }
        };
        getIds();

        // const ids = ['66f878aa7957aabbd1e7f08c', '66f87958f24a3cad79839318', '66f880a3455f36f2602aedcf'];

        const fetchItems = async () => {
            try {
                const response = await axios.post('http://localhost:5001/api/documents', { ids });
                setItems(response.data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchItems();
    }, [ids]);

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