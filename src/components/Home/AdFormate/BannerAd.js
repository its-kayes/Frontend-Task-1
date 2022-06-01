import React from 'react';

const BannerAd = () => {
    return (
        <>
            {/* <div class="hero min-h-screen bg-base-100">
                <div class="hero-content flex-col lg:flex-row">
                    <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" class="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 class="text-5xl font-bold">Box Office News!</h1>
                        <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button class="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div> */}

            <div className='flex justify-evenly'>
                <div>
                    <img src="https://st2.depositphotos.com/3591429/6011/i/450/depositphotos_60118273-stock-photo-man-doing-online-marketing-ecommerce.jpg" class="max-w-sm rounded-lg shadow-2xl" />
                </div>

                <div>
                    <div>
                        <h1 class="text-5xl text-secondary"> BANNER AD </h1>
                        <p class="py-6">Choose between the available banner formats. Highly
                            effective ad for visibility.
                        </p>
                        <button class="text-lg text-primary">Learn More..</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BannerAd;