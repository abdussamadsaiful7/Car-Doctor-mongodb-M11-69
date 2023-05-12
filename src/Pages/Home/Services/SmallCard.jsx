import React from 'react';

const SmallCard = ({ fa }) => {
    const { name, details } = fa
    return (
        <div>
            <div className='shadow-xl border-t-4 border-red-500  px-6 py-10'>
                <h1 className='text-xl font-semibold mb-4'>{name}</h1>
                <p>{details}</p>
            </div>
        </div>

    );
};

export default SmallCard;