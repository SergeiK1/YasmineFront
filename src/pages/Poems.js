import React from 'react'
import '../css/Poems.css'; // Import CSS file for component styling


const poemsData = [
    {
      title: 'Poem 1',
      image: 'poem1.jpg',
      text: 'Lorem ipsum dolor sit amet...',
    },
    // Add more poem data here
  ];


export default function Poems() {
  return (
    <div className="masonry-layout">
    {poemsData.map((poem, index) => (
      <div className="masonry-item" key={index}>
        <img src={poem.image} alt={poem.title} />
        <h3>{poem.title}</h3>
        <p>{poem.text}</p>
      </div>
    ))}
  </div>
  )
}
