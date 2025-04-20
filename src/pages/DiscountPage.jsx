import React from 'react';

const dogServices = [
  {
    title: '🐶 Grooming Deluxe',
    originalPrice: 95,
    discount: 20,
    description: 'Full wash, haircut, and nail trim.'
  },
  {
    title: '🦴 Free Treats Bundle',
    originalPrice: 20,
    discount: 100,
    description: 'Healthy treats included with any walk-in!'
  },
  {
    title: '🚿 Bath & Blowdry',
    originalPrice: 75,
    discount: 25,
    description: 'Gentle bath and fluffy blowdry.'
  },
  {
    title: '🏃‍♂️ Puppy Playtime',
    originalPrice: 40,
    discount: 15,
    description: '1-hour supervised social play for pups.'
  }
];

const DiscountPage = () => {
  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif', background: '#fefefe' }}>
      <h2 style={{ textAlign: 'center', color: '#FF2DF1 ' }}>🐾 Limited-Time PupsCare Discounts!</h2>
      <p style={{ textAlign: 'center', color: '#555' }}>
        Pamper your pup with our exclusive offers!
      </p>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '1.5rem',
        marginTop: '2rem'
      }}>
        {dogServices.map((service, index) => {
          const discountedPrice = (service.originalPrice * (1 - service.discount / 100)).toFixed(2);
          return (
            <div key={index} style={{
              border: '1px solid #ddd',
              borderRadius: '12px',
              padding: '1rem',
              background: '#fff',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
            }}>
              <h3 className='discount'>{service.title}</h3>
              <p>{service.description}</p>
              <p>
                <del>£{service.originalPrice}</del>{' '}
                <strong style={{ color: '#e74c3c' }}>£{discountedPrice}</strong>
                {' '}
                <span style={{ background: '#FF9D23', padding: '2px 6px', borderRadius: '4px', fontSize: '0.9rem' }}>
                  {service.discount}% OFF
                </span>
              </p>
              <button style={{
                marginTop: '1rem',
                backgroundColor: '#3498db',
                color: 'white',
                border: 'none',
                padding: '10px 16px',
                borderRadius: '8px',
                cursor: 'pointer'
              }}><a href="http://localhost:3000/booking">
                Book Now
              </a></button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DiscountPage;
