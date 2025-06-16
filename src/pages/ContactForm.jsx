import React, { useState } from "react"

const ContactForm = () => {
    const [formData, setFormData] = useState ({
        name: "",
        email: "",
        message: "",
    });

    const [errors, setErrors] = useState ({
        name: "",
        email: "",
        message: "",
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
        ...prevData,
        [name]: value,
    }));
    };

    const validateForm = () => {
        let valid = true;
        let tempErrors = { name: "", email: "", message: "" };

    if (!formData.name) {
        tempErrors.name = "Name is required";
        valid = false;
    }

    if (!formData.email) {
        tempErrors.email = "Email is required";
        valid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        tempErrors.email = "Enter a valid email";
        valid = false;
    }

    if (!formData.message) {
        tempErrors.message = "Message is required";
        valid = false;
    }

    setErrors(tempErrors);
    return valid;
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();

    if (validateForm()) {
        alert("Form submitted successfully!");
        setFormData({ name: "", email: "", message: "" });
    }
    };
    
    return (
    <div className = "form-container">
        <h2 className = "form-title">Contact Us</h2>

    <form onSubmit = {handleSubmit}>
        {/* Name Field */}
        <div className = "form-group">
            <label htmlFor = "name" className = "form-label">Name</label>
            <input
                type = "text"
                id = "name"
                name = "name"
                value = {formData.name}
                onChange = {handleInputChange}
                className = "form-input"
        />
        {errors.name && <p className="error">{errors.name}</p>}
        </div>

        {/* Email Field */}
        <div className = "form-group">
            <label htmlFor = "email" className = "form-label">Email</label>
            <input
                type = "email"
                id = "email"
                name = "email"
                value = {formData.email}
                onChange = {handleInputChange}
                className = "form-input"
        />
        {errors.email && <p className="error">{errors.email}</p>}
        </div>

        {/* Message Field */}
        <div className = "form-group">
            <label htmlFor = "message" className = "form-label">Message</label>
            <textarea
                id = "message"
                name = "message"
                value = {formData.message}
                onChange = {handleInputChange}
                className = "form-textarea"
        />
        {errors.message && <p className="error">{errors.message}</p>}
        </div>

        {/* Submit Button */}
        <button type = "submit" className = "form-button">Submit</button>
    </form>
    </div>
    )
}

export default ContactForm
