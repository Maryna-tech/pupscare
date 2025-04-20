import React from "react"
import Navbar from "./components/Navbar"
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from "./pages/Home"
import Services from "./pages/Services"
import Shop from "./pages/Shop"
import Contact from "./pages/ContactUs"
import Booking from "./pages/Booking"
import Terms from "./pages/Terms"
import Cookie from "./pages/Cookie"
import FeedbackForm from "./pages/FeedbackForm"
import DiscountPage from "./pages/DiscountPage"
import "./App.css"
import 'animate.css';
import Footer from "./components/Footer"


function App () {
    return(
        <BrowserRouter>
            <Navbar/>
            <main>
                <Routes>
                    <Route path="/" element={<Home />}/>
                    <Route path="/services" element={<Services />}/>
                    <Route path="/shop" element={<Shop />}/>
                    <Route path="/contact" element={<Contact Us />}/>
                    <Route path="/booking" element={<Booking />}/>
                    <Route path="/terms" element={<Terms/>}/>
                    <Route path="/cookie" element={<Cookie/>}/>
                    <Route path="/feedback" element={<FeedbackForm/>}/>
                    <Route path="/discount-page" element={<DiscountPage/>}/>
                </Routes>
                </main>
                <Footer/>

                </BrowserRouter>
    )
}

export default App 