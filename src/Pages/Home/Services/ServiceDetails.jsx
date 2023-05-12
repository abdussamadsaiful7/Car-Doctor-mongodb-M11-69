import React, { useState } from 'react';
import checkout from '../../../assets/images/checkout/checkout.png'
import { useLoaderData } from 'react-router-dom';
import ServiceDetailsCard from './ServiceDetailsCard';
import ServiceRight from './ServiceRight';


const ServiceDetails = () => {
    const loaderCard = useLoaderData()
    const [card, setCard] = useState(loaderCard)
    
   

    return (
        <div>
            <div className='relative my-10'>
                <img className='w-full ' src={checkout} alt="" />
                <div className='rounded absolute top-0 pl-20 pt-40 w-full h-full 
                bg-gradient-to-r from-[#151515] to-[rgba(175, 148, 148, 0.0894)]'>
                    <h1 className='text-4xl font-bold 
                 text-white'>Service Details</h1>
                </div>
                <div>
                    <div className='absolute py-3 px-5 ml-14 left-96 bottom-0 text-white bg-red-500'>
                        <h1>Home/Service Details</h1>
                    </div>
                </div>
            </div>
            <div className=' grid lg:grid-cols-3 gap-4'>
                <div className='md:col-span-2'>
                 <ServiceDetailsCard card={card}
                 setCard={setCard}
                 ></ServiceDetailsCard>
                </div>
                <div>
                   <ServiceRight card={card}></ServiceRight>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;
