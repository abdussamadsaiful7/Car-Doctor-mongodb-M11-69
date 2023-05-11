import React from 'react';
import { HiArrowRight } from "react-icons/hi2";

const ServiceCard = ({ service }) => {
    const { title, img, price, description } = service;
    //console.log(service)
    return (
        <div className="card w-84 border bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img  src={img} alt="Shoes" className="rounded h-56" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <div className='flex items-center justify-between text-red-500 '>
                    <p className=' font-semibold mr-10'>Price: ${price}</p>
                    <HiArrowRight />
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;