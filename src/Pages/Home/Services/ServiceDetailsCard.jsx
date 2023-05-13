import React from 'react';
import SmallCard from './SmallCard';

const ServiceDetailsCard = ({ card, setCard }) => {
    //console.log(card)
    const { description, facility, img, title } = card;
    return (
        <div className='my-10'>
            <div className='space-y-8'>
                <img className="rounded" src={img} alt="" />
                <h2 className='text-2xl font-semibold'>{title}</h2>
                <p className='pr-10'>{description}</p>
            </div>
            <div className='grid lg:grid-cols-2 gap-4 mt-10'>
                {
                    facility.map(fa => <SmallCard key={fa.name} fa={fa}></SmallCard>)
                }
            </div>
            <div className='pt-10 pb-14 pr-8 '>
                <p>
                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.
                </p>
            </div>
            <div>
                <h1 className='text-xl font-semibold'>Three Simple Steps to Process</h1>
                <p className='my-4'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text</p>
                <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-4'>
                    <div className='border py-10 rounded-md shadow-md'>
                        <div className="avatar lg:ml-16 ml-36">

                            <div className="w-24 rounded-full border bg-red-500">
                                <p className='text-center text-xl pt-8 text-white font-extrabold'>01</p>
                            </div>

                        </div>
                        <div className='text-center'>
                            <h1 className='font-extrabold'>STEP ONE</h1>
                            <p>It uses a dictionary <br />of over 200.</p>
                        </div>
                    </div>
                    <div className='border py-10 rounded-md shadow-md'>
                        <div className="avatar lg:ml-16 ml-36">
                            <div className="w-24 rounded-full border bg-red-500">
                                <p className='text-center text-xl pt-8 text-white font-extrabold'>02</p>
                            </div>
                        </div>
                        <div className='text-center'>
                            <h1 className='font-extrabold'>STEP TWO</h1>
                            <p>It uses a dictionary <br />of over 200.</p>
                        </div>
                    </div>
                    <div className='border py-10 rounded-md shadow-md'>
                        <div className="avatar lg:ml-16 ml-36">
                            <div className="w-24 rounded-full border bg-red-500">
                                <p className='text-center text-xl pt-8 text-white font-extrabold'>03</p>
                            </div>
                        </div>
                        <div className='text-center'>
                            <h1 className='font-extrabold'>STEP THREE</h1>
                            <p>It uses a dictionary <br />of over 200.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetailsCard;