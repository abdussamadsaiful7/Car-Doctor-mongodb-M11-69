import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {
    const [services, setServices] = useState([]);
   // console.log(services)

    useEffect(() => {
        fetch('service.json')
            .then(res => res.json())
            .then(data =>setServices(data));
    }, [])
    return (
        <div>
            <div className=' text-center space-y-3'>
                <h3 className='text-xl text-red-500'>Services</h3>
                <h1 className='text-4xl font-extrabold'>Our Service Area</h1>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable. </p>
            </div>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-6 my-10'>
                {
                    services.map(service =><ServiceCard key={service._id} service={service}></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;