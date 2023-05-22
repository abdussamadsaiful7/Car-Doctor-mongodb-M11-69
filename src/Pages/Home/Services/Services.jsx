import React, { useEffect, useRef, useState } from 'react';
import ServiceCard from './ServiceCard';
import { HiClock, } from "react-icons/hi2";
import { FaCalendarAlt, FaCommentDots, FaMapMarkerAlt, FaPhoneAlt, FaRegCircle } from "react-icons/fa";

const Services = () => {
    const [services, setServices] = useState([]);
    const [asc, setAsc] = useState(true);
    const searchRef = useRef(null);
    const [search, setSearch]= useState('');
    // console.log(services)

    useEffect(() => {
        fetch(`https://car-doctor-server-gamma-eight.vercel.app/services?search=${search}&sort=${asc ? 'asc' : 'desc'}`)
            .then(res => res.json())
            .then(data => setServices(data));
    }, [asc, search])

    const handleSearch = () =>{
        setSearch(searchRef.current.value);
        console.log(searchRef.current.value);
    }

    return (
        <div>
            <div>
                <div className=' text-center space-y-3'>
                    <h3 className='text-xl text-red-500'>Services</h3>
                    <h1 className='text-4xl font-extrabold'>Our Service Area</h1>
                    <p>the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable. </p>
                    <div className="form-control">
                        <div className="input-group">
                            <input type="text" ref={searchRef} placeholder="Search…" 
                            className="input input-bordered" />
                            <button onClick={handleSearch} className="btn btn-square">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                            </button>
                        </div>
                    </div>
                    <button
                        className='btn-error btn-sm btn-outline border rounded'
                        onClick={() => setAsc(!asc)}
                    >
                        Price: {asc ? 'High to low' : 'Low to high'}
                    </button>
                </div>
                <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-6 my-10'>
                    {
                        services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
                    }
                </div>
                <div className='text-center mb-10'>
                    <button className="btn btn-outline btn-error">More Services</button>
                </div>
            </div>
            <div className='grid grid-cols-3 gap-4 px-10 py-20 bg-black text-white rounded mb-10'>
                <div className='flex items-center gap-4'>
                    <div className='relative'>
                        <span className='text-4xl'> <FaCalendarAlt /></span>
                        <span className="absolute text-red-500 right-0 -bottom-0.5 text-xl"> <HiClock /></span>
                    </div>
                    <div>
                        <p className='font-bold'>We are open monday-friday</p>
                        <h1 className='text-2xl font-bold'>7:00 am - 9:00 pm</h1>
                    </div>
                </div>
                <div className='flex items-center gap-4'>
                    <div className='relative'>
                        <span className='absolute text-red-500 text-xl left-4 bottom-5'> <FaCommentDots /></span>
                        <span className='text-4xl'><FaPhoneAlt /></span>
                    </div>
                    <div>
                        <p className='font-bold'>Have a question?</p>
                        <h1 className='text-2xl font-bold'>+2546 251 2658</h1>
                    </div>
                </div>
                <div className='flex items-center gap-4'>
                    <div className='relative'>
                        <span className="text-3xl absolute bottom-3 text-red-500"> <FaMapMarkerAlt /></span>
                        <span className='text-2xl bg-white'><FaRegCircle /></span>
                    </div>
                    <div>
                        <p className='font-bold'>Need a repair? our address</p>
                        <h1 className='text-2xl font-bold'>Liza Street, New York</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;