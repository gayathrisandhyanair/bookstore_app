import React, { useState } from 'react';

function Signup({ onNavigate }) {
  const [formData, setFormData] = useState({
    name: '',
    place: '',
    age: '',
    email: '',
    education: '',
    contact: '',
    phone: '',
    acceptedTerms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.acceptedTerms) {
      alert('Signup Successful!');
      onNavigate(); 
    } else {
      alert('You must accept the terms and conditions to proceed.');
    }
  };

  return (
    <div className="form-container">
      <h2>Signup</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          name="name" 
          placeholder="Name" 
          value={formData.name} 
          onChange={handleChange} 
          required 
        />
        <input 
          type="text" 
          name="place" 
          placeholder="Place" 
          value={formData.place} 
          onChange={handleChange} 
          required 
        />
        <input 
          type="number" 
          name="age" 
          placeholder="Age" 
          value={formData.age} 
          onChange={handleChange} 
          required 
        />
        <input 
          type="email" 
          name="email" 
          placeholder="Email" 
          value={formData.email} 
          onChange={handleChange} 
          required 
        />
        <input 
          type="text" 
          name="education" 
          placeholder="Education" 
          value={formData.education} 
          onChange={handleChange} 
          required 
        />
        <input 
          type="text" 
          name="contact" 
          placeholder="Contact Details" 
          value={formData.contact} 
          onChange={handleChange} 
          required 
        />
        <input 
          type="tel" 
          name="phone" 
          placeholder="Phone Number" 
          value={formData.phone} 
          onChange={handleChange} 
          required 
        />
        <label>
          <input 
            type="checkbox" 
            name="acceptedTerms" 
            checked={formData.acceptedTerms} 
            onChange={handleChange} 
          />
          I accept the terms and conditions (fine will be charged if the book is not returned or damaged).
        </label>
        <button type="submit">Signup</button>
      </form>
    </div>
  );
}

export default Signup;
