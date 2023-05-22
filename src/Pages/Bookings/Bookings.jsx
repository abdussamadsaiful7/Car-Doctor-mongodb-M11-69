import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import BookingRow from './BookingRow';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';


const Bookings = () => {
    const { user } = useContext(AuthContext);
    const [bookings, setBookings] = useState([]);
    const navigate =useNavigate();

    const url = `https://car-doctor-server-gamma-eight.vercel.app/bookings?email=${user?.email}`;
    useEffect(() => {
        fetch(url,{
            method: 'GET',
            headers: {
                authorization: `Bearer ${localStorage.getItem('car-access-token')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if(!data.err){

                    setBookings(data)
                }
                else{
                    navigate('/');
                }
            });
    }, [url, navigate])

    const handleDelete = id => {
        const proceed = confirm('Are You want to delete?.');
        if (proceed) {
            fetch(`https://car-doctor-server-gamma-eight.vercel.app/bookings/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount > 0) {
                        toast.error('Delete successful!')
                        const remaining = bookings.filter(booking => booking._id !== id)
                        setBookings(remaining);
                    }
                })
        }
    }

    const handleConfirm = (id) => {
        fetch(`https://car-doctor-server-gamma-eight.vercel.app/bookings/${id}`,{
            method: 'PATCH',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify({status: 'confirm'})
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.modifiedCount>0){
                const remaining = bookings.filter(booking=> booking._id !== id);
                const updated = bookings.find(booking=> booking._id === id);
                updated.status = 'confirm'
                const newBookings = [updated, ...remaining];
                setBookings(newBookings);
            }
        })
    }


    return (
        <div>
            <h2 className='text-center my-4 font-semibold'>Your Bookings: {bookings.length}</h2>
            <div className="overflow-x-auto w-full px-20">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Photo</th>
                            <th>Name</th>
                            <th>Service</th>
                            <th>Phone</th>
                            <th>Price</th>
                            <th>Payment</th>
                            <th>Date</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookings.map(booking => <BookingRow
                                key={booking._id}
                                booking={booking}
                                handleDelete={handleDelete}
                                handleConfirm={handleConfirm}
                            ></BookingRow>)
                        }
                    </tbody>

                </table>
            </div>

        </div>
    );
};

export default Bookings;