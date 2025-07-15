import './creator.css'
import { RiShareBoxFill } from "react-icons/ri";

function Creator(){
    return(
        <>
            <section className='background h-[] w-full bg-indigo-900 pb-10'>

                <p className='text-[2em] text-center text-white pt-10 font-bold'>About the Creator</p>
                <p className='text-[1.2em] text-center text-white/90 py-5 font-semibold px-2'>A Contribution to Education and a Vision for Empowering Students</p>

                <div className='flex justify-center gap-10 px-5'>

                    <div className='h-[] w-[] px-20 bg-indigo-950 flex flex-col items-center py-5 rounded-lg'>
                        <div className='h-[12rem] w-[12rem] rounded-full bg-indigo-700 p-2'>
                            <div className='h-full w-full bg-white rounded-full'>

                            </div>
                        </div>
                        <p className='py-2  pt-3 text-[1.3em] text-white font-semibold'>Nishant Sharma</p>
                        <p className='text-[1.1em] text-white/90'>Full Stack Developer</p>
                    </div>

                    <div className='h-[] w-[60%] bg-indigo-950 text-white/90 rounded-lg py-3'>
                        <p className='px-5 pt-4 text-[1.1em]'>Hi, I'm Deepak Modi, a passionate developer dedicated to making education more accessible and engaging for students. This website is a small step towards achieving that goal.</p>
                        <p className='px-5 pt-6'>As a student myself, I understand the challenges of finding quality study materials. NotesNeo is built with love and dedication to help fellow students excel in their academic journey.</p>

                        <div className='mt-10 bg-slate-700 px-5 flex gap-3'>
                                <a href="" className='bg-white text-indigo-500 py-2 px-2 rounded-md font-semibold flex items-center'>Visit My Portfolio <span className='px-1'><RiShareBoxFill /></span></a>

                                <a href="" className='bg-white text-indigo-500 py-2 px-2 rounded-md font-semibold flex items-center'>Visit My Portfolio <span className='px-1'><RiShareBoxFill /></span></a>

                                <a href="" className='bg-white text-indigo-500 py-2 px-2 rounded-md font-semibold flex items-center'>Visit My Portfolio <span className='px-1'><RiShareBoxFill /></span></a>
                                
                        </div>
                    </div>

                </div>

            </section>
        </>
    )
}
export default Creator