import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <div className='p-5 flex '>
                <h1 className=' flex-1 font-bold text-4xl '> LOGO </h1>
                <div className=''>
                    <h1 className=''> BN / EN </h1>
                </div>
            </div>
            <div>
                <div>
                    <div class="navbar bg-base-100 px-5">
                        <div class="flex-1">
                            <ul class="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-xl md:font-medium">
                                <li>
                                    <a href="#" class="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" aria-current="page">HOME</a>
                                </li>
                                <li>
                                    <a href="#" class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">ADVERTISERS</a>
                                </li>
                                <li>
                                    <a href="#" class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">PUBLISHERS</a>
                                </li>
                                <li>
                                    <a href="#" class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">INFLUENCERS</a>
                                </li>
                                <li>
                                    <a href="#" class="block py-2 pr-4 pl-3 text-gray-700 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">AD FORMATS</a>
                                </li>
                                <li>
                                    <a href="#" class="block py-2 pr-4 pl-3 text-gray-700 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">BLOG</a>
                                </li>
                                <li>
                                    <a href="#" class="block py-2 pr-4 pl-3 text-gray-700 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">CONTACT US</a>
                                </li>
                            </ul>
                        </div>
                        <div class="flex-none">
                            <div className='bg-white flex p-2 rounded-3xl items-center'>
                                <p> <button className=' px-4 font-semibold '> LOGIN </button> </p>
                                <p className='mx-3 px-4 py-2 rounded-3xl bg-secondary text-white'> SIGN UP </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;