import { useEffect, useState } from "react"

function Navbar(){

    let [hamberger,sethamberger] = useState(true)
    // let [darkmode,setdarkmode] = useState(true)
    let [darkmode, setdarkmode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
    });

   


    

    useEffect(()=>{
          if(darkmode){
            document.documentElement.classList.add('dark')
             localStorage.setItem("theme", "dark");
        }
        else{
            document.documentElement.classList.remove('dark')
             localStorage.setItem("theme", "light");
        }
    },[darkmode]);

    return(
        <>
            <header className="sticky top-0 z-50">

                <nav className="h-[3.5rem] sm:h-[4.5rem] w-full bg-white dark:bg-slate-800 flex justify-between items-center px-3   sm:px-10 lg:px-5 ">

                    <div className="h-full   flex justify-center items-center">
                         {/* <img src="./public/NotesHub.png" alt="" className="h-[80%] w-full object-fit rounded-lg" /> */}
                         <p className="text-indigo-500 font-semibold text-[1.7em] sm:text-[2em] hover:text-indigo-700 duration-300">NotesHub</p>
                    </div>

                    <div className="h-full w-[%]  dark:text-white/85 lg:flex items-center lg:gap-12 px-5 font-semibold hidden ">
                        <a href="" className="hover:text-indigo-500 dark:hover:text-white">Home</a>
                        <a href="" className="hover:text-indigo-500 dark:hover:text-white">About</a>
                        <a href="" className="hover:text-indigo-500 dark:hover:text-white">Notes</a>
                        <a href="" className="hover:text-indigo-500 dark:hover:text-white">Resources</a>
                        <a href="" className="hover:text-indigo-500 dark:hover:text-white">Blog</a>
                        <a href="" className="hover:text-indigo-500 dark:hover:text-white">Contact</a>
                        <a href="" className="hover:text-indigo-500 dark:hover:text-white"><i className="fa-regular fa-heart px-2 text-[1.2em]"></i>Favorites</a>
                        
                    </div>

                    <div className="h-full w-[%]  flex items-center gap-5 sm:gap-10 lg:gap-16 lg:px-3">

                        <i className="fa-regular fa-heart px-2 text-[1.3em] sm:text-[1.5em] py-1 text-center rounded-md text-white lg:hidden "></i>

                       <div>
                            {
                                darkmode ? <i className="fa-regular fa-moon px-2 py-1 rounded-md text-blue-500 text-[1.3em] sm:text-[1.5em]  bg-white/5 hover:bg-white/20 duration-300" onClick={()=>{setdarkmode(!darkmode)}}></i> :
                                <i className="fa-regular fa-sun px-2 py-1 rounded-md text-yellow-400 text-[1.3em] sm:text-[1.5em] bg-black/5 hover:bg-black/20 duration-300" onClick={()=>{setdarkmode(!darkmode)}}></i>
                            }
                       </div>

                         <a href="" className="bg-blue-500 hover:bg-blue-700 duration-300 text-white px-4  py-2 mr-3 rounded-md font-semibold hidden lg:block">Login</a>

                         <div className="lg:hidden flex  mt-1">
                                {
                             hamberger ? <i className="fa-solid fa-bars text-[1.6em] sm:text-[1.7em] dark:text-white" onClick={()=>{sethamberger(!hamberger)}}></i> :
                             <i className="fa-solid fa-xmark text-[1.6em] sm:text-[1.7em] dark:text-white" onClick={()=>{sethamberger(!hamberger)}}></i>
                                }

                         </div>
                         
                    </div>          
            </nav>
                     {/* second div */}
                     <div className= {hamberger ? "hidden" : "h-[] w-full bg-slate-700 text-white font-semibold items-center flex flex-col py-2 fixed"}>
                        <a href="" className="p-2">Home</a>
                        <a href="" className="p-2">About</a>
                        <a href="" className="p-2">Notes</a>
                        <a href="" className="p-2">Resources</a>
                        <a href="" className="p-2">Blog</a>
                        <a href="" className="p-2">Contact</a>
                        <a href="" className="bg-blue-500 text-white px-4  py-2 my-2 rounded-md font-semibold  lg:block">Login</a>
                     </div>
            </header>
           
        </>
    )
}
export default Navbar