import React, { useEffect } from 'react'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

const DiscountPopup = () => {
  useEffect ( () => {
    MySwal.fire({
      title: '🎉 Special Offer!',
      html: '<b> Get 20% OFF</b> — Today Only!',
      icon: 'success',
      showCancelButton: true,
      confirmButtonText: 'Claim Now',
      cancelButtonText: 'Maybe Later',
      timer: 10000,
      timerProgressBar: true
    }).then((result) => {
      if (result.isConfirmed) {
        // Redirect or show another promo
        console.log('User claimed the discount!');
        // window.location.href = '/discount-page'; // optional redirect
      }
    });
  }, []);

  return null; 
};

export default DiscountPopup
