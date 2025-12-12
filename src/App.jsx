import { useState } from 'react'
import './App.css'

import { BrowserRouter as Router, Routes, Route, Link,Outlet,NavLink,BrowserRouter } from "react-router-dom"


import Navbar from './components/navbar/navbar.jsx'
import Footer from './components/footer/footer.jsx'
import Home from './components/home/home.jsx'
import About from './components/about/about.jsx'
import Blog from './components/blog/blog.jsx'
import Contact from './components/contact/contact.jsx'
import Notes from './components/notes/notes.jsx'
import Layout from './components/layout.jsx'
import Resource from './components/resource/resource.jsx'







function App() {
  

  return (
    <>
      {/* <Navbar/> */}
      <Outlet/>
      {/* <Footer/> */}
    </>
  )
}

export default App



//  <BrowserRouter>
     
          
//             <Routes>
//               <Route path='/' element={<Layout/>}>
//                   <Route index element ={<Home/>}/>
//                   <Route path='/about' element={<About/>}/>
//                   <Route path='/notes' element={<Notes/>}/>
//                   <Route path='/resource' element={<Resource/>}/>
//                   <Route path='/blog' element={<Blog/>}/>
//                   <Route path='/contact' element={<Contact/>}/>
//                   {/* <Route path='resource' element={<Resource/>}/> */}
//               </Route>
//             </Routes>
          
//      </BrowserRouter>
