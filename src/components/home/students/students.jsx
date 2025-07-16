import { FaRegStar } from "react-icons/fa6";
import { FaStar } from "react-icons/fa6";
import React from "react";
import Slider from "react-slick";


function Students(){

    var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

    return(
        <>
            <section className="h-[] w-full bg-indigo-600 py-10">

                    <p className="text-[2em] text-center font-bold text-white">What Our Students Say</p>
                    <p className="text-white/90 text-center text-[1.1em] py-5">Don't just take our word for it - hear from some of our satisfied students</p>

                    <div className=" slider-container">

                     <Slider {...settings}>
                    <div className="w-[23rem]  rounded-md bg-slate-800">
                                <div className="flex  items-center px-5 pt-2">
                                    <div className="h-[4rem] w-[4rem] bg-white rounded-full">
                                        <img src="./public/nishant.png" alt="" />
                                    </div>
                                    <div className="px-5  text-white">
                                        <p className="text-[1.3em] font-semibold">Nishant Sharma</p>
                                        <p>B.Tech Student</p>
                                    </div>
                                </div>
                                <p className="py-4 px-5 text-white/90">"NotesNeo has been a game-changer for my studies. The notes are well-organized and easy to understand."</p>
                                <p className="flex gap-2 text-[1.2em] px-5 py-3 text-yellow-400">
                                    <span><FaStar /></span>
                                    <span><FaStar /></span>
                                    <span><FaStar /></span>
                                    <span><FaStar /></span>
                                    <span className="text-yellow-400"><FaRegStar /></span>
                                </p>
                            </div>

                            <div className="w-[23rem]  rounded-md bg-slate-800">
                                <div className="flex  items-center px-5 pt-2">
                                    <div className="h-[4rem] w-[4rem] bg-white rounded-full">
                                        <img src="./public/nishant.png" alt="" />
                                    </div>
                                    <div className="px-5  text-white">
                                        <p className="text-[1.3em] font-semibold">Nishant Sharma</p>
                                        <p>B.Tech Student</p>
                                    </div>
                                </div>
                                <p className="py-4 px-5 text-white/90">"NotesNeo has been a game-changer for my studies. The notes are well-organized and easy to understand."</p>
                                <p className="flex gap-2 text-[1.2em] px-5 py-3 text-yellow-400">
                                    <span><FaStar /></span>
                                    <span><FaStar /></span>
                                    <span><FaStar /></span>
                                    <span><FaStar /></span>
                                    <span className="text-yellow-400"><FaRegStar /></span>
                                </p>
                            </div>

                           <div className="w-[23rem]  rounded-md bg-slate-800">
                                <div className="flex  items-center px-5 pt-2">
                                    <div className="h-[4rem] w-[4rem] bg-white rounded-full">
                                        <img src="./public/nishant.png" alt="" />
                                    </div>
                                    <div className="px-5  text-white">
                                        <p className="text-[1.3em] font-semibold">Nishant Sharma</p>
                                        <p>B.Tech Student</p>
                                    </div>
                                </div>
                                <p className="py-4 px-5 text-white/90">"NotesNeo has been a game-changer for my studies. The notes are well-organized and easy to understand."</p>
                                <p className="flex gap-2 text-[1.2em] px-5 py-3 text-yellow-400">
                                    <span><FaStar /></span>
                                    <span><FaStar /></span>
                                    <span><FaStar /></span>
                                    <span><FaStar /></span>
                                    <span className="text-yellow-400"><FaRegStar /></span>
                                </p>
                            </div>

                           <div className="w-[23rem]  rounded-md bg-slate-800">
                                <div className="flex  items-center px-5 pt-2">
                                    <div className="h-[4rem] w-[4rem] bg-white rounded-full">
                                        <img src="./public/nishant.png" alt="" />
                                    </div>
                                    <div className="px-5  text-white">
                                        <p className="text-[1.3em] font-semibold">Nishant Sharma</p>
                                        <p>B.Tech Student</p>
                                    </div>
                                </div>
                                <p className="py-4 px-5 text-white/90">"NotesNeo has been a game-changer for my studies. The notes are well-organized and easy to understand."</p>
                                <p className="flex gap-2 text-[1.2em] px-5 py-3 text-yellow-400">
                                    <span><FaStar /></span>
                                    <span><FaStar /></span>
                                    <span><FaStar /></span>
                                    <span><FaStar /></span>
                                    <span className="text-yellow-400"><FaRegStar /></span>
                                </p>
                            </div>

                            <div className="w-[23rem]  rounded-md bg-slate-800">
                                <div className="flex  items-center px-5 pt-2">
                                    <div className="h-[4rem] w-[4rem] bg-white rounded-full">
                                        <img src="./public/nishant.png" alt="" />
                                    </div>
                                    <div className="px-5  text-white">
                                        <p className="text-[1.3em] font-semibold">Nishant Sharma</p>
                                        <p>B.Tech Student</p>
                                    </div>
                                </div>
                                <p className="py-4 px-5 text-white/90">"NotesNeo has been a game-changer for my studies. The notes are well-organized and easy to understand."</p>
                                <p className="flex gap-2 text-[1.2em] px-5 py-3 text-yellow-400">
                                    <span><FaStar /></span>
                                    <span><FaStar /></span>
                                    <span><FaStar /></span>
                                    <span><FaStar /></span>
                                    <span className="text-yellow-400"><FaRegStar /></span>
                                </p>
                            </div>

                            <div className="w-[23rem]  rounded-md bg-slate-800">
                                <div className="flex  items-center px-5 pt-2">
                                    <div className="h-[4rem] w-[4rem] bg-white rounded-full">
                                        <img src="./public/nishant.png" alt="" />
                                    </div>
                                    <div className="px-5  text-white">
                                        <p className="text-[1.3em] font-semibold">Nishant Sharma</p>
                                        <p>B.Tech Student</p>
                                    </div>
                                </div>
                                <p className="py-4 px-5 text-white/90">"NotesNeo has been a game-changer for my studies. The notes are well-organized and easy to understand."</p>
                                <p className="flex gap-2 text-[1.2em] px-5 py-3 text-yellow-400">
                                    <span><FaStar /></span>
                                    <span><FaStar /></span>
                                    <span><FaStar /></span>
                                    <span><FaStar /></span>
                                    <span className="text-yellow-400"><FaRegStar /></span>
                                </p>
                            </div>
                 </Slider>

                    </div>

            </section>
        </>
    )
}
export default Students