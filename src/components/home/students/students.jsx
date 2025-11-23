// import { FaRegStar } from "react-icons/fa6";
// import { FaStar } from "react-icons/fa6";
// import React from "react";
// import Slider from "react-slick";


// function Students() {

//     var settings = {
//         dots: true,
//         infinite: false,
//         speed: 500,
//         slidesToShow: 3,
//         slidesToScroll: 1,
//         initialSlide: 0,
//         responsive: [
//             {
//                 breakpoint: 1024,
//                 settings: {
//                     slidesToShow: 3,
//                     slidesToScroll: 3,
//                     infinite: true,
//                     dots: true
//                 }
//             },
//             {
//                 breakpoint: 600,
//                 settings: {
//                     slidesToShow: 2,
//                     slidesToScroll: 2,
//                     initialSlide: 2
//                 }
//             },
//             {
//                 breakpoint: 480,
//                 settings: {
//                     slidesToShow: 1,
//                     slidesToScroll: 1
//                 }
//             }
//         ]
//     };

//     return (
//         <>
//             <section className="h-[] w-full bg-indigo-600 py-10">

//                 <p className="text-[2em] text-center font-bold text-white">What Our Students Say</p>
//                 <p className="text-white/90 text-center text-[1.1em] py-5">Don't just take our word for it - hear from some of our satisfied students</p>

//                 <div className=" slider-container bg-white  ">

//                     <Slider {...settings}>
//                         <div className="w-[23rem]  rounded-md bg-slate-800 ">
//                             <div className="flex  items-center px-5 pt-2">
//                                 <div className="h-[4rem] w-[4rem] bg-white rounded-full">
//                                     <img src="./public/nishant.png" alt="" />
//                                 </div>
//                                 <div className="px-5  text-white">
//                                     <p className="text-[1.3em] font-semibold">Nishant Sharma</p>
//                                     <p>B.Tech Student</p>
//                                 </div>
//                             </div>
//                             <p className="py-4 px-5 text-white/90">"NotesNeo has been a game-changer for my studies. The notes are well-organized and easy to understand."</p>
//                             <p className="flex gap-2 text-[1.2em] px-5 py-3 text-yellow-400">
//                                 <span><FaStar /></span>
//                                 <span><FaStar /></span>
//                                 <span><FaStar /></span>
//                                 <span><FaStar /></span>
//                                 <span className="text-yellow-400"><FaRegStar /></span>
//                             </p>
//                         </div>

//                         <div className="w-[23rem]  rounded-md bg-slate-800">
//                             <div className="flex  items-center px-5 pt-2">
//                                 <div className="h-[4rem] w-[4rem] bg-white rounded-full">
//                                     <img src="./public/nishant.png" alt="" />
//                                 </div>
//                                 <div className="px-5  text-white">
//                                     <p className="text-[1.3em] font-semibold">Nishant Sharma</p>
//                                     <p>B.Tech Student</p>
//                                 </div>
//                             </div>
//                             <p className="py-4 px-5 text-white/90">"NotesNeo has been a game-changer for my studies. The notes are well-organized and easy to understand."</p>
//                             <p className="flex gap-2 text-[1.2em] px-5 py-3 text-yellow-400">
//                                 <span><FaStar /></span>
//                                 <span><FaStar /></span>
//                                 <span><FaStar /></span>
//                                 <span><FaStar /></span>
//                                 <span className="text-yellow-400"><FaRegStar /></span>
//                             </p>
//                         </div>

//                         <div className="w-[23rem]  rounded-md bg-slate-800">
//                             <div className="flex  items-center px-5 pt-2">
//                                 <div className="h-[4rem] w-[4rem] bg-white rounded-full">
//                                     <img src="./public/nishant.png" alt="" />
//                                 </div>
//                                 <div className="px-5  text-white">
//                                     <p className="text-[1.3em] font-semibold">Nishant Sharma</p>
//                                     <p>B.Tech Student</p>
//                                 </div>
//                             </div>
//                             <p className="py-4 px-5 text-white/90">"NotesNeo has been a game-changer for my studies. The notes are well-organized and easy to understand."</p>
//                             <p className="flex gap-2 text-[1.2em] px-5 py-3 text-yellow-400">
//                                 <span><FaStar /></span>
//                                 <span><FaStar /></span>
//                                 <span><FaStar /></span>
//                                 <span><FaStar /></span>
//                                 <span className="text-yellow-400"><FaRegStar /></span>
//                             </p>
//                         </div>

