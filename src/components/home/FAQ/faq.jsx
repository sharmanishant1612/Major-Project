import { IoIosArrowForward } from "react-icons/io";

function Faq(){
    
    return(
        <>
            <section className="h-[] w-full bg-slate-800 py-10">

                <p className="text-[2em] text-center text-white font-semibold">Frequently Asked Questions</p>
                <p className="text-center text-[1.1em] text-white/80 py-2">Find answers to common questions about NotesHub</p>

                <div className="flex justify-center mt-10 flex-wrap">
                  
                    <div className="w-[90%] sm:w-[70%] md:w-[60%] py-3 h-[] bg-slate-950 rounded-md my-3">
                        <details class="group w-full">
                        <summary class="flex justify-between items-center cursor-pointer list-none px-3">
                            <span class=" font-semibold text-white py-1 px-1 font">How do I access the notes?</span>
                            <span class="transition-transform  group-open:rotate-90 text-[1.5em] text-white/80"><IoIosArrowForward /></span>
                        </summary>
                        <div class=" text-white/90 px-3 py-1 tracking-wide">
                            You can access notes by navigating to the Notes section, selecting your branch (BTech/BCA/BBA), semester, and subject. All notes are available for free download.
                        </div>
                        </details>
                    </div>

                         <div className="w-[90%] sm:w-[70%] md:w-[60%] py-3 h-[] bg-slate-950 rounded-md my-3">
                        <details class="group w-full">
                        <summary class="flex justify-between items-center cursor-pointer list-none px-3">
                            <span class=" font-semibold text-white py-1 px-1 font">Are the notes up to date with the current syllabus?</span>
                            <span class="transition-transform  group-open:rotate-90 text-[1.5em] text-white/80"><IoIosArrowForward /></span>
                        </summary>
                        <div class="mt-2 text-white/90 px-3 py">
                            Yes, all notes are regularly updated to match the latest MDU Rohtak syllabus. We ensure content is reviewed and updated each semester.
                        </div>
                        </details>
                    </div>

                     <div className="w-[90%] sm:w-[70%] md:w-[60%] py-3 h-[] bg-slate-950 rounded-md my-3">
                        <details class="group w-full">
                        <summary class="flex justify-between items-center cursor-pointer list-none px-3">
                            <span class=" font-semibold text-white py-1 px-1 font">Can I download notes for offline use?</span>
                            <span class="transition-transform  group-open:rotate-90 text-[1.5em] text-white/80"><IoIosArrowForward /></span>
                        </summary>
                        <div class="mt-2 text-white/90 px-3 py">
                           Yes, all notes can be downloaded in PDF format for offline access. You can also use our Android app for a better mobile experience.
                        </div>
                        </details>
                    </div>

                     <div className="w-[90%] sm:w-[70%] md:w-[60%] py-3 h-[] bg-slate-950 rounded-md my-3">
                        <details class="group w-full">
                        <summary class="flex justify-between items-center cursor-pointer list-none px-3">
                            <span class=" font-semibold text-white py-1 px-1 font">Is there a limit to how many notes I can download?</span>
                            <span class="transition-transform  group-open:rotate-90 text-[1.5em] text-white/80"><IoIosArrowForward /></span>
                        </summary>
                        <div class="mt-2 text-white/90 px-3 py">
                           No, there are no download limits. You can download as many notes as you need, completely free of charge.
                        </div>
                        </details>
                    </div>

                     <div className="w-[90%] sm:w-[70%] md:w-[60%] py-3 h-[] bg-slate-950 rounded-md my-3">
                        <details class="group w-full">
                        <summary class="flex justify-between items-center cursor-pointer list-none px-3">
                            <span class=" font-semibold text-white py-1 px-1 font">How can I contribute my notes?</span>
                            <span class="transition-transform  group-open:rotate-90 text-[1.5em] text-white/80"><IoIosArrowForward /></span>
                        </summary>
                        <div class="mt-2 text-white/90 px-3 py">
                           We welcome contributions! Contact us through the Contact page or join our WhatsApp group to discuss contributing your notes.
                        </div>
                        </details>
                    </div>

                     <div className="w-[90%] sm:w-[70%] md:w-[60%] py-3 h-[] bg-slate-950 rounded-md my-3">
                        <details class="group w-full">
                        <summary class="flex justify-between items-center cursor-pointer list-none px-3">
                            <span class=" font-semibold text-white py-1 px-1 font">Do I need to create an account to download notes?</span>
                            <span class="transition-transform  group-open:rotate-90 text-[1.5em] text-white/80"><IoIosArrowForward /></span>
                        </summary>
                        <div class="mt-2 text-white/90 px-3 py">
                           No, you can download notes without an account. However, creating an account lets you save favorites and track your activity.
                        </div>
                        </details>
                    </div>

                </div>
            </section>
        </>
    )
}
export default Faq