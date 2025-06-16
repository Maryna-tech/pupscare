import React, { useState } from 'react'

const FeedbackForm = () => {
  const [formData, setFormData] = useState ({
    name: '',
    email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState (false);

  const handleChange = (e) => {
    setFormData({ 
      ...formData, 
      [e.target.name]: e.target.value 
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill out all fields.');
      return;
    }

    // Simulate sending data (e.g., to backend or email service)
    console.log('Feedback submitted:', formData);
    setSubmitted(true);

    // Reset form (optional)
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div style = {styles.container}>
      <h2 class = "animate__animated animate__zoomIn animate__delay-2s" style = {styles.feedback}>We value your feedback</h2>

      {submitted ? (
        <p style = {styles.success}>Thank you for your feedback!</p>
      ) : (
        <form onSubmit = {handleSubmit} style = {styles.form}>
          <input
            type = "text"
            name = "name"
            placeholder = "Your Name"
            value = {formData.name}
            onChange = {handleChange}
            style = {styles.input}
          />
          <input
            type = "email"
            name = "email"
            placeholder = "Your Email"
            value = {formData.email}
            onChange = {handleChange}
            style = {styles.input}
          />
          <textarea
            name = "message"
            placeholder = "Your Feedback"
            value = {formData.message}
            onChange = {handleChange}
            rows = "5"
            style = {styles.textarea}
          />
          <button type = "submit" style = {styles.button}>Submit</button>
        </form>
      )}
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '600px',
    margin: '2rem auto',
    padding: '2rem',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0,0,0,0.1)',
    backgroundColor: '#fff',
    fontFamily: 'sans-serif',
  },

  feedback: {
    marginBottom: '1rem',
    textAlign: 'center',
    color:'#8F87F1',
    fontSize:'38px',
  },

  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },

  input: {
    padding: '0.75rem',
    fontSize: '1rem',
    border: '1px solid #ccc',
    borderRadius: '5px',
  },

  textarea: {
    padding: '0.75rem',
    fontSize: '1rem',
    border: '1px solid #ccc',
    borderRadius: '5px',
    resize: 'vertical',
  },

  button: {
    padding: '0.75rem',
    fontSize: '1rem',
    backgroundColor: '#C68EFD',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },

  success: {
    textAlign: 'center',
    color: '#4CAF50',
    fontWeight: 'bold',
  },
};

export default FeedbackForm
