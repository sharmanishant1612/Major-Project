import { use, useEffect, useState } from "react"
import { Link ,NavLink} from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../authProvider/AuthProvider";
import { useContext } from "react";


function Navbar(){

    const navigate = useNavigate();

    const {user,setuser} = useContext(AuthContext);
    // let [user,setuser] = useState(null);

    let [showDiv,setshowDiv] = useState(false);

    let [hamberger,sethamberger] = useState(true)
    // let [darkmode,setdarkmode] = useState(true)
    let [darkmode, setdarkmode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
    });


    const navLinkStyle = ({ isActive }) =>
    isActive
      ? "text-indigo-500 border-b-2 border-indigo-500  font-semibold"
      : "hover:text-indigo-500 dark:hover:text-white";


    const handleLogout = async ()=>{
        await localStorage.removeItem("user");
        setuser(null);
        setshowDiv(!showDiv);
    }
   

    // useEffect(()=>{
    //     const user = localStorage.getItem("user");
    //     if(user){
    //         setuser(JSON.parse(user));
    //     }

    // },[])
    

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
                         <p className="text-indigo-500 font-semibold text-[1.7em] sm:text-[2em] hover:text-indigo-700 duration-300">NotesHub</p>
                    </div>

                    <div className="h-full w-[%]  dark:text-white/85 lg:flex items-center lg:gap-12 px-5 font hidden ">
                        <NavLink to="/" className={navLinkStyle}>Home</NavLink>
                        <NavLink to="/about" className={navLinkStyle}>About</NavLink>
                        <NavLink to="/notes" className={navLinkStyle}>Notes</NavLink>
                        <NavLink to="/blog" className={navLinkStyle}>Blog</NavLink>
                        <NavLink to="/resource" className={navLinkStyle}>Resources</NavLink>
                        <NavLink to="/contact" className={navLinkStyle}>Contact</NavLink>
                        <NavLink to="/favroites" className={navLinkStyle}><i className="fa-regular fa-heart px-2 text-[1.2em]"></i>Favorites</NavLink>
                        
                    </div>

                    <div className="h-full w-[%]  flex items-center gap-5 sm:gap-10 lg:gap-16 lg:px-3">

                        <i className="fa-regular fa-heart px-2 text-[1.3em] sm:text-[1.5em] py-1 text-center rounded-md text-white lg:hidden "></i>

                       <div>
                            {
                                darkmode ? <i className="fa-regular fa-moon px-2 py-1 rounded-md text-blue-500 text-[1.3em] sm:text-[1.5em]  bg-white/5 hover:bg-white/20 duration-300" onClick={()=>{setdarkmode(!darkmode)}}></i> :
                                <i className="fa-regular fa-sun px-2 py-1 rounded-md text-yellow-400 text-[1.3em] sm:text-[1.5em] bg-black/5 hover:bg-black/20 duration-300" onClick={()=>{setdarkmode(!darkmode)}}></i>
                            }
                       </div>

                        {
                            user ?
                            //  <button onClick={handleLogout} className="bg-red-500 hover:bg-red-700 duration-300 text-white px-4  py-2 mr-3 rounded-md font-semibold hidden lg:block">Logout</button>
                            // 
                            <div onClick={()=>setshowDiv(!showDiv)} className="bg-white rounded-full h-[2.2rem] w-[2.2rem] lg:flex justify-center items-center hidden ">
                                    {/* <i className="fa-regular fa-user text-[1.5em] text-slate-500"></i> */}
                                    <img src="nishant.png" alt="" className="h-full w-full rounded-full" />
                            </div>:
                              <button onClick={()=>{navigate("/login")}} className="bg-blue-500 hover:bg-blue-700 duration-300 text-white px-4  py-2 mr-3 rounded-md font-semibold hidden lg:block">Login</button>
                        }
                        

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
                        <NavLink to="/" className="p-2" onClick={()=>{sethamberger(!hamberger)}}>Home</NavLink>
                        <NavLink to="/about" className="p-2" onClick={()=>{sethamberger(!hamberger)}}>About</NavLink>
                        <NavLink to="/notes" className="p-2" onClick={()=>{sethamberger(!hamberger)}}>Notes</NavLink>
                        <NavLink to="/resource" className="p-2" onClick={()=>{sethamberger(!hamberger)}}>Resources</NavLink>
                        <NavLink to="/blog" className="p-2" onClick={()=>{sethamberger(!hamberger)}}>Blog</NavLink>
                        <NavLink to="/contact" className="p-2" onClick={()=>{sethamberger(!hamberger)}}s>Contact</NavLink>
                        {
                            user ?
                            <button onClick={handleLogout} className="bg-red-500 text-white px-4  py-2 my-2 rounded-md font-semibold  lg:block">Logout</button>:
                            <button onClick={()=>{navigate("/login")}} className="bg-blue-500 text-white px-4  py-2 my-2 rounded-md font-semibold  lg:block">Login</button>
                        }
                     </div>
            </header>

            <div className={showDiv?"h-[] w-[]   bg-slate-500 fixed top-15 right-10  ":"hidden"}>
                    <div className="flex justify-end">
                        <i onClick={()=>{setshowDiv(!showDiv)}} className="fa-solid fa-xmark text-[1.3em] pr-2 pt-1"></i>
                    </div>

                    <div className="flex flex-col items-center px-5">
                        <div className="h-[4rem] w-[4rem] rounded-full bg-white">
                            <img src="nishant.png" alt="" className="h-full w-full rounded-full" />
                        </div>
                        <p className="py-2">Hi,{user && user.name}</p>
                    </div>

                    <div className="mt-5 pl-5 py-3">
                        <p className="p-1">Profile</p>
                        <p onClick={handleLogout} className="p-1">Signout</p>
                    </div>
                    
            </div>
           
        </>
    )
}
export default Navbar