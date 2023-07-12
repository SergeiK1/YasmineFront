import React, { useState } from 'react';
import '../css/Add.css'; // Import CSS file for component styling
import axios from "axios";
import { useNavigate } from 'react-router-dom';

export default function Add() {
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleCategoryChange = (e) => {
    setMessage(prev=>({...prev, [e.target.name]: e.target.value}))
    setSelectedCategory(e.target.value);
  };

  const navigate = useNavigate();

  const [message, setMessage] = useState({
    type: "",
    quote: ""
  })

  const handleClick = async e => {
    e.preventDefault()
    try {
      console.log(message)
      await axios.post("https://iloveyasmine-af13d9296f80.herokuapp.com/messages", message)
      navigate("/")
    } catch(err) {
      console.log(err)
    }
  }
  


  return (
    <div className="container">
      <div className="centered-area">
        <h1>Show your love </h1>
        <div className="radio-buttons">
          <input
            type="radio"
            id="memories"
            name="type"
            value="Memories"
            checked={selectedCategory === 'Memories'}
            onChange={handleCategoryChange}
          />
          <label htmlFor="memories" className={selectedCategory === 'Memories' ? 'selected' : ''}>
            Memories
          </label>

          <input
            type="radio"
            id="love"
            name="type"
            value="Love"
            checked={selectedCategory === 'Love'}
            onChange={handleCategoryChange}
          />
          <label htmlFor="love" className={selectedCategory === 'Love' ? 'selected' : ''}>
            Love
          </label>

          <input
            type="radio"
            id="future"
            name="type"
            value="Future"
            checked={selectedCategory === 'Future'}
            onChange={handleCategoryChange}
          />
          <label htmlFor="future" className={selectedCategory === 'Future' ? 'selected' : ''}>
            Future
          </label>

          <input
            type="radio"
            id="random"
            name="type"
            value="Random"
            checked={selectedCategory === 'Random'}
            onChange={handleCategoryChange}
          />
          <label htmlFor="random" className={selectedCategory === 'Random' ? 'selected' : ''}>
            Random
          </label>
        </div>

        <div className="input-area">
          <textarea placeholder="Enter your message..." rows="5" onChange={handleCategoryChange} name="quote"  />
          <button onClick={handleClick}>Submit</button>
        </div>
      </div>
    </div>
  );
}