//                         <div className="w-[23rem]  rounded-md bg-slate-800">
//                             <div className="flex  items-center px-5 pt-2">
//                                 <div className="h-[4rem] w-[4rem] bg-white rounded-full">
//                                     <img src="./public/nishant.png" alt="" />
//                                 </div>
//                                 <div className="px-5  text-white">
//                                     <p className="text-[1.3em] font-semibold">Nishant Sharma</p>
//                                     <p>B.Tech Student</p>
//                                 </div>
//                             </div>
//                             <p className="py-4 px-5 text-white/90">"NotesNeo has been a game-changer for my studies. The notes are well-organized and easy to understand."</p>
//                             <p className="flex gap-2 text-[1.2em] px-5 py-3 text-yellow-400">
//                                 <span><FaStar /></span>
//                                 <span><FaStar /></span>
//                                 <span><FaStar /></span>
//                                 <span><FaStar /></span>
//                                 <span className="text-yellow-400"><FaRegStar /></span>
//                             </p>
//                         </div>

//                         <div className="w-[23rem]  rounded-md bg-slate-800">
//                             <div className="flex  items-center px-5 pt-2">
//                                 <div className="h-[4rem] w-[4rem] bg-white rounded-full">
//                                     <img src="./public/nishant.png" alt="" />
//                                 </div>
//                                 <div className="px-5  text-white">
//                                     <p className="text-[1.3em] font-semibold">Nishant Sharma</p>
//                                     <p>B.Tech Student</p>
//                                 </div>
//                             </div>
//                             <p className="py-4 px-5 text-white/90">"NotesNeo has been a game-changer for my studies. The notes are well-organized and easy to understand."</p>
//                             <p className="flex gap-2 text-[1.2em] px-5 py-3 text-yellow-400">
//                                 <span><FaStar /></span>
//                                 <span><FaStar /></span>
//                                 <span><FaStar /></span>
//                                 <span><FaStar /></span>
//                                 <span className="text-yellow-400"><FaRegStar /></span>
//                             </p>
//                         </div>

//                         <div className="w-[23rem]  rounded-md bg-slate-800">
//                             <div className="flex  items-center px-5 pt-2">
//                                 <div className="h-[4rem] w-[4rem] bg-white rounded-full">
//                                     <img src="./public/nishant.png" alt="" />
//                                 </div>
//                                 <div className="px-5  text-white">
//                                     <p className="text-[1.3em] font-semibold">Nishant Sharma</p>
//                                     <p>B.Tech Student</p>
//                                 </div>
//                             </div>
//                             <p className="py-4 px-5 text-white/90">"NotesNeo has been a game-changer for my studies. The notes are well-organized and easy to understand."</p>
//                             <p className="flex gap-2 text-[1.2em] px-5 py-3 text-yellow-400">
//                                 <span><FaStar /></span>
//                                 <span><FaStar /></span>
//                                 <span><FaStar /></span>
//                                 <span><FaStar /></span>
//                                 <span className="text-yellow-400"><FaRegStar /></span>
//                             </p>
//                         </div>
//                     </Slider>

//                 </div>

//             </section>
//         </>
//     )
// }
// export default Students



import React from "react";
import { FaRegStar, FaStar } from "react-icons/fa6";
import "./students.css"

