import { dogServices } from "./data"
import "./Discount.css"

const DiscountPage = () => {

  return (
    <div className= "discount-page">
      <h2 className= "discount-title">🐾 Limited-Time PupsCare Discounts!</h2>
      <p className= "discount-subtitle">Pamper your pup with our exclusive offers!</p>

      <div className = "discount-grid">

        {dogServices.map((service, index) => {
          const discountedPrice = (service.originalPrice * (1 - service.discount / 100)).toFixed(2);

          return (
            <div key={index} className="discount-card">
              <h3 className="discount-name">{service.title}</h3>
              <p className="discount-description">{service.description}</p>
              <p className="discount-price"> 
                <del>£{service.originalPrice}</del>{' '}
                <strong>£{discountedPrice}</strong>{' '}
                <span className="discount-badge">{service.discount}% OFF</span>
              </p>
              <button className="discount-button"><a href = "http://localhost:3000/booking">Book Now</a></button>
            </div>
          );
        })}
      </div>
    </div>
  )
}

export default DiscountPage
