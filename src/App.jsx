import { useState } from 'react'
// <<<<<<< HEAD
import { BrowserRouter as Router, Routes, Route, Link,Outlet } from "react-router-dom"
// =======
import './App.css'
// import Navbar from './components/navbar/navbar.jsx'
// import Home from './components/home/home.jsx'
// import About from './components/about/about.jsx'
// import Blog from './components/blog/blog.jsx'
// import Contact from './components/contact/contact.jsx'
// import Notes from './components/notes/notes.jsx'
import Resources from './components/resource/resource.jsx'
// >>>>>>> 3d2577ceff921927524f20e2ed063f6da9df9af3

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
{/* <<<<<<< HEAD */}

       
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
     
=======
      {/* <Home/> */}
      {/* <About/> */}
      {/* <Blog /> */}
      {/* <Contact /> */}
      {/* <Notes /> */}
      <Resources />
{/* >>>>>>> 3d2577ceff921927524f20e2ed063f6da9df9af3 */}
    </>
  )
}

export default App
