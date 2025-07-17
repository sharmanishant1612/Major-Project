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
import { MdOutlineFileDownload } from "react-icons/md";



function Resource() {

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
            <div className='w-full h-[12rem] rounded-t-lg'>
                <img src={item.img} alt="" className='h-full w-full object-cover rounded-t-lg'/>
            </div>
            <div className='w-full flex flex-col px-4 py-6'>
                <div className='flex flex-row items-center gap-2'>
                    <div className='h-[2rem] w-[2rem] bg-indigo-600 flex flex-row items-center justify-center rounded-full'>
                        <GrNotes className='text-lg text-gray-500 opacity-80'/>
                    </div>
                    <p className='text-base text-gray-400 font-semibold tracking-wide'>Paper</p>
                </div>
                <h2 className='text-xl text-white font-semibold tracking-wide mt-6'>{item.title}</h2>
                <p className='text-sm text-gray-400 font-semibold tracking-wide mt-2'>{item.desc}</p>
                <div className='flex flex-row items-center gap-2 mt-4'>
                    <div className='flex flex-row justify-center items-center px-2 py-1 bg-indigo-500 opacity-70 rounded-full'>
                        <p className='text-xs text-gray-400 tracking-wide font-semibold'>{selectedCourse}</p>
                    </div>
                    <div className='flex flex-row justify-center items-center px-2 py-1 bg-purple-500 opacity-70 rounded-full'>
                        <p className='text-xs text-gray-400 tracking-wide font-semibold'>{item.subject}</p>
                    </div>
                    <div className='flex flex-row justify-center items-center px-2 py-1 bg-green-500 opacity-70 rounded-full'>
                        <p className='text-xs text-green-200 tracking-wide font-semibold'>Semester {selectedSemester}</p>
                    </div>
                    <div className='flex flex-row justify-center items-center px-2 py-1 bg-yellow-700 opacity-70 rounded-full'>
                        <p className='text-xs text-yellow-300 tracking-wide font-semibold'>{item.year}</p>
                    </div>
                </div>
                <div className='w-full flex flex-row items-center justify-end mt-8'>
                    <div className='rounded-full bg-green-700 flex flex-row items-center gap-2 px-3 py-2'>
                        <MdOutlineFileDownload className='text-green-200 text-xl'/>
                        <p className='text-sm text-green-200 font-semibold'>Download</p>
                    </div>
                </div>
            </div>
        </div>
    )

    const PracticeProblems = ({item}) => (
        <div className='flex flex-col rounded-lg bg-gray-800'>
            <div className='w-full h-[12rem] rounded-t-lg'>
                <img src={item.img} alt="" className='h-full w-full object-cover rounded-t-lg'/>
            </div>
            <div className='w-full flex flex-col px-4 py-6'>
                <div className='flex flex-row items-center gap-2'>
                    <div className='h-[2rem] w-[2rem] bg-indigo-600 flex flex-row items-center justify-center rounded-full'>
                        <MdOutlineFileDownload className='text-lg text-gray-500 opacity-80'/>
                    </div>
                    <p className='text-base text-gray-400 font-semibold tracking-wide'>Practice</p>
                </div>
                <h2 className='text-xl text-white font-semibold tracking-wide mt-6'>{item.title}</h2>
                <p className='text-sm text-gray-400 font-semibold tracking-wide mt-2'>{item.desc}</p>
                <div className='flex flex-row items-center gap-2 mt-4'>
                    <div className='flex flex-row justify-center items-center px-2 py-1 bg-indigo-500 opacity-70 rounded-full'>
                        <p className='text-xs text-gray-400 tracking-wide font-semibold'>{selectedCourse}</p>
                    </div>
                    <div className='flex flex-row justify-center items-center px-2 py-1 bg-purple-500 opacity-70 rounded-full'>
                        <p className='text-xs text-gray-400 tracking-wide font-semibold'>{item.subject}</p>
                    </div>
                    <div className='flex flex-row justify-center items-center px-2 py-1 bg-green-500 opacity-70 rounded-full'>
                        <p className='text-xs text-green-200 tracking-wide font-semibold'>Semester {selectedSemester}</p>
                    </div>
                </div>
                <div className='w-full flex flex-row items-center justify-end mt-8'>
                    <div className='rounded-full bg-green-700 flex flex-row items-center gap-2 px-3 py-2'>
                        <MdOutlineFileDownload className='text-green-200 text-xl'/>
                        <p className='text-sm text-green-200 font-semibold'>Download</p>
                    </div>
                </div>
            </div>
        </div>
    )

    const ReferenceBooks = ({item}) => (
        <div className='flex flex-col rounded-lg bg-gray-800'>
            <div className='w-full h-[12rem] rounded-t-lg'>
                <img src={item.img} alt="" className='h-full w-full object-cover rounded-t-lg'/>
            </div>
            <div className='w-full flex flex-col px-4 py-6'>
                <div className='flex flex-row items-center gap-2'>
                    <div className='h-[2rem] w-[2rem] bg-indigo-600 flex flex-row items-center justify-center rounded-full'>
                        <IoBook className='text-lg text-gray-500 opacity-80'/>
                    </div>
                    <p className='text-base text-gray-400 font-semibold tracking-wide'>Book</p>
                </div>
                <h2 className='text-xl text-white font-semibold tracking-wide mt-6'>{item.title}</h2>
                <p className='text-sm text-gray-400 font-semibold tracking-wide mt-2'>{item.desc}</p>
                <div className='flex flex-row items-center gap-2 mt-4'>
                    <div className='flex flex-row justify-center items-center px-2 py-1 bg-indigo-500 opacity-70 rounded-full'>
                        <p className='text-xs text-gray-400 tracking-wide font-semibold'>{selectedCourse}</p>
                    </div>
                    <div className='flex flex-row justify-center items-center px-2 py-1 bg-purple-500 opacity-70 rounded-full'>
                        <p className='text-xs text-gray-400 tracking-wide font-semibold'>{item.subject}</p>
                    </div>
                    <div className='flex flex-row justify-center items-center px-2 py-1 bg-green-500 opacity-70 rounded-full'>
                        <p className='text-xs text-green-200 tracking-wide font-semibold'>Semester {selectedSemester}</p>
                    </div>
                </div>
                <div className='w-full flex flex-row items-center justify-end mt-8'>
                    <div className='rounded-full bg-blue-500 flex flex-row items-center gap-2 px-3 py-2'>
                        <IoBook className='text-gray-400 text-xl'/>
                        <p className='text-sm text-gray-400 font-semibold'>View Details</p>
                    </div>
                </div>
            </div>
        </div>
    )

    const convertToEmbedUrl = (url) => {
        const videoId = url.split('v=')[1];
        return `https://www.youtube.com/embed/${videoId}`;
    };


    const VideoLectures = ({item}) => (
        <div className='flex flex-col rounded-lg bg-gray-800'>
            <div className='w-full h-[12rem] rounded-t-lg'>
                <iframe src={convertToEmbedUrl(item.vid)} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen controls className='h-full w-full object-cover rounded-t-lg'></iframe>
            </div>
            <div className='w-full flex flex-col px-4 py-6'>
                <div className='flex flex-row items-center gap-2'>
                    <div className='h-[2rem] w-[2rem] bg-indigo-600 flex flex-row items-center justify-center rounded-full'>
                        <IoPlayOutline className='text-lg text-gray-500 opacity-80'/>
                    </div>
                    <p className='text-base text-gray-400 font-semibold tracking-wide'>Video</p>
                </div>
                <h2 className='text-xl text-white font-semibold tracking-wide mt-6'>{item.title}</h2>
                <p className='text-sm text-gray-400 font-semibold tracking-wide mt-2'>{item.desc}</p>
                <div className='flex flex-row items-center gap-2 mt-4'>
                    <div className='flex flex-row justify-center items-center px-2 py-1 bg-indigo-500 opacity-70 rounded-full'>
                        <p className='text-xs text-gray-400 tracking-wide font-semibold'>{selectedCourse}</p>
                    </div>
                    <div className='flex flex-row justify-center items-center px-2 py-1 bg-purple-500 opacity-70 rounded-full'>
                        <p className='text-xs text-gray-400 tracking-wide font-semibold'>{item.subject}</p>
                    </div>
                    <div className='flex flex-row justify-center items-center px-2 py-1 bg-green-500 opacity-70 rounded-full'>
                        <p className='text-xs text-green-200 tracking-wide font-semibold'>Semester {selectedSemester}</p>
                    </div>
                </div>
                <div className='w-full flex flex-row items-center justify-end mt-6'>
                    <div className='rounded-full bg-red-700 flex flex-row items-center gap-2 px-3 py-2'>
                        <IoPlayOutline className='text-gray-400 text-xl'/>
                        <p className='text-sm text-gray-400 font-semibold'>Watch</p>
                    </div>
                </div>
            </div>
        </div>
    )

    const renderCards = (item) => {
        switch (selectedType){
            case 'Previous Papers':
                return <PreviousPapers item={item} />;
            case 'Practice Problems':
                return <PracticeProblems item={item} />;
            case 'Refrence Books':
                return <ReferenceBooks item={item} />;
            case 'Video Lectures':
                return <VideoLectures item={item} />
            default:
                return null;
        }
    }

    // px-6 py-8

  return (
    <div className=' overflow-x-hidden overflow-y-auto bg-slate-950 flex flex-col items-center px-6 py-8 '>
      <h1 className='text-4xl text-white font-bold block text-center'>Resource Library</h1>
        <p className='text-gray-400 text-sm sm:text-lg font-semibold mt-3 text-center'>Access Study Material, Previous Papers and MOre</p>
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
            !selectedType ? 
            <div className='w-full mt-12 flex flex-col items-center px-2'>
                <h2 className='text-2xl text-white/90 font-semibold tracking-wide'>Select Your Course</h2>
                <p className='text-base text-gray-500 font-semibold tracking-wide mt-4'>Choose your course, semester, and resource type to access your study materials</p>
                    <div className='w-full flex flex-col gap-8 md:gap-0 md:flex-row justify-between items-center mt-12'>
                        <div className='w-full md:w-[32%] flex flex-col items-center py-6 rounded-xl bg-gray-800'>
                            <div className='h-[3rem] w-[3rem] flex flex-row justify-center items-center bg-indigo-600 rounded-full opacity-60'>
                                <LuGraduationCap className='text-2xl text-gray-400'/>
                            </div>
                            <h3 className='text-white/90 text-xl font-semibold tracking-wide mt-4 text-center'>Multiple Courses</h3>
                            <p className='text-base text-gray-600 mt-3 font-semibold text-center'>Access Previous Papers, Video Lectures and Practice Problems for B.Tech and BCA Branches</p>
                        </div>
                        <div className='w-full md:w-[32%] flex flex-col items-center py-6 rounded-xl bg-gray-800'>
                            <div className='h-[3rem] w-[3rem] flex flex-row justify-center items-center bg-indigo-600 rounded-full opacity-60'>
                                <IoBook className='text-2xl text-gray-400'/>
                            </div>
                            <h3 className='text-white/90 text-xl font-semibold tracking-wide mt-4 text-center'>Comprehensive Content</h3>
                            <p className='text-base text-gray-600 mt-3 font-semibold text-center'>Previous Paers, Video Lectures and Practice Problems for all Subjects and Units</p>
                        </div>
                        <div className='w-full md:w-[32%] flex flex-col items-center py-6 rounded-xl bg-gray-800'>
                            <div className='h-[3rem] w-[3rem] flex flex-row justify-center items-center bg-indigo-600 rounded-full opacity-60'>
                                <FaRegNoteSticky className='text-2xl text-gray-400'/>
                            </div>
                            <h3 className='text-white/90 text-xl font-semibold tracking-wide mt-4 text-center'>Easy Navigation</h3>
                            <p className='text-base text-gray-600 mt-3 font-semibold text-center'>Filter by Semester and Resource Type for Quick Access</p>
                        </div>
                    </div>        
                    <div className='w-full mt-12 py-6 px-4 bg-gray-800 rounded-xl'>
                        <h3 className='text-white/90 text-xl font-semibold tracking-wide'>How to Access Resources</h3>
                        <p className='text-gray-500 text-base font-semibold mt-4'>1. Select Your Course(B.Tech or BCA)</p>
                        <p className='text-gray-500 text-base font-semibold mt-2'>2. Choose Your Semester(1-8)</p>
                        <p className='text-gray-500 text-base font-semibold mt-2'>3. Pick a Resource Type to View Avalaible Resources</p>
                        <p className='text-gray-500 text-base font-semibold mt-2'>4. Download Previous Papers, Watch Video Lectures and Practice Problems</p>
                    </div>
            </div> :
            <div className='w-full flex flex-col items-center mt-12'>
                <div className='w-full grid grid-cols-2 gap-y-6 md:grid-cols-4 gap-x-6'>
                    <div className={`flex flex-col items-center gap-2 py-6 bg-gray-800 rounded-xl ${selectedType === 'Previous Papers' && 'bg-indigo-700'}`} onClick={()=>setSelectedType('Previous Papers')}>
                        <GrNotes className={`text-xl text-indigo-600 ${selectedType === 'Previous Papers' && 'text-white'}`}/>
                        <p className='text-white text-base font-semibold tracking-wide text-center'>Previous Papers</p>
                    </div>
                    <div className={`flex flex-col items-center gap-2 py-6 bg-gray-800 rounded-xl ${selectedType === 'Video Lectures' && 'bg-indigo-700'}`} onClick={()=>setSelectedType('Video Lectures')}>
                        <IoPlayOutline className={`text-2xl text-indigo-600 ${selectedType === 'Video Lectures' && 'text-white'}`}/>
                        <p className='text-white text-base font-semibold tracking-wide text-center'>Video Lectures</p>
                    </div>
                    <div className={`flex flex-col items-center gap-2 py-6 bg-gray-800 rounded-xl ${selectedType === 'Practice Problems' && 'bg-indigo-700'}`} onClick={()=>setSelectedType('Practice Problems')}>
                        <FaPenNib className={`text-xl text-indigo-600 ${selectedType === 'Practice Problems' && 'text-white'}`}/>
                        <p className='text-white text-base font-semibold tracking-wide text-center'>Practice Problems</p>
                    </div>
                    <div className={`flex flex-col items-center gap-2 py-6 bg-gray-800 rounded-xl ${selectedType==='Refrence Books' && 'bg-indigo-700'}`} onClick={()=>setSelectedType('Refrence Books')}>
                        <FaBook className={`text-xl text-indigo-600 ${selectedType === 'Refrence Books' && 'text-white'}`}/>
                        <p className='text-white text-base font-semibold tracking-wide text-center'>Reference Books</p>
                    </div>
                </div>
                <div className='w-full grid px-6 sm:px-0 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-4 mt-12'>
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
