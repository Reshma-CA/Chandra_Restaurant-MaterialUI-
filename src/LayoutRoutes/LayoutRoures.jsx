import React from 'react'

import {BrowserRouter as Router, Route ,Routes} from 'react-router-dom';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Home from '../pages/Home/Home';
// import Home from '@mui/icons-material/Home';
import Dishes from '../pages/Dishes/Dishes';
import Booking from '../pages/Booking/Booking';
import About from '../pages/About/About';
import Notfound from '../pages/Notfound/Notfound';
 
const LayoutRoures = () => {
  return (
    <Router>
        <Header/>
        <Routes>

            <Route path='/' element={<Home/>}/>
            <Route path='/dishes' element={<Dishes/>}/>
            <Route path='/services' element={<Booking/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/*' element={<Notfound/>}/>
            
            
        </Routes>
        <Footer/>

    </Router>
  )
}

export default LayoutRoures
