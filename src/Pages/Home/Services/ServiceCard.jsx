import React from 'react';
import { HiArrowRight } from "react-icons/hi2";
import { Link } from 'react-router-dom';
import details from '../../../assets/icons/details.png'

const ServiceCard = ({ service }) => {
    const { _id, title, img, price } = service;
    //console.log(service)
    return (
        <div className="card w-84 border bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded h-56" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <div className='flex items-center justify-between text-red-500 '>
                    <p className=' font-semibold mr-10'>Price: ${price}</p>
                    <Link to={`/serviceDetails/${_id}`}>
                        <img className='w-4 h-4 mr-10' src={details} alt="" />
                    </Link>
                    <Link to={`/checkOut/${_id}`}><HiArrowRight /></Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;