import Image from "../assets/pupscare_logo.jpg"
import ContactForm from './ContactForm'

function Contact() {
    return (<div className = "p-4 container">
        <header className = "p-4">
            <h2 class ="animate__animated animate__fadeInLeftBig">Contact Us</h2>
        </header>

        <main className = "p-4">
            <p>Get in touch with our team by phone or email. We are available Monday - Friday to help deal with any queries you have.</p>
            <div className = "container-contact">
                <div className = "contact-section">
                    <p><strong>PupsCare</strong><br />125 George Street<br />Edinburgh<br />EH53 0EP</p>
                </div>
                <div className = "contact-section">
                    <p><strong>Mobile number :</strong><br />07712345678</p>
                </div>
                <div className = "contact-section">
                    <p><strong>Email :</strong><br />pupscare@yahoo.com</p>
                </div>
                <div className = "contact-section">
                    <div className = "image">
                        <span>< img src = {Image} className = "logo" alt = "logo" width = "110px" height = "900px"/></span>
                        <ContactForm/>
                    </div>
                </div>
            </div>
        </main>

    </div>
    )
}

export default Contact