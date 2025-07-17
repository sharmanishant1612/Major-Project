import './hero.css'
import { LuDownload } from "react-icons/lu"
import { MdOutlinePeopleOutline } from "react-icons/md"
import { IoBookOutline } from "react-icons/io5"
import { FaArrowRightLong } from "react-icons/fa6"
import { FaRegStar } from "react-icons/fa";
import notes from '../../notes/notes'
import { Link } from 'react-router-dom'


function Hero(){
    return(
        <>
             <main className='  bg-black/10 dark:bg-gray-900 h-'>
                <div className='flex lg:flex-row flex-col items-center justify-evenly  '>

                    <div className='h-[]  w-[95%] sm:w-[80%] lg:w-[35%] py-6'>

                    <p className='text-indigo-500 text-[2em] sm:text-[3em] text-center font-bold px-5 md:px-0'><span className='dark:text-white text-black'>Access Academic Notes </span>Anytime, Anywhere</p>

                    <p className='dark:text-white/90 text-black/80 font-semibold text-[1.1em] text-center px-5 py-2 md:px-0'>Join thousands of students who are already using NotesNeo to access high-quality academic notes. Study smarter, not harder.</p>

                    <div className=' flex sm:flex-row flex-col  justify-center gap-4 mt-7'>
                        <a href="" className='bg-indigo-700 py-4 px-3 rounded-md font-semibold text-white flex items-center '> <span className='px-2'><MdOutlinePeopleOutline  /></span>
                         Join WhatsApp Group</a>
                        <a href="" className='bg-white py-4 px-3 border border-indigo-500 rounded-md font-semibold text-indigo-700 flex items-center'> <span className='px-2'><LuDownload /></span>
                        Download Android App</a>
                    </div>
                    
                    <div className='flex  justify-center  mt-5'>
                        <Link to="/notes" className='bg-gradient-to-r from-indigo-700 to-violet-500 px-3 py-3 text-white font-semibold rounded-md flex items-center justify-center'> <span className='px-2'><IoBookOutline /></span>Search Notes Here <span  className='px-2'><FaArrowRightLong /></span></Link>
                    </div>
                </div>

                <div className='h-[] w-[90%] sm:w-[60%] md:w-[50%] lg:w-[35%] mt-5 sm:mt-0 py-2 '>
                    <img src="./public/noteshub.svg" alt=""  className='h-full w-full object-fill hover:scale-105 duration-300'/>
                </div>

            </div>

            <div className='h-[] flex flex-wrap justify-center items-center gap-5 px-5 w-full  pb-20  mt-8'>
                    <div className='h-[] sm:w-[16rem] flex gap-3 items-center px-2 py-2 bg-white dark:bg-slate-800 rounded-md'>
                        <div className='h-[3rem] w-[3rem] bg-blue-700  rounded-md flex justify-center items-center'>
                                <span className='text-[2em] invert'><MdOutlinePeopleOutline /></span>
                        </div>
                        <div>
                            <p className='text-indigo-500 font-bold text-[1.3em] sm:text-[1.5em]'>1,000+</p>
                            <p className='text-black/80 font-semibold dark:text-white/90 text-[1.1em]'>users</p>
                        </div>
                    </div>

                     <div className='h-[] sm:w-[16rem] flex gap-3 items-center px-2 py-2 bg-white dark:bg-slate-800 rounded-md'>
                        <div className='h-[3rem] w-[3rem] bg-violet-600  rounded-md flex justify-center items-center'>
                                <span className='text-[2em] invert'><IoBookOutline /></span>
                        </div>
                        <div>
                            <p className='text-indigo-500 font-bold text-[1.3em] sm:text-[1.5em]'>1,000+</p>
                            <p className='text-black/80 font-semibold dark:text-white/90 text-[1.1em]'>users</p>
                        </div>
                    </div>

                    <div className='h-[] sm:w-[16rem] flex gap-3 items-center px-2 py-2 bg-white dark:bg-slate-800 rounded-md'>
                        <div className='h-[3rem] w-[3rem] bg-green-500  rounded-md flex justify-center items-center'>
                                <span className='text-[2em] invert'><LuDownload /></span>
                        </div>
                        <div>
                            <p className='text-indigo-500 font-bold text-[1.3em] sm:text-[1.5em]'>1,000+</p>
                            <p className='text-black/80 font-semibold dark:text-white/90 text-[1.1em]'>users</p>
                        </div>
                    </div>

                    <div className='h-[] sm:w-[16rem] flex gap-3 items-center px-2 py-2 bg-white dark:bg-slate-800 rounded-md'>
                        <div className='h-[3rem] w-[3rem] bg-yellow-500  rounded-md flex justify-center items-center'>
                                <span className='text-[2em] invert'><FaRegStar /></span>
                        </div>
                        <div>
                            <p className='text-indigo-500 font-bold text-[1.3em] sm:text-[1.5em]'>1,000+</p>
                            <p className='text-black/80 font-semibold dark:text-white/90 text-[1.1em]'>users</p>
                        </div>
                    </div>
                    
            </div>
        </main>
        </>
    )
}
export default Hero