import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link,Outlet } from "react-router-dom"

import './App.css'
import Navbar from './components/navbar/navbar.jsx'
import Footer from './components/footer/footer.jsx'
import Home from './components/home/home.jsx'
import About from './components/about/about.jsx'
// import Blog from './components/blog/blog.jsx'
import Contact from './components/contact/contact.jsx'
import Notes from './components/notes/notes.jsx'
import Layout from './components/layout.jsx'

function App() {
  

  return (
    <>

       
      {/* <Router>
        <Navbar/> 
        <Routes>
          <Route path="/" element={<Layout/>}/>
          <Route index element={<Home/>} />
          <Route path='/about' element={<About/>}/>
          <Route path='/notes' element={<Notes/>}/>
        </Routes>  
        <Footer/>       
      </Router> */}
      {/* <Footer/> */}

      <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/notes" element={<Notes />} />
          <Route path='/contact' element={<Contact/>}/>
        </Route>
      </Routes>
    </Router>
     
    </>
  )
}

export default App
