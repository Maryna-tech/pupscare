import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';

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
    <div style={styles.container}>
      <p style={styles.text}>
        We use cookies to improve your experience. By using our site, you agree to our use of cookies.
      </p>
      <button style={styles.button} onClick={handleAccept}>Accept</button>
    </div>
  );
};

const styles = {
  container: {
    position: 'fixed',
    bottom: 0,
    width: '100%',
    background: '#222',
    color: '#fff',
    padding: '1rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    zIndex: 1000,
  },
  text: {
    margin: 0,
    fontSize: '0.9rem',
  },
  button: {
    padding: '0.5rem 1rem',
    background: '#4CAF50',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  }
};

export default CookieConsent;
