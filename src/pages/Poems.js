import React from 'react'
import '../css/Poems.css'; // Import CSS file for component styling


const poemsData = [
    {
      title: 'Poem 1',
      image: 'poem1.jpg',
      text: 'Lorem ipsum dolor sit amet...',
    },
    {
      title: 'Poem 2',
      image: 'poem2.jpg',
      text: 'Consectetur adipiscing elit...',
    },
    {
        title: 'Poem 3',
        image: 'poem2.jpg',
        text: 'Consectetur adipiscing elit...',
      },
      {
        title: 'Poem 4',
        image: 'poem2.jpg',
        text: 'Consectetur adipiscing elit...',
      },
      {
        title: 'Poem 5',
        image: 'poem2.jpg',
        text: 'Consectetur adipiscing elit...',
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
