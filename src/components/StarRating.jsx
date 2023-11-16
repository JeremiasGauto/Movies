import React from 'react'

function StarRating ({ rating }){
    const stars = [];
    for (let i = 0; i < rating; i++) {
        stars.push(<span key={i}>⭐</span>);
    }
    return <div className='star'>{stars}</div>;
};

export default StarRating