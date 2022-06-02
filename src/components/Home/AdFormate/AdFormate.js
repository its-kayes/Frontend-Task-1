import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import PopUnder from './PopUnder';

const AdFormate = () => {
    return (
        <div>
            <h1 className=' text-2xl text-center text-primary font-semibold my-8'> VERSATILE AD FORMATS </h1>

            <div class="drawer">
                <input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
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

                        <li><Link className='bg-white rounded-3xl px-8 py-2 font-semibold shadow-lg shadow-white-500/100' to='popunder' >POP-UNDER</Link></li>
                        <li><Link className='bg-white rounded-3xl px-8 py-2 font-semibold shadow-lg shadow-white-500/100' to='s' >BANNER AD</Link></li>
                        <li><Link className='bg-white rounded-3xl px-8 py-2 font-semibold shadow-lg shadow-white-500/100' to='sq' >NATIVE</Link></li>
                        <li><Link className='bg-white rounded-3xl px-8 py-2 font-semibold shadow-lg shadow-white-500/100' to='s' >SKIM</Link></li>

                    </div>

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
                <Outlet> </Outlet>
            </div>








            <div class="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
                <div class="drawer-content ">
                    {/* <!-- Page content here --> */}
                    {/* <h1 className='text-5xl text-cyan-500 font-extrabold'> Dashboard </h1> */}
                    <Outlet>  </Outlet>
                    <label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div class="drawer-side">
                    <label for="my-drawer-2" class="drawer-overlay"></label>
                    <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                        {/* <!-- Sidebar content here --> */}
                        <li><Link to='/dashboard'>My Profile</Link></li>
                        <li> <Link to='users'> All Users </Link> </li>
                        <li><Link to='addproduct'> Add Product </Link></li>
                        <li><Link to='allorders'> Manage Orders </Link></li>
                        <li><Link to='products'> Manage Products </Link></li>



                        <li><Link to='orders'>My Orders</Link></li>
                        <li><Link to='reviews'>Add A Review</Link></li>

                    </ul>
                </div>
            </div>

        </div>
    );
};

export default AdFormate;   