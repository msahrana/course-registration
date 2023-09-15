/* eslint-disable no-unused-vars */
import React from 'react';

const Card = () => {
    return (
        <div>
             <div className='bg-white gap-5'>
                            <img className='w-72 h-40 rounded-lg' src={course.image} alt="" />
                            <h2>{course.name}</h2>
                            <p className='w-72'>{course.details}</p>
                            <div>
                                <h4>Price : {course.Price}</h4>
                                <h4> Credit : {course.Credit}</h4>
                            </div>
                        </div>
                        <div>
                            <button className='bg-green-600 w-full rounded'>Select</button>
                        </div>
        </div>
    );
};

export default Card;