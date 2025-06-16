import React from "react"

const reviews = [

  {
    id: 1,
    name: "Alice Johnson",
    photo: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 5,
    text: "Amazing grooming service! My dog looks fantastic and is so happy. Highly recommend!"
  },

  {
    id: 2,
    name: "Michael Smith",
    photo: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 4,
    text: "Great experience. The staff was very friendly and my dog loved the bath and brush."
  },

  {
    id: 3,
    name: "Emily Davis",
    photo: "https://randomuser.me/api/portraits/women/22.jpg",
    rating: 5,
    text: "Best grooming service ever! My pup smells so good and his coat is shining!"
  },

  {
    id: 4,
    name: "Sophie Baker",
    photo: "https://randomuser.me/api/portraits/women/23.jpg",
    rating: 5,
    text: "Amazing job everytime. Never been disappointed been using them over 5 years would not go anywhere else. "
  }

];

const Reviews = () => {

  return (
    <div className = "reviews-container">
      <h2 className = "title">Customer Reviews</h2>
      <div className = "reviews-grid">
        {reviews.map((review) => (
          <div key = {review.id} className = "review-card">
            <img src = {review.photo} alt = {review.name} className = "review-photo" />
            <h3>{review.name}</h3>
            
            <div className = "stars">
              {Array.from({ length: 5 }, (_, index) => (
                <span key = {index} className = {index < review.rating ? "filled-star" : "empty-star"}>
                  ★
                </span>
              ))}
            </div>

            <p className = "review-text">"{review.text}"</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Reviews
