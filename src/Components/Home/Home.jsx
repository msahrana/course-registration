/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import './Home.css'
import { data } from 'autoprefixer';

const Home = () => {
    const [allCourse, setAllCourse] = useState([])

    useEffect(()=>{
        fetch('./data.json')
        .then(res => res.json())
        .then(data => setAllCourse(data))
    }, [])
console.log(allCourse)

    return (
        <div className='flex mx-14 mt-10'>
            <div className='grid grid-cols-3 gap-10 w-2/3'>

                {
                    allCourse.map(course=>(
                    <div className='card w-80 bg-white rounded-lg'>
                    <img className='w-72 h-36 rounded-lg m-4' src="https://i.ibb.co/mDXDStF/introduction-to-programming.png" alt="" />
                    <h2 className='m-4'>{course.name}</h2>
                    <p className='w-72 m-4'>{course.details}</p>
                    <div className='flex m-4'>
                        <h3>Price: {course.Price}</h3>
                        <h3>Credit: {course.Credit}</h3>
                    </div>
                    <button className='bg-green-500 rounded-lg w-full'>Select</button>
                </div>
                    ))
                }
            </div>

            <div className='w-1/3'>
                <Cart></Cart>
            </div>
        </div>
    );
};

export default Home;