function Students() {
  const testimonials = [
    {
      name: "Nishant Sharma",
      role: "B.Tech Student",
      image: "./public/nishant.png",
      review:
        "NotesNeo has been a game-changer for my studies. The notes are well-organized and easy to understand.",
      rating: 4,
    },
    {
      name: "Aman Kumar",
      role: "Engineering Student",
      image: "./public/nishant.png",
      review: "Very detailed and easy notes. Highly recommended!",
      rating: 5,
    },
    {
      name: "Rohit Singh",
      role: "IT Student",
      image: "./public/nishant.png",
      review: "Helped me a lot during exams.",
      rating: 4,
    },
    {
      name: "Vikas Sharma",
      role: "CS Student",
      image: "./public/nishant.png",
      review: "Amazing platform with quality notes!",
      rating: 5,
    },
  ];

  return (
    <section className="w-full bg-indigo-600 py-10 overflow-hidden">
      <p className="text-[2em] text-center font-bold text-white">
        What Our Students Say
      </p>
      <p className="text-white/90 text-center text-[1.1em] py-5">
        Don’t just take our word for it - hear from satisfied students
      </p>

      {/* Infinite scrolling wrapper */}
      <div className="flex gap-8 animate-scroll whitespace-nowrap pl-5 ">
        
        {/* Original List */}
        {testimonials.map((item, index) => (
          <div
            key={index}
            className="w-[23rem] bg-slate-800 rounded-lg p-4 inline-block flex-shrink-0"
          >
            <div className="flex items-center px-2 pt-2">
              <div className="h-[4rem] w-[4rem] bg-white rounded-full overflow-hidden">
                <img src={item.image} alt={item.name} />
              </div>
              <div className="px-4 text-white">
                <p className="text-[1.3em] font-semibold">{item.name}</p>
                <p>{item.role}</p>
              </div>
            </div>

            <p className="py-4 px-3 text-white/90 whitespace-normal break-words">
              "{item.review}"
            </p>

            <div className="flex gap-1 text-yellow-400 px-3 pb-2">
              {[...Array(5)].map((_, i) =>
                i < item.rating ? <FaStar key={i} /> : <FaRegStar key={i} />
              )}
            </div>
          </div>
        ))}

        {/* Duplicate List for Infinite Loop */}
        {testimonials.map((item, index) => (
          <div
            key={"duplicate-" + index}
            className="w-[23rem] bg-slate-800 rounded-lg p-4 inline-block flex-shrink-0"
          >
            <div className="flex items-center px-2 pt-2">
              <div className="h-[4rem] w-[4rem] bg-white rounded-full overflow-hidden">
                <img src={item.image} alt={item.name} />
              </div>
              <div className="px-4 text-white">
                <p className="text-[1.3em] font-semibold">{item.name}</p>
                <p>{item.role}</p>
              </div>
            </div>

            <p className="py-4 px-3 text-white/90 whitespace-normal break-words">
              "{item.review}"
            </p>

            <div className="flex gap-1 text-yellow-400 px-3 pb-2">
              {[...Array(5)].map((_, i) =>
                i < item.rating ? <FaStar key={i} /> : <FaRegStar key={i} />
              )}
            </div>
          </div>
        ))}

      </div>
    </section>
  );
}

export default Students;



// import React, { useEffect, useRef, useState } from "react";
// import { FaRegStar, FaStar } from "react-icons/fa6";

// /**
//  * Smooth marquee testimonial component
//  * - Seamless loop (duplicates the list)
//  * - Moves right -> left by default
//  * - Arrow buttons change direction (left / right)
//  * - Pause on hover
//  * - Fixed card width, text wraps inside cards
//  */
// function Students() {
//   const testimonials = [
//     {
//       name: "Nishant Sharma",
//       role: "B.Tech Student",
//       image: "./public/nishant.png",
//       review:
//         "NotesNeo has been a game-changer for my studies. The notes are well-organized and easy to understand.",
//       rating: 4,
//     },
//     {
//       name: "Aman Kumar",
//       role: "Engineering Student",
//       image: "./public/nishant.png",
//       review: "Very detailed and easy notes. Highly recommended!",
//       rating: 5,
//     },
//     {
//       name: "Rohit Singh",
//       role: "IT Student",
//       image: "./public/nishant.png",
//       review:
//         "Helped me a lot during exams. The way content is structured saved me hours of revision.",
//       rating: 4,
//     },
//     {
//       name: "Vikas Sharma",
//       role: "CS Student",
//       image: "./public/nishant.png",
//       review: "Amazing platform with quality notes!",
//       rating: 5,
//     },
//   ];

//   const marqueeRef = useRef(null);
//   const contentWidthRef = useRef(0);
//   const rafRef = useRef(null);
//   const lastTimeRef = useRef(null);

//   // speed in px per second
//   const [speed, setSpeed] = useState(60); // adjust to taste
//   // direction: 1 => move content left (scrollLeft increases) (right->left)
//   // -1 => move content right (scrollLeft decreases) (left->right)
//   const [direction, setDirection] = useState(1);
//   const [isPaused, setIsPaused] = useState(false);

//   useEffect(() => {
//     const marquee = marqueeRef.current;
//     if (!marquee) return;

