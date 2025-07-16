import React from 'react'
import { useState } from 'react';
import { blogs } from './blog.js';
import { HiMagnifyingGlass } from "react-icons/hi2";
import { CiCalendar } from "react-icons/ci";
import { FaRegClock } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";

function blog() {

    const [selectedCourse,setSelectedCourse] = useState('All');
    const [coloredCourse,setColoredCourse] = useState('');
    const [input,setInput] = useState('');
    // let filteredBlogs = selectedCourse === 'All' ? blogs : blogs.filter(blog => blog.course === selectedCourse);

    function handleCourseClick(e){
        setSelectedCourse(e.target.id);
        setColoredCourse(e.target.id);
    }

    function handleInputChange(e){
        // console.log(e.target.value)
        setInput(e.target.value);
    }

    const filteredBlogs = blogs
    .filter(blog => selectedCourse === 'All' || blog.course === selectedCourse)
    .filter(blog => blog.title.toLowerCase().includes(input.toLowerCase()));

  return (
    <div className='max-h-screen w-screen py-12 px-6 flex flex-col items-center bg-slate-950 overflow-x-hidden overflow-y-auto'>
        <h1 className='text-4xl text-white font-bold block text-center'>Blog & Articles</h1>
        <p className='text-gray-400 text-sm sm:text-lg font-semibold mt-3 text-center'>Explore articles, tutorials, and insights for your academic journey</p>
        <div className='w-3/4 md:w-1/2 h-[3rem] rounded-lg bg-gray-800 border-[1px] border-gray-600 flex flex-row items-center px-4 mt-12 hover:border-2 hover:border-indigo-500'>
            <HiMagnifyingGlass className='text-gray-400 text-xl'/>
            <input type="text" name='search' placeholder='Search articles...' value={input} onChange={handleInputChange} className='h-[3rem] w-full bg-transparent outline-none ml-2 text-white' />
        </div>
        <div className='w-full flex flex-col sm:flex-row items-center justify-center gap-12 mt-12'>
            <div id='B.Tech' className={`w-full sm:w-[40%] flex flex-col items-center gap-4 py-6 px-4 bg-gray-800 rounded-xl hover:bg-white/20 ${coloredCourse === 'B.Tech' && 'bg-indigo-600 hover:bg-indigo-600 transition-all transform scale-105'}`} onClick={handleCourseClick}>
                <img src="/public/btech.png" alt="" className='h-[4rem] w-[4rem]'/>
                <h3 className='text-2xl text-white font-bold'>B.Tech</h3>
                <p className='text-gray-400 text-lg font-semibold text-center'>Technical Articles and Guides for Engineering Students</p>
            </div>
            <div id='BCA' className={`w-full sm:w-[40%] flex flex-col items-center gap-4 py-6 px-4 bg-gray-800 rounded-xl hover:bg-white/20 ${coloredCourse === 'BCA' && 'bg-indigo-600 hover:bg-indigo-600 transition-all transform scale-105'}`} onClick={handleCourseClick}>
                <img src="/public/bca.png" alt="" className='h-[4rem] w-[4rem]'/>
                <h3 className='text-2xl text-white font-bold'>BCA</h3>
                <p className='text-gray-400 text-lg font-semibold text-center'>Computer Application and Computer Insights</p>
            </div>
        </div>

        <div className='w-full xsm:w-3/4 sm:w-full py-12 mt-12 sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-x-12 lg:gap-x-8 gap-y-12'>
            {
                filteredBlogs.map(blog => (
                    <div key={blog.id} className='bg-gray-800 rounded-lg flex flex-col mb-8 sm:mb-0 hover:shadow-[12px_0px_17px_21px_rgba(162,_28,_175,_0.1)] hover:scale-105 transition-all transform duration-300 ease-in'>
                        <div className='w-full h-[12rem] rounded-t-lg'>
                            <img src={blog.img} alt="" className='h-full w-full object-cover rounded-t-lg'/>
                        </div>
                        <div className='w-full flex flex-col px-4 py-6 gap-4'>
                            <div className='flex flex-row items-center gap-2'>
                                {
                                    blog.tech.map(tech => (
                                        <span className='rounded-xl bg-indigo-800 px-2 py-1 text-gray-300 font-semibold text-xs'>{tech}</span>
                                    ))
                                }
                                {/* <span className='rounded-xl bg-indigo-800 px-2 py-1 text-gray-300 font-semibold text-xs'>Programming</span>
                                <span className='rounded-xl bg-indigo-800 px-2 py-1 text-gray-300 font-semibold text-xs'>CPP</span>
                                <span className='rounded-xl bg-indigo-800 px-2 py-1 text-gray-300 font-semibold text-xs'>DSA</span> */}
                            </div>
                            <h3 className='text-xl text-white font-semibold'>{blog.title}</h3>
                            <p className='text-base text-gray-300 font-semibold tracking-wide'>{blog.desc}</p>
                            <div className='w-full flex flex-row items-center justify-between'>
                                <div className='flex flex-row items-center gap-4'>
                                    <div className='text-base font-semibold text-gray-500 flex flex-row items-center gap-1'>
                                        <CiCalendar />
                                        <p>{blog.date}</p>
                                    </div>
                                    <div className='text-base font-semibold text-gray-500 flex flex-row items-center gap-1'>
                                        <FaRegClock />
                                        <p>{blog.time}</p>
                                    </div>
                                </div>
                                <div className='flex flex-row gap-1 items-center text-indigo-500 hover:text-indigo-600 cursor-pointer'>
                                    <p>Read More</p>
                                    <FaArrowRightLong className='mt-1'/>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>

    </div>
  )
}

export default blog




