import { FiGithub } from "react-icons/fi";
import { SlSocialLinkedin } from "react-icons/sl";
import { FaInstagram } from "react-icons/fa";
import { FaRegMessage } from "react-icons/fa6";

function Footer(){
    return(
        <>
           <footer className="h-[] dark:bg-slate-900">

                <div className="h-[] py-10 w-full flex md:flex-row flex-col justify-around gap-5">

                        <div className="h-[] w-[90%] md:w-[25%] md:pl-0 sm:pl-10 pl-3  py-2">
                            <p className="text-[1.5em] text-indigo-500 font-bold py-3">NotesHub</p>
                            <p className="text-black/80 dark:text-white/90 pr-2 pb-2">Empowering students with high-quality academic resources for better learning outcomes and community support.</p>
                            <a href="" className="text-[1.1em] text-indigo-500 ">Learn more about us</a>
                        </div>

                        <div className="h-[] md:w-[30%]  flex md:justify-between justify-around">
                            <div className="flex flex-col">
                                <p  className="text-[1.2em] py-2 text-black/90 dark:text-white font-semibold">Resources</p>
                                <a href="" className="text-black/80 dark:text-white/80 hover:text-indigo-500 duration-300 py-2">Notes</a>
                                <a href="" className="text-black/80 dark:text-white/80 hover:text-indigo-500 duration-300 py-2">Study Tips</a>
                                <a href="" className="text-black/80 dark:text-white/80 hover:text-indigo-500 duration-300 py-2">Downloads</a>
                                <a href="" className="text-black/80 dark:text-white/80 hover:text-indigo-500 duration-300 py-2">Blog</a>
                            </div>
                            <div className="flex flex-col">
                                <p className="text-[1.2em] py-2 text-black/90 dark:text-white  font-semibold">Support</p>
                                <a href="" className="text-black/80 dark:text-white/80 hover:text-indigo-500 duration-300 py-2">Help Center</a>
                                <a href="" className="text-black/80 dark:text-white/80 hover:text-indigo-500 duration-300 py-2">Community </a>
                                <a href="" className="text-black/80 dark:text-white/80 hover:text-indigo-500 duration-300 py-2">FAQs</a>
                                <a href="" className="text-black/80 dark:text-white/80 hover:text-indigo-500 duration-300 py-2">Report Issue</a>
                            </div>
                        </div>

                        <div className="h-[]  md:w-[30%]  flex flex-col items-center ">
                            <p className="text-black/90 dark:text-white text-[1.2em] text-  font-semibold py-2 pl-2">Connect</p>
                            <div className=" flex items-center justify- gap-5 py-2">
                                <a href="" className="text-[2em] text-black/80 dark:text-white/80 font-semibold"><FiGithub /></a>
                                {/* <span className="text-[2em] text-white/80 font-semibold"><FiGithub /></span> */}
                                <a href="" className="text-[2em] text-black/80 dark:text-white/80 font-semibold"><SlSocialLinkedin /></a>
                                <a href="" className="text-[2em] text-black/80 dark:text-white/80 font-semibold"><FaInstagram /></a>
                                <a href="" className="text-[2em] text-black/80 dark:text-white/80 font-semibold"><FaRegMessage /></a>
                                {/* <span className="text-[2em] text-white/80 font-semibold"><SlSocialLinkedin /></span>
                                <span className="text-[2em] text-white/80 font-semibold"><FaInstagram /></span>
                                <span className="text-[2em] text-white/80 font-semibold"><FaRegMessage /></span> */}
                            </div>
                            <p className="text-black/80 dark:text-white/80 py-3 px-2 pr-5 text-center">Follow us on social media for updates and resources.</p>
                        </div>
                </div>

                <div className="bg-black/50 dark:bg-white h-[.1rem] sm:w-[90%] m-auto">

                </div>

                <div className="h-[] m-auto pb-10">
                    <p className="text-center py-2 dark:text-white/80">© 2025 NotesHub. All rights reserved.</p>
                </div>

           </footer>
        </>
    )
}
export default Footer