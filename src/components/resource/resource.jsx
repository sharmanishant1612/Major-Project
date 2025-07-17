import React,{useState} from 'react'
import { HiMagnifyingGlass } from "react-icons/hi2";
import {resources} from "./resources.js"
import { CiFilter } from "react-icons/ci";
import { LuGraduationCap } from "react-icons/lu";
import { IoBook } from "react-icons/io5";
import { FaRegNoteSticky } from "react-icons/fa6";
import { GrNotes } from "react-icons/gr";
import { IoPlayOutline } from "react-icons/io5";
import { FaPenNib } from "react-icons/fa6";
import { FaBook } from "react-icons/fa6";


function Resource() {

    const [input,setInput] = useState('');

    function handleInputChange(e){
        // console.log(e.target.value)
        setInput(e.target.value);
    }

    const [selectedCourse,setSelectedCourse] = useState("");
    const [selectedSemester,setSelectedSemester] = useState("");
    const [selectedType,setSelectedType] = useState("");
    
    const courses = resources.map((s) => s.course);
    const semesters = selectedCourse
    ? resources.find((d) => d.course === selectedCourse)?.semesters.map((s) => s.semester) || []
    : []; 
    
    const resource_types = selectedCourse && selectedSemester
    ? resources
        .find((d) => d.course === selectedCourse)
        ?.semesters.find((s) => s.semester === Number(selectedSemester))
        ?.types.map((sub) => sub.type) || []
    : [];
    
    const reference_material =
        selectedCourse && selectedSemester && selectedType
            ? resources
                .find((d) => d.course === selectedCourse)
                ?.semesters.find((s) => s.semester === Number(selectedSemester))
                ?.types.find((sub) => sub.type === selectedType)
                ?.contents || []
            : [];

    
    const PreviousPapers = ({item}) => (
        <div className='flex flex-col rounded-lg bg-gray-800'>
            <div className='w-full h-[5rem] flex flex-row justify-center items-center rounded-t-lg'>
                <img src="" alt="" className='object-cover rounded-t-lg'/>
            </div>
        </div>
    )

    const renderCards = (item) => {
        switch (selectedType){
            case 'Previous Papers':
                return <PreviousPapers item={item} />;
            default:
                return null;
        }
    }

    // px-6 py-8

  return (
    <div className=' overflow-x-hidden overflow-y-auto bg-slate-950 flex flex-col items-center px-6 py-8 '>
      <h1 className='text-4xl text-white font-bold block text-center'>Resource Library</h1>
        <p className='text-gray-400 text-sm sm:text-lg font-semibold mt-3 text-center'>Access Study Material, Previous Papers and MOre</p>
        <div className='w-3/4 md:w-1/2 h-[3rem] rounded-lg bg-gray-800 border-[1px] border-gray-600 flex flex-row items-center px-4 mt-8 hover:border-2 hover:border-indigo-500'>
            <HiMagnifyingGlass className='text-gray-400 text-xl'/>
            <input type="text" name='search' placeholder='Search articles...' value={input} onChange={handleInputChange} className='h-[3rem] w-full bg-transparent outline-none ml-2 text-white' />
        </div>
        <div className='w-[90%] sm:w-[60%] md:w-[90%] py-4 rounded-lg border-[1px] border-gray-400 bg-gray-800 mt-12 flex flex-col gap-6 md:gap-0 md:flex-row items-center justify-evenly px-4 md:px-0'>
        
            <div className='w-full md:w-[30%] h-[60%] flex flex-row items-center gap-6'>
                <CiFilter className='text-4xl text-gray-400 font-bold'/>
        
                <select value={selectedCourse} onChange={(e)=>{setSelectedCourse(e.target.value);setSelectedSemester("");setSelectedType("")}} className='h-[2.5rem] flex-1 bg-gray-700 rounded-md border-[1px] border-gray-400 text-white pl-2'>
                    <option value="">Select Course</option>
                    {courses.map((course) => (
                        <option key={course} value={course}>{course}</option>
                    ))}
                    </select>
            </div>
        
            <select value={selectedSemester} onChange={(e) => {setSelectedSemester(Number(e.target.value));setSelectedType("")}} disabled={!selectedCourse} className='w-full md:w-[30%] h-[2.5rem] bg-gray-700 rounded-md border-[1px] border-gray-400 text-white pl-2'>
                <option value="">Select Semester</option>
                {semesters.map((sem) => (
                    <option key={sem} value={sem}>{sem}</option>
                ))}
            </select>
        
            <select value={selectedType} onChange={(e) => setSelectedType(e.target.value)} disabled={!selectedSemester} className='w-full md:w-[30%] h-[2.5rem] bg-gray-700 rounded-md border-[1px] border-gray-400 text-white pl-2'>
                <option value="">Select Resource Type</option>
                {resource_types.map(sub => (
                    <option key={sub} value={sub}>{sub}</option>
                ))}
            </select>
        </div>
        {
            // !selectedType ? 
            // <div className='w-full mt-12 flex flex-col items-center px-2'>
            //     <h2 className='text-2xl text-white/90 font-semibold tracking-wide'>Select Your Course</h2>
            //     <p className='text-base text-gray-500 font-semibold tracking-wide mt-4'>Choose your course, semester, and resource type to access your study materials</p>
            //         <div className='w-full flex flex-col gap-8 md:gap-0 md:flex-row justify-between items-center mt-12'>
            //             <div className='w-full md:w-[32%] flex flex-col items-center py-6 rounded-xl bg-gray-800'>
            //                 <div className='h-[3rem] w-[3rem] flex flex-row justify-center items-center bg-indigo-600 rounded-full opacity-60'>
            //                     <LuGraduationCap className='text-2xl text-gray-400'/>
            //                 </div>
            //                 <h3 className='text-white/90 text-xl font-semibold tracking-wide mt-4 text-center'>Multiple Courses</h3>
            //                 <p className='text-base text-gray-600 mt-3 font-semibold text-center'>Access Previous Papers, Video Lectures and Practice Problems for B.Tech and BCA Branches</p>
            //             </div>
            //             <div className='w-full md:w-[32%] flex flex-col items-center py-6 rounded-xl bg-gray-800'>
            //                 <div className='h-[3rem] w-[3rem] flex flex-row justify-center items-center bg-indigo-600 rounded-full opacity-60'>
            //                     <IoBook className='text-2xl text-gray-400'/>
            //                 </div>
            //                 <h3 className='text-white/90 text-xl font-semibold tracking-wide mt-4 text-center'>Comprehensive Content</h3>
            //                 <p className='text-base text-gray-600 mt-3 font-semibold text-center'>Previous Paers, Video Lectures and Practice Problems for all Subjects and Units</p>
            //             </div>
            //             <div className='w-full md:w-[32%] flex flex-col items-center py-6 rounded-xl bg-gray-800'>
            //                 <div className='h-[3rem] w-[3rem] flex flex-row justify-center items-center bg-indigo-600 rounded-full opacity-60'>
            //                     <FaRegNoteSticky className='text-2xl text-gray-400'/>
            //                 </div>
            //                 <h3 className='text-white/90 text-xl font-semibold tracking-wide mt-4 text-center'>Easy Navigation</h3>
            //                 <p className='text-base text-gray-600 mt-3 font-semibold text-center'>Filter by Semester and Resource Type for Quick Access</p>
            //             </div>
            //         </div>        
            //         <div className='w-full mt-12 py-6 px-4 bg-gray-800 rounded-xl'>
            //             <h3 className='text-white/90 text-xl font-semibold tracking-wide'>How to Access Resources</h3>
            //             <p className='text-gray-500 text-base font-semibold mt-4'>1. Select Your Course(B.Tech or BCA)</p>
            //             <p className='text-gray-500 text-base font-semibold mt-2'>2. Choose Your Semester(1-8)</p>
            //             <p className='text-gray-500 text-base font-semibold mt-2'>3. Pick a Resource Type to View Avalaible Resources</p>
            //             <p className='text-gray-500 text-base font-semibold mt-2'>4. Download Previous Papers, Watch Video Lectures and Practice Problems</p>
            //         </div>
            // </div> :
            <div className='w-full flex flex-col items-center mt-12'>
                <div className='w-full grid grid-cols-2 gap-y-6 md:grid-cols-4 gap-x-6'>
                    <div className={`flex flex-col items-center gap-2 py-6 bg-gray-800 rounded-xl ${selectedType === 'Previous Papers' && 'bg-indigo-700'}`}>
                        <GrNotes className={`text-xl text-indigo-600 ${selectedType === 'Previous Papers' && 'text-white'}`}/>
                        <p className='text-white text-base font-semibold tracking-wide'>Previous Papers</p>
                    </div>
                    <div className={`flex flex-col items-center gap-2 py-6 bg-gray-800 rounded-xl ${selectedType === 'Video Lectures' && 'bg-indigo-700'}`}>
                        <IoPlayOutline className={`text-2xl text-indigo-600 ${selectedType === 'Video Lectures' && 'text-white'}`}/>
                        <p className='text-white text-base font-semibold tracking-wide'>Video Lectures</p>
                    </div>
                    <div className={`flex flex-col items-center gap-2 py-6 bg-gray-800 rounded-xl ${selectedType === 'Practice Problems' && 'bg-indigo-700'}`}>
                        <FaPenNib className={`text-xl text-indigo-600 ${selectedType === 'Practice Problems' && 'text-white'}`}/>
                        <p className='text-white text-base font-semibold tracking-wide'>Practice Problems</p>
                    </div>
                    <div className={`flex flex-col items-center gap-2 py-6 bg-gray-800 rounded-xl ${selectedType==='Refrence Books' && 'bg-indigo-700'}`}>
                        <FaBook className={`text-xl text-indigo-600 ${selectedType === 'Refrence Books' && 'text-white'}`}/>
                        <p className='text-white text-base font-semibold tracking-wide'>Reference Books</p>
                    </div>
                </div>
                <div className='w-full grid grid-cols-3 gap-x-4 gap-y-4 mt-12'>
                    {
                        reference_material.map(renderCards)
                    }
                </div>
            </div>
        }
    </div>
  )
}

export default Resource
