import React, { useState } from 'react'

import '../App.css'
const ContactUs:React.FC = () => {
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      comment: '',
    });
  
    const handleChange = (e: { target: { name: any; value: any; }; }) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value,
      });
    };
  
    const handleSubmit = (e: { preventDefault: () => void; }) => {
      e.preventDefault();
      // Here, you can handle the form submission, possibly using a backend API to send the email.
      // For security reasons, do not send emails directly from the frontend.
      console.log('Form submitted:', formData);
    };
  
    return (
      <div className="contact-form-container">
        <div className="contact-form-card">
          <h2>Contact Us</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name"></label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder='Name'
                required
              />
            </div>
  
            <div className="form-group">
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder='Email'
                required
              />
            </div>
  
            <div className="form-group">
              <textarea
                id="comment"
                name="comment"
                value={formData.comment}
                onChange={handleChange}
                placeholder='Comment'
                required
              />
            </div>
  
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    );
  };
  

export default ContactUs