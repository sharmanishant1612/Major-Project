import './home.css'
import Navbar from "../navbar/navbar"

function Home(){
    return(
        <>
         <Navbar/>
        
        <main className='h-[30rem] background bg-gray-900 '>
                <div className='flex justify-evenly items-center'>
                    <div className='h-[] max-w-[35%] bg-slate-600   '>
                    <p className='text-indigo-500 text-[3em] text-center font-semibold'><span className='text-white'>Access Academic Notes </span>Anytime, Anywhere</p>

                    <p className='text-white/90 text-[1.1em] text-center'>Join thousands of students who are already using NotesNeo to access high-quality academic notes. Study smarter, not harder.</p>
                </div>
                <div className='h-[20rem] w-[30rem] bg-slate-500 '></div>
                </div>
        </main>
         
        </>
    )
}
export default Home