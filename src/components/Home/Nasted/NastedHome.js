import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const NastedHome = () => {
    return (
        <div>
            <h1 className=' text-2xl text-center text-primary font-semibold my-8 divider'> VERSATILE AD FORMATS </h1>
            
            <div className=' py-20 flex justify-evenly'>
                <p> <Link className='bg-white rounded-3xl px-8 py-2 font-semibold shadow-lg shadow-white-500/100' to='pop' >POP-UNDER</Link> </p>
                <p> <Link className='bg-white rounded-3xl px-8 py-2 font-semibold shadow-lg shadow-white-500/100' to='pop' >POP-UNDER</Link> </p>
                <p> <Link className='bg-white rounded-3xl px-8 py-2 font-semibold shadow-lg shadow-white-500/100' to='pop' >POP-UNDER</Link> </p>
                <p> <Link className='bg-white rounded-3xl px-8 py-2 font-semibold shadow-lg shadow-white-500/100' to='pop' >POP-UNDER</Link> </p>
            </div>

            <Outlet> </Outlet>


        </div>
    );
};

export default NastedHome;