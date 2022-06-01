import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const AdFormate = () => {
    return (
        <div>
            <h1 className=' text-2xl text-center text-primary font-semibold my-8'> VERSATILE AD FORMATS </h1>

            <div class="drawer">
                <input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
                <Outlet> </Outlet>
                <div class="drawer-content flex flex-col">
                    {/* <!-- Navbar --> */}
                    <div class="w-full navbar justify-evenly bg-base-100">
                        <div class="flex-none lg:hidden">
                            <label for="my-drawer-3" class="btn btn-square btn-ghost">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                            </label>
                        </div>
                        {/* <div class="flex-1 px-2 mx-2">Navbar Title</div> */}

                        {/* <div class="flex-1 justify-around">
                            <ul class=" flex justify-between ">
                                <li><a>Navbar Item 1</a></li>
                                <li><a>Navbar Item 2</a></li>
                            </ul>
                        </div> */}

                        <li><Link className='bg-white rounded-3xl px-8 py-2 font-semibold shadow-lg shadow-white-500/100 ' to='sq' >POP-UNDER</Link></li>
                        <li><Link className='bg-white rounded-3xl px-8 py-2 font-semibold shadow-lg shadow-white-500/100 ' to='s' >BANNER AD</Link></li>
                        <li><Link className='bg-white rounded-3xl px-8 py-2 font-semibold shadow-lg shadow-white-500/100 ' to='sq' >NATIVE</Link></li>
                        <li><Link className='bg-white rounded-3xl px-8 py-2 font-semibold shadow-lg shadow-white-500/100 ' to='s' >SKIM</Link></li>

                        
                    </div>
                    {/* <!-- Page content here --> */}
                    Content
                </div>
                <div class="drawer-side">
                    <label for="my-drawer-3" class="drawer-overlay"></label>
                    <ul class="menu p-4 overflow-y-auto w-80 bg-base-100">
                        {/* <!-- Sidebar content here --> */}
                        <li><a>Sidebar Item 1</a></li>
                        <li><a>Sidebar Item 2</a></li>

                    </ul>

                </div>
            </div>

        </div>
    );
};

export default AdFormate;   