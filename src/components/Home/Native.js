import React from 'react';

const Native = () => {
    return (
        <>
            <div className='flex justify-evenly'>
                <div>
                    <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" class="max-w-sm rounded-lg shadow-2xl" />
                </div>

                <div>
                    <div>
                        <h1 class="text-5xl text-secondary"> NATIVE </h1>
                        <p class="py-6">Native ads are placed in the most visible areas of the page
                            and, thus, this format shows good results and the level of
                            interaction.
                        </p>
                        <button class="text-lg text-primary">Learn More..</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Native;