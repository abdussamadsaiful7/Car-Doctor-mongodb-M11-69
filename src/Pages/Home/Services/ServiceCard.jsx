import React from 'react';

const ServiceCard = ({service}) => {
    const {title, img, price, description } = service;
    //console.log(service)
    return (
        <div className="card w-84 border bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{title}</h2>
                <p className=' font-semibold text-red-500'>Price: ${price}</p>
            </div>
        </div>
    );
};

export default ServiceCard;