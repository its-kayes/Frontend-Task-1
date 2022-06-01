import React from 'react';

const Title = () => {
    return (
        <div className='py-20 bg-primary text-white my-14 '>
            <h1 className=' text-center text-3xl '> Title 1 </h1>
            <div className='flex justify-around py-20'>
                <div className=' '>
                    <div className=' rounded-full border-white border-2 border-dotted p-16  text-center '>
                        <p className=' text-5xl pb-7 '> 1 BN+ </p>
                        <p className=' text-lg pt-7 '> Daily Impressions </p>
                    </div>
                </div>
                <div className=' '>
                    <div className=' rounded-full bg-white text-primary p-16  text-center '>
                        <p className=' text-5xl pb-7 '> $500k+ </p>
                        <p className=' text-lg pt-7 '> Paid </p>
                    </div>
                </div>
                <div className=' '>
                    <div className=' rounded-full bg-secondary p-16  text-center '>
                        <p className=' text-5xl pb-7 '> 8K+ </p>
                        <p className=' text-lg pt-7 '> Global Publishers </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Title;