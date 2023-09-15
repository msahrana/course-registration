/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

const Cart = ({selectCourse}) => {
    console.log(selectCourse)

    return (
        <div className='h-auto bg-white text-left mx-8 rounded-lg'>
            <h3 className='mx-8 text-2xl font-semibold text-green-600 border-b-2'>Credit Hour Remaining:</h3>
            <h4 className='mx-8 text-2xl font-semibold mb-4 border-b-2'>Course name: {selectCourse.length}</h4>
            {
                selectCourse.map(course=>(
                    <li className='mx-8'>{course.name}</li>
                ))
            }
            <h5 className='mx-8 font-semibold mt-4 mb-4 border-b-2 border-t-2'>Total Credit:</h5>
            <h6 className='mx-8 font-semibold mb-4'>Total Price:</h6>
        </div>
    );
};

export default Cart;