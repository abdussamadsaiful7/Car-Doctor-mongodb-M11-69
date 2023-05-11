import React from 'react';

const BookingRow = ({ booking, handleDelete }) => {
    const { _id, customerName, phone, date, price, img, service, payment } = booking;

    return (
        <tr>
            <td>
                <button onClick={() => handleDelete(_id)} className="btn btn-sm btn-circle btn-outline">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </td>
            <td>

                <div className="">
                    {img &&
                        <img className='rounded-md w-18 h-18' src={img} alt="" /> ?
                        <img src={img} alt="" /> : null
                    }
                </div>

            </td>
            <td>{customerName}</td>
            <td>{service}</td>
            <td>{phone}</td>
            <td>${price}</td>
            <td>${payment}</td>
            <td>{date}</td>
            <td>
                <button className="btn btn-ghost btn-xs">details</button>
            </td>
        </tr>
    );
};

export default BookingRow;