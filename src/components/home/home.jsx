import './home.css'
import { BrowserRouter as Router, Routes, Route, Link,Outlet } from "react-router-dom"
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
import Footer from '../footer/footer'
import Students from './students/students'

function Home(){
    return(
        <>
         {/* <Navbar/> */}
         <Hero/>
         <Feature/>
         <BrowseNotes/> 
         <Creator/>
         <Faq/>  
         {/* <Footer/> */}
         {/* <Students/> */}
         
        </>
    )
}
export default Home