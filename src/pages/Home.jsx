import { Accordion } from "../Accordion/Accordion"
import video from"../assets/dog_grooming.mp4"
import Carousel from "../Carousel/Carousel"
import DiscountPopup from "../pages/DiscountPopup"

function Home() {

    return (<div className = "p-1 container">
        <header className = "p-1">
            <h1 className = "p-1 text">Welcome to PupsCare!</h1>
            <ul class = "animate__animated animate__zoomIn animate__delay-2s">
                <li>Personalised Care✅</li>
                <li>Stress-Free✅ </li>
                <li>Professional Grooming✅</li>
                <li>One to one✅</li>
                <li >Nice clean environment✅</li>
                <li>Great experience✅</li>
            </ul>
        </header>
        <main className = "p-1">
            <div className = "relative">
                <h2 class = "animate__animated animate__fadeInLeftBig">Caring for Your Pup, One Paw at a Time!</h2>
                <p className = "text">We offer everything what your dog needs because we care for your pet as much as you do. It's time for hair trimming and bath - getting furry friends fresh and fabulous. Start the day in style! Grooming prices vary, depending on breed, size of dog, coat condition and behaviour. Grooming service allow you to examine your dog's coat, teeth, eyes, ears and nails.</p>
                <p className = "text">Give your doggy a professional grooming PupsCare.</p>
                <p className = "text"><strong>BOOK NOW  <a href = "/services">SERVICES</a> !</strong></p>
                <button className = "booking"><a href = "/booking">Book an appointment</a></button>
                <div className = "popup"><DiscountPopup /></div>
                <button className = "discount-page"><span><a id = "link-discount" href = "/discount-page">Discount</a></span></button> 
                <video class = "animate__animated animate__zoomIn animate__delay-4s" autoPlay muted loop>
                    <source src = {video} type = "video/mp4"/>
                </video>
            </div>
            <div className = "container">
                <div className = "text-content">
                    <h2 className = "title">PupsCare FAQs</h2>
                    <h3 className = "sub-title">Frequently Asked Questions</h3>
                    <p className = "text"><strong>Need help with something? Our friendly team are on hand to answer your question, enquiry. Fill in the short form and we'll get back to you as soon as we can. <br/>
                    We've also answered some of our most commonly asked questions on our FAQ page, which might satisfy your query.</strong></p>
                    <Accordion/>
                </div>
            </div>
            <div className = "container max-auto">
                <Carousel/>
            </div>
            <div>
                <span><h5 className = "animate_animated animate__heartBeat">🐕🐩Stay Connected</h5></span>
            </div>
        </main>
    </div>
    )
}

export default Home

