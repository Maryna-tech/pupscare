import imageThree from "../assets/grooming.jpg"
import imageFour from "../assets/cutting.jpg"
import imageFive from "../assets/brushing.jpg"
import imageSix from "../assets/flouffy-massage.jpg"
import imageSeven from "../assets/dog-food.jpg"
import imageEight from "../assets/buldog-sitting.jpg"


function Services () {

    return (<div className = "p-2 container">
      <header className = "p-2">
        <h2 class = "animate__animated animate__fadeInLeftBig">Services for Dogs</h2>
      </header>
      <main className = "p-2">
        <div  className ="grid-row">
        <div class = "card_service">
          <img src = {imageThree} alt = "service" width = "100%"/>
          <div class = "container">
            <h4><b>🐶 Full Grooming</b></h4>
            <p>Your dog will be groomed in a modern, hygienic, safe and stress free environment.</p>
            <span className = "price">Small £60.00</span><br/>
            <span className = "price">Medium £75.00</span><br/>
            <span className = "price">Large £95.00</span>
          </div>
        </div>
        <div class = "card_service">
          <img src = {imageFour} className = "clipping-img"alt = "service" width = "100%" height = "400px"/>
          <div class = "container">
            <h4><b>✂️ Nail Clipping</b></h4>
            <p>Nail Clipping while you wait, no appointment necessary.</p>
            <p>This service usually take 2-5 minutes.</p>
            <span className = "price">Small £40.00</span> <br/>
            <span className = "price">Medium £50.00</span> <br/>
            <span  className = "price">Large £70.00</span>
          </div>
        </div>
        <div class = "card_service">
          <img src = {imageFive} alt = "service" width = "100%"/>
          <div class = "container">
            <h4><b>🛁 Bath&Brush</b></h4>
            <p>Includes bath, conditioning treatment, brush and blow dry.</p>
            <span className = "price">Small £45.00</span><br/>
            <span className = "price">Medium £55.00</span><br/>
            <span className = "price">Large £75.00</span>
          </div>
        </div>
        </div>
        <div className = "grid-row">
        <div class = "card_service">
          <img src = {imageSix} alt = "service" width = "100%"/>
          <div class = "container">
            <h4><b>🏥 Massage</b></h4>
            <p>Improving and maitaining dog's muscular health.</p>
            <span className = "price">£85.00</span>
          </div>
        </div>
        <div class = "card_service">
          <img src = {imageSeven} alt = "service" width = "100%"/>
          <div class = "container">
            <h4><b>🍖 Nutrition Advice</b></h4>
            <p>Help your furry friends live healthiest lives.</p>
            <span className = "price">£60.00</span>
          </div>
        </div>
        <div class = "card_service">
          <img src = {imageEight} alt = "service" width = "100%"/>
          <div class = "container">
            <h4><b>Dog Sitting</b></h4>
            <p>Half Day Pay as you go.</p>
            <p>Choose a day Up to 5 hours: from 8am-1pm or 1pm-6pm.</p>
            <span className = "price">£20.00 per hour</span>
          </div>
        </div>
        </div>
        <div>
          <p className = "text">Please BOOK UP the correct service as we may not be able to upgrade any service booked due to time constraints.</p>
        </div>
      </main>
    
    </div>
    )
}

export default Services