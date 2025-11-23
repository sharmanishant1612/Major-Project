import React from 'react'
import { FiGithub } from "react-icons/fi";
import { LuLinkedin } from "react-icons/lu";
import { FaWhatsapp } from "react-icons/fa";

function about() {
  return (
    <div className='  overflow-x-hidden overflow-y-auto'>
        <div className='w-screen bg-black/5 dark:bg-slate-950 py-8 px-6 flex flex-col items-center'>
            <h1 className='text-4xl dark:text-white font-bold block text-center'>About NotesHub</h1>
            <p className='text-black/80 dark:text-gray-400 text-sm sm:text-lg font-semibold mt-3 text-center'>Empowering students with comprehensive academic resources and a supportive <br></br> learning community</p>
            <div className='w-full flex flex-col md:flex-row justify-between mt-12'>
                <div className='max-w-full sm:max-w-[80%] md:max-w-[40%] flex flex-col gap-4'>
                    <h1 className='text-4xl dark:text-white font-bold block'>Our Mission</h1>
                    <p className='text-lg text-black/80 dark:text-gray-400 font-semibold'>NotesHub was founded with a simple yet powerful mission: to make quality education accessible to every student. We believe that access to comprehensive study materials shouldn't be a barrier to academic success</p>
                    <p className='text-lg text-black/80 dark:text-gray-400 font-semibold'>Through our platform, we're building a community where students can easily find, share, and learn from well-organized academic resources.</p>
                    <p className='text-lg text-black/80 dark:text-gray-400 font-semibold'>We continuously enhance our resources to support students' academic and personal success.</p>
                </div>
                <div className='max-w-[90%] sm:max-w-[60%] rounded-xl self-center mt-12 md:mt-0'>
                    <img src="/about.jpeg" alt="" className='h-[30rem] max-w-full object-cover rounded-xl'/>
                </div>
            </div>
        </div>
        <div className='w-full dark:bg-gray-800 py-12 px-6 flex flex-col items-center'>
            <p className='text-indigo-600 text-xl'>Our values</p>
            <h1 className='text-4xl dark:text-white font-bold block mt-4'>What drives us forward</h1>
            <div className='md:grid md:grid-cols-3 md:gap-x-6 md:gap-y-12 space-y-12 md:space-y-0 mt-12'>
                <div className='flex flex-row items-start gap-6'>
                    <div className='h-[4rem] w-[4.5rem] flex flex-row justify-center items-start'>
                        <img src="/brain.png" alt="" className='object-cover'/>
                    </div>
                    <div className='flex flex-col'>
                        <h3 className='text-xl text-black/90 dark:text-white font-semibold'>Knowledge Accessibility</h3>
                        <p className='text-black/70 dark:text-gray-400 text-base font-semibold'>We ensure students have 24/7 access to notes, previous year papers, and project resources — anytime, anywhere</p>
                    </div>
                </div>
                <div className='flex flex-row items-start gap-6'>
                    <div className='h-[4rem] w-[4.5rem] flex flex-row justify-center items-start'>
                        <img src="/folder.png" alt="" className='object-cover'/>
                    </div>
                    <div className='flex flex-col'>
                        <h3 className='text-xl text-black/90 dark:text-white font-semibold'>Organized Resources</h3>
                        <p className='text-black/70 dark:text-gray-400 text-base font-semibold'>All content is systematically categorized by subject, semester, and branch to help students find exactly what they need, faster</p>
                    </div>
                </div>
                <div className='flex flex-row items-start gap-6'>
                    <div className='h-[4rem] w-[4.5rem] flex flex-row justify-center items-start'>
                        <img src="/puzzle.png" alt="" className='object-cover'/>
                    </div>
                    <div className='flex flex-col'>
                        <h3 className='text-xl text-black/90 dark:text-white font-semibold'>Practical Learning</h3>
                        <p className='text-black/70 dark:text-gray-400 text-base font-semibold'>By offering previous year projects and real-world examples, we promote hands-on learning beyond theory</p>
                    </div>
                </div>
                <div className='flex flex-row items-start gap-6'>
                    <div className='h-[4rem] w-[4.5rem] flex flex-row justify-center items-start'>
                        <img src="/student.png" alt="" className='object-cover'/>
                    </div>
                    <div className='flex flex-col'>
                        <h3 className='text-xl text-black/90 dark:text-white font-semibold'>Student-First Approach</h3>
                        <p className='text-black/70 dark:text-gray-400 text-base font-semibold'>We build everything keeping students' struggles in mind — be it exam prep, assignments, or project ideas</p>
                    </div>
                </div>
                <div className='flex flex-row items-start gap-6'>
                    <div className='h-[4rem] w-[4.5rem] flex flex-row justify-center items-start'>
                        <img src="/handshake.png" alt="" className='object-cover'/>
                    </div>
                    <div className='flex flex-col'>
                        <h3 className='text-xl text-black/90 dark:text-white font-semibold'>Peer Support</h3>
                        <p className='text-black/70 dark:text-gray-400 text-base font-semibold'>We encourage a collaborative learning space where students can share resources, discuss doubts, and help each other grow</p>
                    </div>
                </div>
                <div className='flex flex-row items-start gap-6'>
                    <div className='h-[4rem] w-[4.5rem] flex flex-row justify-center items-start'>
                        <img src="/cogwheel.png" alt="" className='object-cover'/>
                    </div>
                    <div className='flex flex-col'>
                        <h3 className='text-xl text-black/90 dark:text-white font-semibold'>Continuous Updates</h3>
                        <p className='text-black/70 dark:text-gray-400 text-base font-semibold'>We regularly add the latest papers, projects, and notes to keep the platform relevant and helpful</p>
                    </div>
                </div>
                <div className='flex flex-row items-start gap-6'>
                    <div className='h-[4rem] w-[4.5rem] flex flex-row justify-center items-start'>
                        <img src="/search.png" alt="" className='object-cover'/>
                    </div>
                    <div className='flex flex-col'>
                        <h3 className='text-xl text-black/90 dark:text-white font-semibold'>Verified Content</h3>
                        <p className='text-black/70 dark:text-gray-400 text-base font-semibold'>All notes and materials are reviewed to ensure accuracy and relevance for university standards</p>
                    </div>
                </div>
                <div className='flex flex-row items-start gap-6'>
                    <div className='h-[4rem] w-[4.5rem] flex flex-row justify-center items-start'>
                        <img src="/deadline.png" alt="" className='object-cover'/>
                    </div>
                    <div className='flex flex-col'>
                        <h3 className='text-xl text-black/90 dark:text-white font-semibold'>Save Time, Score Better</h3>
                        <p className='text-black/70 dark:text-gray-400 text-base font-semibold'>Our focused content helps you skip the clutter and revise efficiently before exams or submission deadlines</p>
                    </div>
                </div>
            </div>
        </div>
        <div className='w-full bg-black/5 dark:bg-gray-950 py-12 px-6 flex flex-col items-center'>
            <p className='text-indigo-600 text-xl'>Our values</p>
            <h1 className='text-4xl dark:text-white font-bold block mt-4 text-center'>Meet the Minds Behind NotesHub</h1>
            <p className='text-gray-500 text-base font-semibold mt-4 text-center'>Dedicated students working together to make education <br></br> accessible for everyone.</p>
            <div className='w-full flex flex-col gap-8 md:gap-0 md:flex-row md:justify-between items-center md:items-start mt-8'>
                <div className='px-8 md:px-0 md:w-[30%] flex flex-col items-center gap-6 bg-white dark:bg-gray-800 rounded-md py-4'>
                    <div className='w-[10rem] h-[10rem] rounded-full p-1 bg-indigo-600'>
                        <div className='h-full w-full bg-white rounded-full p-1'>
                            <img src="/sunny.png" alt="" className='object-cover'/>
                        </div>
                    </div>
                    <div className='flex flex-col items-center gap-1'>
                        <h3 className='text-2xl dark:text-white font-bold text-center'>Sunny Verma</h3>
                        <p className='text-indigo-500 text-base font-semibold font-sans tracking-wide'>Project Manager & QA</p>
                    </div>
                    <p className='text-base text-gray-500 font-sans font-semibold tracking-wide text-center'>Full-stack developer with a passion for education technology</p>
                    <div className='flex flex-row gap-4'>
                        <a href="https://github.com/sunnyV0207"><FiGithub className='text-xl text-gray-400 cursor-pointer hover:text-indigo-500' /></a>
                        <a href="https://www.linkedin.com/in/sunny-verma-604519302"><LuLinkedin className='text-xl text-gray-400 cursor-pointer hover:text-indigo-500' /></a>
                        <a href="https://wa.me/919027259417"
                            target="_blank"
                            rel="noopener noreferrer"
                        ><FaWhatsapp className='text-xl text-gray-400 cursor-pointer hover:text-indigo-500' /></a>
                    </div>
                </div>
                <div className='px-8 md:px-0 md:w-[30%] flex flex-col items-center gap-6 bg-white dark:bg-gray-800 rounded-md py-4'>
                    <div className='w-[10rem] h-[10rem] rounded-full p-1 bg-indigo-600'>
                        <div className='h-full w-full bg-white rounded-full p-1'>
                            <img src="/nishant.png" alt="" className='object-cover'/>
                        </div>
                    </div>
                    <div className='flex flex-col items-center gap-1'>
                        <h3 className='text-2xl dark:text-white font-bold text-center'>Nishant Sharma</h3>
                        <p className='text-indigo-500 text-base font-semibold font-sans tracking-wide'>Lead UI & Backend Contributor</p>
                    </div>
                    <p className='text-base text-gray-500 font-sans font-semibold tracking-wide text-center'>Leads frontend design and supports backend development.</p>
                    <div className='flex flex-row gap-4'>
                        <a href="https://github.com/sharmanishant1612"><FiGithub className='text-xl text-gray-400 cursor-pointer hover:text-indigo-500' /></a>
                        <a href="http://www.linkedin.com/in/nishant-sharma-a2b15027b"><LuLinkedin className='text-xl text-gray-400 cursor-pointer hover:text-indigo-500' /></a>
                        <a href="https://wa.me/91986117104894"
                            target="_blank"
                            rel="noopener noreferrer"
                        ><FaWhatsapp className='text-xl text-gray-400 cursor-pointer hover:text-indigo-500' /></a>
                    </div>
                </div>
                <div className='px-8 md:px-0 md:w-[30%] flex flex-col items-center gap-6 bg-white dark:bg-gray-800 rounded-md py-4'>
                    <div className='w-[10rem] h-[10rem] rounded-full p-1 bg-indigo-600'>
                        <div className='h-full w-full bg-white rounded-full p-1'>
                            <img src="/sunny.png" alt="" className='object-cover'/>
                        </div>
                    </div>
                    <div className='flex flex-col items-center gap-1'>
                        <h3 className='text-2xl dark:text-white font-bold text-center'>Gourav Chouchan</h3>
                        <p className='text-indigo-500 text-base font-semibold font-sans tracking-wide'>Content & Data Manager</p>
                    </div>
                    <p className='text-base text-gray-500 font-sans font-semibold tracking-wide text-center'>Organizes content, manages data, ensures structure and timely updates</p>
                    <div className='flex flex-row gap-4'>
                        <a href="https://github.com/Gourav0404"><FiGithub className='text-xl text-gray-400 cursor-pointer hover:text-indigo-500' /></a>
                        <a href="https://www.linkedin.com/in/gaurav-chauhan-9817b8371"><LuLinkedin className='text-xl text-gray-400 cursor-pointer hover:text-indigo-500' /></a>
                        <a href="https://wa.me/919368963104"
                            target="_blank"
                            rel="noopener noreferrer"
                        ><FaWhatsapp className='text-xl text-gray-400 cursor-pointer hover:text-indigo-500' /></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default about


