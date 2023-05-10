import React from 'react';
import banner1 from '../../../assets/images/banner/1.jpg'
import banner2 from '../../../assets/images/banner/2.jpg'
import banner3 from '../../../assets/images/banner/3.jpg'
import banner4 from '../../../assets/images/banner/4.jpg'
import banner5 from '../../../assets/images/banner/5.jpg'
import banner6 from '../../../assets/images/banner/6.jpg'

const Banner = () => {
    return (
        <div>
            <div className="carousel w-full h-[600px]">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src={banner1} className="w-full" />
                    <div className="absolute pb-40 h-full pt-48 px-20  
                    bg-gradient-to-r from-[#151515] to-[rgba(175, 148, 148, 0.0894)]">
                        <div className='text-white'>
                            <h2 className='text-6xl pb-8 font-semibold'>Affordable <br /> Price For Car  <br />  Servicing...</h2>
                            <p className='pb-8'>There are many variations of passages of  available, but <br /> the majority have suffered alteration in some form.</p>
                            <div>
                                <button className="btn btn-primary  mr-4 text-white">Discover More</button>
                                <button className="btn btn-outline  btn-error text-white">Latest Project</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide6" className="btn btn-circle mr-5">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src={banner2} className="w-full" />
                    <div className="absolute pb-40 h-full pt-48 px-20  
                    bg-gradient-to-r from-[#151515] to-[rgba(175, 148, 148, 0.0894)]">
                        <div className='text-white'>
                            <h2 className='text-6xl pb-8 font-semibold'>Affordable <br /> Price For Car  <br />  Servicing...</h2>
                            <p className='pb-8'>There are many variations of passages of  available, but <br /> the majority have suffered alteration in some form.</p>
                            <div>
                                <button className="btn btn-primary  mr-4 text-white">Discover More</button>
                                <button className="btn btn-outline  btn-error text-white">Latest Project</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-end bottom-0 transform -translate-y-1/2 left-5 right-5">
                        <a href="#slide1" className="btn btn-circle  mr-5">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src={banner3} className="w-full" />
                    <div className="absolute pb-40 h-full pt-48 px-20  
                    bg-gradient-to-r from-[#151515] to-[rgba(175, 148, 148, 0.0894)]">
                        <div className='text-white'>
                            <h2 className='text-6xl pb-8 font-semibold'>Affordable <br /> Price For Car  <br />  Servicing...</h2>
                            <p className='pb-8'>There are many variations of passages of  available, but <br /> the majority have suffered alteration in some form.</p>
                            <div>
                                <button className="btn btn-primary  mr-4 text-white">Discover More</button>
                                <button className="btn btn-outline  btn-error text-white">Latest Project</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute  flex justify-end bottom-0 transform -translate-y-1/2 left-5 right-5">
                        <a href="#slide2" className="btn btn-circle  mr-5">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src={banner4} className="w-full" />
                    <div className="absolute pb-40 h-full pt-48 px-20  
                    bg-gradient-to-r from-[#151515] to-[rgba(175, 148, 148, 0.0894)]">
                        <div className='text-white'>
                            <h2 className='text-6xl pb-8 font-semibold'>Affordable <br /> Price For Car  <br />  Servicing...</h2>
                            <p className='pb-8'>There are many variations of passages of  available, but <br /> the majority have suffered alteration in some form.</p>
                            <div>
                                <button className="btn btn-primary  mr-4 text-white">Discover More</button>
                                <button className="btn btn-outline  btn-error text-white">Latest Project</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute  flex justify-end bottom-0 transform -translate-y-1/2 left-5 right-5 ">
                        <a href="#slide3" className="btn btn-circle  mr-5">❮</a>
                        <a href="#slide5" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide5" className="carousel-item relative w-full">
                    <img src={banner5} className="w-full" />
                    <div className="absolute pb-40 h-full pt-48 px-20  
                    bg-gradient-to-r from-[#151515] to-[rgba(175, 148, 148, 0.0894)]">
                        <div className='text-white'>
                            <h2 className='text-6xl pb-8 font-semibold'>Affordable <br /> Price For Car  <br />  Servicing...</h2>
                            <p className='pb-8'>There are many variations of passages of  available, but <br /> the majority have suffered alteration in some form.</p>
                            <div>
                                <button className="btn btn-primary  mr-4 text-white">Discover More</button>
                                <button className="btn btn-outline  btn-error text-white">Latest Project</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute  flex justify-end bottom-0 transform -translate-y-1/2 left-5 right-5 ">
                        <a href="#slide4" className="btn btn-circle  mr-5">❮</a>
                        <a href="#slide6" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide6" className="carousel-item relative w-full">
                    <img src={banner6} className="w-full" />
                    <div className="absolute pb-40 h-full pt-48 px-20  
                    bg-gradient-to-r from-[#151515] to-[rgba(175, 148, 148, 0.0894)]">
                        <div className='text-white'>
                            <h2 className='text-6xl pb-8 font-semibold'>Affordable <br /> Price For Car  <br />  Servicing...</h2>
                            <p className='pb-8'>There are many variations of passages of  available, but <br /> the majority have suffered alteration in some form.</p>
                            <div>
                                <button className="btn btn-primary  mr-4 text-white">Discover More</button>
                                <button className="btn btn-outline  btn-error text-white">Latest Project</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute  flex justify-end bottom-0 transform -translate-y-1/2 left-5 right-5 ">
                        <a href="#slide5" className="btn btn-circle  mr-5">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;