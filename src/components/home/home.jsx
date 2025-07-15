import './home.css'
import { LuDownload } from "react-icons/lu"
import { MdOutlinePeopleOutline } from "react-icons/md"
import { IoBookOutline } from "react-icons/io5"
import { FaArrowRightLong } from "react-icons/fa6"
import { FaRegStar } from "react-icons/fa";

import Navbar from "../navbar/navbar"
import Hero from './hero/hero'
import Feature from './feature/feature'
import BrowseNotes from './browsenotes/browsenotes'
import Creator from './creator/creator'
import Faq from './FAQ/faq'

function Home(){
    return(
        <>
         <Navbar/>
         <Hero/>
         <Feature/>
         <BrowseNotes/>
         <Creator/>
         <Faq/>
         
        </>
    )
}
export default Home