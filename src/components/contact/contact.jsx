import React from 'react'
import { MdOutlineMail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineLocationOn } from "react-icons/md";
import { BsSend } from "react-icons/bs";

function contact() {
  return (
    <div className='max-h-screen w-screen bg-slate-950 py-8 px-6 flex flex-col items-center overflow-y-auto overflow-x-hidden'>
        <h1 className='text-4xl text-white font-bold block'>Contact Us</h1>
        <p className='text-gray-500 text-base font-semibold mt-3'>Have doubts? We'hd love to hear from you.</p>
        <div className='w-screen flex flex-col md:flex-row justify-between gap-12 md:gap-0 mt-12 px-6'>
            <div className='md:max-w-[30%] flex flex-col gap-4'>
                <div className='flex flex-row items-center gap-4'>
                    <div className='flex flex-row items-center justify-between p-2 rounded-md bg-indigo-500 text-white'>
                        <MdOutlineMail className='text-2xl'/>
                    </div>
                    <div className='flex flex-col'>
                        <p className='font-semibold text-white text-lg'>Email</p>
                        <p className='text-gray-400 font-semibold'>sharmanishant08751@gmail.com</p>
                    </div>
                </div>
                <div className='flex flex-row items-center gap-4'>
                    <div className='flex flex-row items-center justify-between p-2 rounded-md bg-indigo-500 text-white'>
                        <FaPhoneAlt className='text-xl'/>
                    </div>
                    <div className='flex flex-col'>
                        <p className='font-semibold text-white text-lg'>Phone</p>
                        <p className='text-gray-400 font-semibold'>+91 9027259417</p>
                    </div>
                </div>
                <div className='flex flex-row items-center gap-4'>
                    <div className='flex flex-row items-center justify-between p-2 rounded-md bg-indigo-500 text-white'>
                        <MdOutlineLocationOn className='text-2xl'/>
                    </div>
                    <div className='flex flex-col'>
                        <p className='font-semibold text-white text-lg'>Office</p>
                        <p className='text-gray-400 font-semibold'>Saini Niwas Street No.2 Shivpuri Modinagar(Ghaziabad)</p>
                    </div>
                </div>
            </div>
            <form className='w-full md:w-[60%] flex flex-col gap-3'>
                <div className='flex flex-col gap-2'>
                    <label htmlFor="name" className='text-white text-lg font-semibold'>Name</label>
                    <input type="text" id='name' name='name' className='w-full h-[2rem] outline-indigo-500 border-none bg-gray-800 rounded-md px-4 text-white' />
                </div>
                <div className='flex flex-col gap-2'>
                    <label htmlFor="email" className='text-white text-lg font-semibold'>Email</label>
                    <input type="text" id='email' name='email' className='w-full h-[2rem] outline-indigo-500 border-none bg-gray-800 rounded-md px-4 text-white' />
                </div>
                <div className='flex flex-col gap-2'>
                    <label htmlFor="subject" className='text-white text-lg font-semibold'>Subject</label>
                    <input type="text" id='subject' name='subject' className='w-full h-[2rem] outline-indigo-500 border-none bg-gray-800 rounded-md px-4 text-white' />
                </div>
                <div className='flex flex-col gap-2'>
                    <label htmlFor="message" className='text-white text-lg font-semibold'>Message</label>
                    <textarea id='message' name='message' rows="5" className='w-full outline-indigo-500 border-none bg-gray-800 rounded-md px-4 text-white'></textarea>
                </div>
                <div className='w-full bg-blue-600 hover:bg-lue-700 text-white font-semibold text-lg py-1 rounded-md mt-2 flex flex-row justify-center items-center'>
                    <BsSend className='mr-2'/>
                    Send Message
                </div>
            </form>
        </div>
    </div>
  )
}

export default contact
