import React from 'react';

const Everyone = () => {
    return (
        <div>
            <h1 className=' text-2xl text-center text-primary font-semibold'> AVAILABLE FOR EVERYONE  </h1>
            <p className='text-center py-3 text-lg'> This part will be shown for everyone </p>
            <div className='flex justify-around my-28'>
                <div>
                    <p className='rounded-full p-8 bg-white'> <i class="fa-solid flex justify-center text-primary fa-torii-gate text-6xl "></i> </p>
                    <p className='text-xl font-bold py-3'> Get Discount for a Tour </p>
                    <p className='text-2xl text-center rounded-2xl py-1 text-white bg-primary'> See more </p>
                </div>
                <div>
                    <p className='rounded-full p-8 bg-white'> <i class="fa-solid flex justify-center text-primary fa-paper-plane text-6xl "></i> </p>
                    <p className='text-xl font-bold py-3'> Send Your Details </p>
                    <p className='text-2xl text-center rounded-2xl py-1 text-white bg-primary'> See more </p>
                </div>
                <div>
                    <p className='rounded-full p-8 bg-white'> <i class="fa-solid flex justify-center text-primary fa-earth-asia text-6xl "></i> </p>
                    <p className='text-xl font-bold py-3'> All over the world </p>
                    <p className='text-2xl text-center rounded-2xl py-1 text-white bg-primary'> See more </p>
                </div>
            </div>
        </div>
    );
};

export default Everyone;