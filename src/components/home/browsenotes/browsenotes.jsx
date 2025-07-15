import { FaArrowRight } from "react-icons/fa6";

function BrowseNotes(){
    return(
        <>
         <section className="h-[] w-full bg-slate-900 pb-10">
            <p className="text-[2.5em] font-bold text-center text-white pt-10 px-2">Ready to Excel in Your Studies?</p>
           <p className="flex justify-center items-center pt-4 "> 
            <a href="" className="bg-indigo-700 hover:bg-indigo-800 duration-300 py-3 px-4 flex justify-center items-center rounded-md text-white font-semibold">Browse Notes <span className="px-2"><FaArrowRight /></span></a>
            </p>
         </section>
        </>
    )
}

export default BrowseNotes