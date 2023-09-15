/* eslint-disable no-unused-vars */
import React from 'react';
import Card from '../Card/Card';
import Cart from '../Cart/Cart';

const Home = () => {
    return (
        <div className='flex mx-14 mt-10'>
            <div>
                <Card></Card>
            </div>
            <div>
                <Cart></Cart>
            </div>
        </div>
    );
};

export default Home;