//     // compute half content width (since we duplicate)
//     // scrollWidth is whole duplicated width, so half is single list width
//     const computeWidths = () => {
//       // force reflow: sometimes images might change dimensions; safe to recompute on load
//       contentWidthRef.current = marquee.scrollWidth / 2 || 0;
//       // if starting at or beyond content width, wrap
//       if (marquee.scrollLeft >= contentWidthRef.current) {
//         marquee.scrollLeft = marquee.scrollLeft % contentWidthRef.current;
//       }
//     };

//     computeWidths();

//     // recompute after a short delay to account for image loads
//     const t = setTimeout(computeWidths, 500);
//     window.addEventListener("resize", computeWidths);

//     return () => {
//       clearTimeout(t);
//       window.removeEventListener("resize", computeWidths);
//     };
//   }, [testimonials.length]);

//   useEffect(() => {
//     const marquee = marqueeRef.current;
//     if (!marquee) return;

//     const step = (time) => {
//       if (lastTimeRef.current == null) lastTimeRef.current = time;
//       const dt = (time - lastTimeRef.current) / 1000; // seconds
//       lastTimeRef.current = time;

//       if (!isPaused) {
//         // delta in pixels
//         const delta = speed * dt * direction;
//         marquee.scrollLeft += delta;

//         const contentWidth = contentWidthRef.current;

//         // handle wrap-around for seamless loop
//         if (direction === 1) {
//           // moving left (content goes left), scrollLeft increases
//           if (marquee.scrollLeft >= contentWidth) {
//             // jump back by single content width
//             marquee.scrollLeft -= contentWidth;
//           }
//         } else {
//           // direction === -1, moving right (content goes right), scrollLeft decreases
//           if (marquee.scrollLeft <= 0) {
//             // wrap to the other half (so no jump visible)
//             marquee.scrollLeft += contentWidth;
//           }
//         }
//       }

//       rafRef.current = requestAnimationFrame(step);
//     };

//     rafRef.current = requestAnimationFrame(step);

//     return () => {
//       cancelAnimationFrame(rafRef.current);
//       lastTimeRef.current = null;
//     };
//   }, [speed, direction, isPaused]);

//   // controls
//   const handleLeft = () => {
//     // user pressed left arrow -> we want visual content to move right -> so direction = -1
//     setDirection(-1);
//   };
//   const handleRight = () => {
//     // user pressed right arrow -> visual content moves left -> direction = 1
//     setDirection(1);
//   };
//   const togglePause = () => setIsPaused((p) => !p);

//   return (
//     <section className="w-full bg-indigo-600 py-10">
//       <div className="max-w-[1200px] mx-auto px-4 relative">
//         <p className="text-[2em] text-center font-bold text-white">
//           What Our Students Say
//         </p>
//         <p className="text-white/90 text-center text-[1.05em] py-3">
//           Don’t just take our word for it - hear from satisfied students
//         </p>

//         {/* arrows / controls */}
//         <div className="absolute left-2 top-1/2 -translate-y-1/2 z-20">
//           <button
//             onClick={handleLeft}
//             className="bg-white/10 hover:bg-white/20 text-white p-2 rounded-full shadow"
//             aria-label="move right"
//             title="Move right"
//           >
//             {/* left arrow icon (visual indicates content will move right) */}
//             <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
//               <path
//                 fillRule="evenodd"
//                 d="M12.293 16.293a1 1 0 010 1.414l-6-6a1 1 0 010-1.414l6-6a1 1 0 111.414 1.414L8.414 10l5.293 5.293a1 1 0 010 1.414z"
//                 clipRule="evenodd"
//               />
//             </svg>
//           </button>
//         </div>

//         <div className="absolute right-2 top-1/2 -translate-y-1/2 z-20">
//           <button
//             onClick={handleRight}
//             className="bg-white/10 hover:bg-white/20 text-white p-2 rounded-full shadow"
//             aria-label="move left"
//             title="Move left"
//           >
//             {/* right arrow icon (visual indicates content will move left) */}
//             <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
//               <path
//                 fillRule="evenodd"
//                 d="M7.707 3.707a1 1 0 010-1.414l6 6a1 1 0 010 1.414l-6 6A1 1 0 117.293 14.293L12.586 10 7.293 4.707a1 1 0 01.414-.999z"
//                 clipRule="evenodd"
//               />
//             </svg>
//           </button>
//         </div>

