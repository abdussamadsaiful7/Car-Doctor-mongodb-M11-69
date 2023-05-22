import React, { useEffect, useState } from 'react';
import { HiArrowRight, HiDocumentText } from "react-icons/hi2";
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.svg'

const ServiceRight = () => {

    const [allData, setAllData] = useState([]);
    const { description, facility, img, title, price } = allData;

    useEffect(() => {
        fetch('https://car-doctor-server-gamma-eight.vercel.app/services')
            .then(res => res.json())
            .then(data => setAllData(data))
    }, [])

    return (
        <div className='my-10'>
            <section>
                <div className='p-8 bg-gray-100 ml-14'>
                    <h1 className='text-2xl font-semibold'>Services</h1>
                    <div>
                        {
                            allData.map(data => <div key={data._id} data={data} className='bg-white my-3 p-2 hover:bg-red-500 hover:text-white'>
                                <h1 className='flex items-center justify-between font-semibold '> {data.title}
                                    <Link to="/"><HiArrowRight /></Link>
                                </h1>

                            </div>)
                        }
                    </div>
                </div>
            </section>
            <section>
                <div className='my-10 bg-black pl-8 py-8 rounded-md lg:ml-14 shadow-xl'>
                    <h1 className='mb-8 text-start font-bold text-white'>Download</h1>
                    <div className='grid grid-cols-3 ml-18 items-center mb-4 text-white'>
                        <div className='text-4xl'>
                            <HiDocumentText />
                        </div>
                        <div>
                            <h4>Our Brochure</h4>
                            <p className='font-thin text-sm'>Download</p>
                        </div>
                        <div className='bg-red-500 mx-auto p-2 hover:bg-white hover:text-black'>
                            <span className=' hover:text-black'><HiArrowRight /></span>
                        </div>
                    </div>
                    <div className='grid grid-cols-3 lg:ml-18 items-center text-white'>
                        <div className='text-4xl'>
                            <HiDocumentText />
                        </div>
                        <div>
                            <h4>Company Details</h4>
                            <p className='font-thin text-sm'>Download</p>
                        </div>
                        <div className='bg-red-500 mx-auto p-2 hover:bg-white hover:text-black'>
                            <span className=' hover:text-black '><HiArrowRight /></span>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className='bg-black py-10 text-center lg:ml-14'>
                    <img className='mx-auto' src={logo} alt="" />
                    <p className='text-white'>Need Help? We Are Here<br />
                        To Help You</p>
                    <div className='bg-white mx-10 p-4 relative'>
                        <h2><span className='text-red-500'>Car Doctor</span> Special</h2>
                        <p>Save up to <span className='text-red-500'>60% off</span></p>
                        <button className=' absolute btn btn-xs bg-red-500 text-white
                            right-20 border-none   rounded-sm p-4'>Get A Quote</button>
                    </div>
                </div>
            </section>
            <section className='py-10 lg:14'>
                <div className='text-center'>
                    <h1 className='text-2xl font-extrabold mb-6'>Price: ${price}</h1>
                    <button className='btn btn-wide bg-red-500 ml-10 border-none'>Proceed Checkout</button>
                </div>
            </section>
        </div>
    );
};

export default ServiceRight;