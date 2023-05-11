import { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import  { AuthContext } from '../../Providers/AuthProvider';
import toast from 'react-hot-toast';

const CheckOut = () => {
    const service = useLoaderData();
    const { title, _id, price, img} = service;
    const {user} = useContext(AuthContext);

    const handleBookService = (event)=>{
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const date = form.date.value;
        const phone = form.phone.value;
        const email = form.email.value;
        const address = form.address.value;
        const amount = form.amount.value;
        const message = form.message.value;
        const booking ={
            customerName: name,
            email,
            img,
            phone,
            date,
            address,
            amount,
            message,
            service_id: _id,
            price: price,
            service: title
        }
        console.log(booking)

        fetch('http://localhost:5000/bookings',{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.insertedId){
                toast.success('Here is your toast.');
            }
        })
    }
    return (
        <div>
                <h2 className='text-center'><span className='text-xl font-semibold'>
                Book service:</span> <span className='text-red-500'>{title}.</span></h2>
            <form onSubmit={handleBookService} className="card-body md:mx-24 space-y-4">
                <div className='md:flex items-center justify-around gap-8'>
                    <div className="form-control w-full">
                        <input type="text" name="name" defaultValue={user?.displayName} placeholder="Name" className="input input-bordered w-full" />
                    </div>
                    <div className="form-control w-full">
                        <input type="datetime-local" name="date" placeholder="Date" className="input input-bordered w-full" />
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
                        <input type="text" name="amount" defaultValue={'$'+ price} placeholder="Advance amount" className="input input-bordered w-full" />
                    </div>
                </div>
                <div>
                    <textarea name="message" placeholder='Your message' className='border border-gray-300 rounded' id="" cols="110" rows="10"></textarea>
                </div>
                
                <div className="form-control mt-6">
                    <input className='btn btn-primary bg-red-500' type="submit" value="Order Confirm" />
                </div>

            </form>
        </div>
    );
};

export default CheckOut;