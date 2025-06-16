import React from "react"
import instagram from "../assets/instagram.png"
import facebook from "../assets/facebook.png"
import whatsapp from "../assets/whatsapp.png"
import CookieConsent from "../CookieConsent"
import ImageVisa from "../assets/visa.svg"
import ImageMaestro from "../assets/maestro.svg"
import ImageMastercard from "../assets/mastercard.svg"

const Footer = () => {
    
    return (<footer className = "footer-container">
        <div class = "footer">
            <div class = "footer__main">
                <div class = "p1-container">
                    <div class = "footer__main-icons">
                        <span className = "footer-icon"><a href = "https://www.instagram.com/"><img src = {instagram} className = "icon" width = "40px"/></a></span>
                        <span className = "footer-icon"><a href = "https://en-gb.facebook.com/"><img src = {facebook} className = "icon" width = "40px"/></a></span>
                        <span className = "footer-icon"><a href = "https://www.whatsapp.com"><img src = {whatsapp} className = "icon" width = "40px"/></a></span>
                    </div>
                    <div class = "footer__main-links">
                        <span><a id = "footer-link-terms-and-conditions" href = "/terms">Terms &amp; Conditions</a></span> | 
                        <span><a className = "feedback-btn" href = "/feedback"> Feedback </a></span>
                    </div>
                    <div class = "footer__main-info">
                        <div class = "footer-column">
                            <div className = "footer-cookie-notice">
                                <p>By using this site, you agree we can set and use cookies. For more details of these cookies and how to disable them, see our <a href = "/cookie">cookie policy</a>.</p>
                            </div>
                            <div className = "footer-copyright">
                                <p>Registered under the Data Protection Act &copy; Copyright Pupscare 2025</p>
                            </div>
                        </div>

                        <CookieConsent/>

                        <div className="payment">
                            <img src = {ImageVisa} className = "card-payment" width = "40px" height="80px"/>
                            <img src = {ImageMaestro} className = "card-payment" width = "40px" height="80px"/>
                            <img src = {ImageMastercard} className = "card-payment" width = "40px" height="80px"/>
                        </div>

                        <div className = "footer-top">
                            <span><a href = "#">Top</a></span>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        
        </footer>
)}

export default Footer