//         {/* Pause button */}
//         <div className="absolute right-14 top-1/2 -translate-y-1/2 z-20">
//           <button
//             onClick={togglePause}
//             className="bg-white/10 hover:bg-white/20 text-white p-2 rounded-full shadow"
//             title={isPaused ? "Play" : "Pause"}
//             aria-label="pause play"
//           >
//             {isPaused ? (
//               // play icon
//               <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
//                 <path d="M6 4l10 6-10 6V4z" />
//               </svg>
//             ) : (
//               // pause icon
//               <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
//                 <path d="M6 4h3v12H6V4zm5 0h3v12h-3V4z" />
//               </svg>
//             )}
//           </button>
//         </div>

//         {/* marquee viewport */}
//         <div
//           ref={marqueeRef}
//           className="mt-6 overflow-hidden"
//           onMouseEnter={() => setIsPaused(true)}
//           onMouseLeave={() => setIsPaused(false)}
//           style={{
//             // ensure the container can scroll horizontally and no select while animating
//             WebkitOverflowScrolling: "touch",
//             scrollbarWidth: "none",
//           }}
//         >
//           {/* inner flex strip (two copies for seamless loop) */}
//           <div className="flex gap-6 whitespace-nowrap select-none">
//             {/* first copy */}
//             <div className="flex">
//               {testimonials.map((item, i) => (
//                 <article
//                   key={`orig-${i}`}
//                   className="w-[23rem] bg-slate-800 rounded-lg p-4 inline-block flex-shrink-0"
//                 >
//                   <div className="flex items-center px-2 pt-2">
//                     <div className="h-[4rem] w-[4rem] bg-white rounded-full overflow-hidden flex-shrink-0">
//                       <img
//                         src={item.image}
//                         alt={item.name}
//                         className="object-cover w-full h-full"
//                       />
//                     </div>

//                     <div className="px-4 text-white">
//                       <p className="text-[1.1rem] font-semibold">{item.name}</p>
//                       <p className="text-sm">{item.role}</p>
//                     </div>
//                   </div>

//                   <p className="py-4 px-3 text-white/90 whitespace-normal break-words">
//                     "{item.review}"
//                   </p>

//                   <div className="flex gap-1 text-yellow-400 px-3 pb-2">
//                     {[...Array(5)].map((_, starIdx) =>
//                       starIdx < item.rating ? (
//                         <FaStar key={starIdx} />
//                       ) : (
//                         <FaRegStar key={starIdx} />
//                       )
//                     )}
//                   </div>
//                 </article>
//               ))}
//             </div>

//             {/* duplicate copy */}
//             <div className="flex gap-6 whitespace-nowrap select-none">
//               {testimonials.map((item, i) => (
//                 <article
//                   key={`dup-${i}`}
//                   className="w-[23rem] bg-slate-800 rounded-lg p-4 inline-block flex-shrink-0"
//                 >
//                   <div className="flex items-center px-2 pt-2">
//                     <div className="h-[4rem] w-[4rem] bg-white rounded-full overflow-hidden flex-shrink-0">
//                       <img
//                         src={item.image}
//                         alt={item.name}
//                         className="object-cover w-full h-full"
//                       />
//                     </div>

//                     <div className="px-4 text-white">
//                       <p className="text-[1.1rem] font-semibold">{item.name}</p>
//                       <p className="text-sm">{item.role}</p>
//                     </div>
//                   </div>

//                   <p className="py-4 px-3 text-white/90 whitespace-normal break-words">
//                     "{item.review}"
//                   </p>

//                   <div className="flex gap-1 text-yellow-400 px-3 pb-2">
//                     {[...Array(5)].map((_, starIdx) =>
//                       starIdx < item.rating ? (
//                         <FaStar key={starIdx} />
//                       ) : (
//                         <FaRegStar key={starIdx} />
//                       )
//                     )}
//                   </div>
//                 </article>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* speed control (optional) */}
//         <div className="mt-4 flex items-center justify-center gap-3">
//           <label className="text-sm text-white/80">Speed</label>
//           <input
//             type="range"
//             min="10"
//             max="200"
//             value={speed}
//             onChange={(e) => setSpeed(Number(e.target.value))}
//             className="w-48"
//             aria-label="marquee speed"
//           />
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Students;



