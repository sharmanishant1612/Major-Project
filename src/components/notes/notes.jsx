import React, { useState } from 'react'
import { CiFilter } from "react-icons/ci";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";
import { syllabus } from './syllabus.js';

function notes() {

    const [selectedCourse,setSelectedCourse] = useState("");
    const [selectedSemester,setSelectedSemester] = useState("");
    const [selectedSubject,setSelectedSubject] = useState("");

    const courses = syllabus.map((s) => s.course);
    const semesters = selectedCourse
    ? syllabus.find((d) => d.course === selectedCourse)?.semesters.map((s) => s.semester) || []
    : []; 

    const subjects = selectedCourse && selectedSemester
    ? syllabus
        .find((d) => d.course === selectedCourse)
        ?.semesters.find((s) => s.semester === Number(selectedSemester))
        ?.subjects.map((sub) => sub.name) || []
    : [];

    const units =
        selectedCourse && selectedSemester && selectedSubject
            ? syllabus
                .find((d) => d.course === selectedCourse)
                ?.semesters.find((s) => s.semester === Number(selectedSemester))
                ?.subjects.find((sub) => sub.name === selectedSubject)
                ?.units || []
            : [];

  return (
    <div className='max-h-screen w-screen py-12 px-6 flex flex-col items-center bg-slate-950 overflow-x-hidden overflow-y-auto'>
        <h1 className='text-4xl text-white font-bold block text-center'>Academic Notes</h1>
        <p className='text-gray-400 text-sm sm:text-lg font-semibold mt-3 text-center'>Browse Our Collection of High Quality Academic Notes</p>
        <div className='w-[90%] sm:w-[60%] md:w-[90%] py-4 rounded-lg border-[1px] border-gray-400 bg-gray-800 mt-12 flex flex-col gap-6 md:gap-0 md:flex-row items-center justify-evenly px-4 md:px-0'>

            <div className='w-full md:w-[30%] h-[60%] flex flex-row items-center gap-6'>
                <CiFilter className='text-4xl text-gray-400 font-bold'/>

                <select value={selectedCourse} onChange={(e)=>{setSelectedCourse(e.target.value);setSelectedSemester("");setSelectedSubject("")}} className='h-[2.5rem] flex-1 bg-gray-700 rounded-md border-[1px] border-gray-400 text-white pl-2'>
                    <option value="">Select Course</option>
                    {courses.map((course) => (
                        <option key={course} value={course}>{course}</option>
                    ))}
                </select>
            </div>

            <select value={selectedSemester} onChange={(e) => {setSelectedSemester(Number(e.target.value));setSelectedSubject("")}} disabled={!selectedCourse} className='w-full md:w-[30%] h-[2.5rem] bg-gray-700 rounded-md border-[1px] border-gray-400 text-white pl-2'>
                <option value="">Select Semester</option>
                {semesters.map((sem) => (
                    <option key={sem} value={sem}>{sem}</option>
                ))}
            </select>

            <select value={selectedSubject} onChange={(e) => setSelectedSubject(e.target.value)} disabled={!selectedSemester} className='w-full md:w-[30%] h-[2.5rem] bg-gray-700 rounded-md border-[1px] border-gray-400 text-white pl-2'>
                <option value="">Select Subject</option>
                {subjects.map(sub => (
                    <option key={sub} value={sub}>{sub}</option>
                ))}
            </select>
        </div>

        <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-8 mt-12'>

            {
                units.map((unit)=>(
                    <div key={unit.number} className='flex flex-col px-4 py-6 rounded-2xl border-2 border-gray-700 hover:shadow-[4px_-5px_15px_12px_rgba(162,_28,_175,_0.1)] hover:scale-105 transition-all transform duration-300 ease-in'>
                        <h3 className='text-white text-lg font-semibold tracking-wide'>{selectedSubject} Unit {unit.number}</h3>
                        <p className='text-sm text-gray-600 font-semibold mt-2'>{unit.title}</p>
                        <div className='grid grid-cols-3 gap-x-4 gap-y-4 mt-4'>
                            <div className='rounded-xl bg-blue-500 flex flex-row justify-center items-center py-1'>
                                <p className='text-xs text-white/80 font-semibold'>{selectedCourse}</p>
                            </div>
                            {/* <div className='rounded-xl bg-purple-500 flex flex-row justify-center items-center py-1'>
                                <p className='text-xs text-white/80 font-semibold'>{selectedSubject}</p>
                            </div> */}
                            <div className='rounded-xl bg-pink-600 flex flex-row justify-center items-center py-1'>
                                <p className='text-xs text-white/80 font-semibold'>Semester {selectedSemester}</p>
                            </div>
                            <div className='rounded-xl bg-yellow-700 flex flex-row justify-center items-center py-1'>
                                <p className='text-xs text-white/80 font-semibold'>Unit {unit.number}</p>
                            </div>
                        </div>
                        <div className='w-full flex flex-row items-center justify-between mt-6'>
                            <div className='p-3 bg-white/20 rounded-full cursor-pointer hover:bg-pink-700'>
                                <FaRegHeart className='text-white font-semibold'/>
                            </div>
                            <div className='rounded-full bg-green-700 flex flex-row items-center gap-2 px-3 py-2'>
                                <MdOutlineFileDownload className='text-green-200 text-xl'/>
                                <p className='text-sm text-green-200 font-semibold'>Download</p>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default notes
