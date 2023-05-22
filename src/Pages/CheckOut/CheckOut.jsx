import { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
import toast from 'react-hot-toast';
import checkout from '../../assets/images/checkout/checkout.png'


const CheckOut = () => {
    const service = useLoaderData();
    const { title, _id, price, img } = service;
    const { user } = useContext(AuthContext);

    const handleBookService = (event) => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const date = form.date.value;
        const phone = form.phone.value;
        const email = form.email.value;
        const address = form.address.value;
        const payment = form.payment.value;
        const message = form.message.value;
        const booking = {
            customerName: name,
            email,
            phone,
            date,
            address,
            payment,
            message,
            img,
            service_id: _id,
            price: price,
            service: title
        }
        console.log(booking)

        fetch('https://car-doctor-server-gamma-eight.vercel.app/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    toast.success('Your booking is successful!');
                }
                form.reset();
            })
    }
    return (
        <div>
            <div className='relative my-10 mx-8'>
                <img src={checkout} alt="" />
                <div className='rounded absolute top-0 pl-20 pt-40 w-full h-full 
                bg-gradient-to-r from-[#151515] to-[rgba(175, 148, 148, 0.0894)]'>
                    <h1 className='text-4xl font-bold 
                 text-white'>Service CheckOut</h1>
                </div>
                <div>
                    <div className='absolute p-2 left-96 ml-14 bottom-0 text-white bg-red-500'>
                        <h1>Home/Service CheckOut</h1>
                    </div>
                </div>
            </div>
            <h2 className='text-center'><span className='text-xl font-semibold'>
                Book service:</span> <span className='text-red-500'>{title}.</span></h2>
            <form onSubmit={handleBookService} className="card-body md:mx-24 space-y-4">
                <div className='md:flex items-center justify-around gap-8'>
                    <div className="form-control w-full">
                        <input type="text" name="name" defaultValue={user?.displayName} placeholder="Name" className="input input-bordered w-full" />
                    </div>
                    <div className="form-control w-full">
                        <input type="date" name="date" placeholder="Date" className="input input-bordered w-full" />
                    </div>
                </div>
                <div className='md:flex items-center justify-around gap-8'>
                    <div className="form-control w-full">
                        <input type="text" name="phone" placeholder="Your Phone" className="input input-bordered w-full" />
                    </div>
                    <div className="form-control w-full">
                        <input type="text" name="email" defaultValue={user?.email} placeholder="Your Email" className="input input-bordered w-full" />
                    </div>
                </div>
                <div className='md:flex items-center justify-around gap-8'>
                    <div className="form-control w-full">
                        <input type="//#region" name="address" placeholder="Address" className="input input-bordered w-full" />
                    </div>
                    <div className="form-control w-full">
                        <input type="text" name="payment" defaultValue={'$' + price} placeholder="Advance payment" className="input input-bordered w-full" />
                    </div>
                </div>
                <div>
                    <textarea name="message" placeholder='Your message' className='border border-gray-300 
                    p-4 rounded' id="" cols="122" rows="6"></textarea>
                </div>

                <div className="form-control mt-6">
                    <input className='btn btn-primary bg-red-500' type="submit" value="Order Confirm" />
                </div>

            </form>
        </div>
    );
};

export default CheckOut;