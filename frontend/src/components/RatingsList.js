import React, { useEffect, useState } from 'react';
import { fetchRatings } from '../services/api';

const RatingsList = () => {
    const [ratings, setRatings] = useState([]);

    useEffect(() => {
        const getRatings = async () => {
            const ratings = await fetchRatings();
            setRatings(ratings);
        };

        getRatings();
    }, []);

    return (
        <div>
            <h1>Ratings List</h1>
            <ul>
                {ratings.map(rating => (
                    <li key={rating.id}>{rating.name}: {rating.rating}</li>
                ))}
            </ul>
        </div>
    );
};

export default RatingsList;
