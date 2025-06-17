import React, { useEffect, useState } from "react"
import Cookies from "js-cookie"
import "./CookieConsent.css"

const CookieConsent = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const cookieConsent = Cookies.get('cookie_consent');
    if (!cookieConsent) {
      setVisible(true);
    }
  }, []);

  const handleAccept = () => {
    Cookies.set('cookie_consent', 'accepted', { expires: 365 });
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div id="cookie-consent-container">
      <p id="cookie-consent-text">
        We use cookies to improve your experience. By using our site, you agree to our use of cookies.
      </p>
      <button id="cookie-consent-button" onClick={handleAccept}>Accept</button>
    </div>
  );
};

export default CookieConsent
