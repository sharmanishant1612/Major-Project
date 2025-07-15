import { LuDownload } from "react-icons/lu"
import { MdOutlinePeopleOutline } from "react-icons/md"
import { IoBookOutline } from "react-icons/io5"
import { FaArrowRightLong } from "react-icons/fa6"
import { FaRegStar } from "react-icons/fa";
import { HiOutlineDeviceMobile } from "react-icons/hi";
import { GrUpdate } from "react-icons/gr";


function Feature(){
    return(
        <>
            <main className="h-[] w-full bg-slate-800">

                <p className="text-[1.5em] text-center text-indigo-500 font-semibold pt-10">Features</p>
                <p className="text-[2.5em] text-white text-center font-bold">Everything you need to excel</p>

                <div className="h-[] w-full mt-5 flex flex-wrap justify-center gap-5 pb-10 " >

                        <div className="w-[90%] md:w-[45%] flex gap-4 py-3">
                            <div className="h-[3rem] w-[3rem] bg-indigo-600 rounded-md flex justify-center items-center">
                                <span className="text-[1.6em] invert px-2"><IoBookOutline /></span>
                            </div>
                            <div>
                                <p className="text-[1.1em] font-semibold text-white">Comprehensive Notes</p>                                
                                <p className="text-white/80">Access detailed notes for all subjects, carefully curated by top educators.</p>
                            </div>
                        </div>

                         <div className="w-[90%] md:w-[45%] flex gap-4 py-3">
                            <div className="h-[3rem] w-[3rem] bg-indigo-600 rounded-md flex justify-center items-center">
                                <span className="text-[1.6em] invert px-2 "><LuDownload /></span>
                            </div>
                            <div>
                                <p className="text-[1.1em] font-semibold text-white">Easy Downloads</p>                                
                                <p className="text-white/80">ADownload notes instantly for offline access and study.</p>
                            </div>
                        </div>

                         <div className="w-[90%] md:w-[45%] flex gap-4 py-3">
                            <div className="h-[3rem] w-[3rem] bg-indigo-600 rounded-md flex justify-center items-center">
                                <span className="text-[1.6em] invert px-2"><MdOutlinePeopleOutline /></span>
                            </div>
                            <div>
                                <p className="text-[1.1em] font-semibold text-white">Community Support</p>                                
                                <p className="text-white/80">Join the WhatsApp community for discussions and support.</p>
                            </div>
                        </div>

                         <div className="w-[90%] md:w-[45%] flex gap-4 py-3">
                            <div className="h-[3rem] w-[3rem] bg-indigo-600 rounded-md flex justify-center items-center">
                                <span className="text-[1.6em] invert px-2"><FaRegStar /></span>
                            </div>
                            <div>
                                <p className="text-[1.1em] font-semibold text-white">Personalized Study Resources</p>                                
                                <p className="text-white/80">Save favorite notes for quick access and create a customized study library.</p>
                            </div>
                        </div>

                         <div className="w-[90%] md:w-[45%] flex gap-4 py-3">
                            <div className="h-[3rem] w-[3rem] bg-indigo-600 rounded-md flex justify-center items-center">
                                <span className="text-[1.6em] invert px-2"><HiOutlineDeviceMobile /></span>
                            </div>
                            <div>
                                <p className="text-[1.1em] font-semibold text-white">Multi-Device Access</p>                                
                                <p className="text-white/80">Access your notes and study materials on any device.</p>
                            </div>
                        </div>

                         <div className="w-[90%] md:w-[45%] flex gap-4 py-3">
                            <div className="h-[3rem] w-[3rem] bg-indigo-600 rounded-md flex justify-center items-center">
                                <span className="text-[1.6em] invert px-2"><GrUpdate /></span>
                            </div>
                            <div>
                                <p className="text-[1.1em] font-semibold text-white">Updated Content</p>                                
                                <p className="text-white/80">Stay up-to-date with the latest notes and resources for your studies.</p>
                            </div>
                        </div>

                </div>

            </main>
        </>
    )
}
export default Feature