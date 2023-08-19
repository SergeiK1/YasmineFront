import React from 'react'
import '../css/Poems.css'; // Import CSS file for component styling


const poemsData = [
    {
      title: 'Star',
      image: './images/poem1.jpg',
      text: 'My love to me you are \n A dreamy shooting star \n A perfect living miracle \n Within my very arms \n\n You brighten up my day \n Despite the deep dark night \n I stare at you, thank god \n He brought me to this light ',
    },
    {
      title: 'Till Death Do Us Part',
      image: './images/poem2.jpg',
      text: 'From the moment I saw you \n My life became complete \n Not by some goal or purpose \n Or any little feat \n But by the simple feeling \n That everything felt right \n But simple not mean weak \n The feeling had quite might \n I knew I found my purpsoe, not one thing to ignore \n I knew that she is perfect \n One to spend the rest of my life with \n And for',
    },
    {
        title: 'She, to Him, IV',
        image: 'poem2.jpg',
        text: '... my being is but thine own-- \n Fused from its separateness by ecstasy. ',
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
        {/* <img src={poem.image} alt={poem.title} /> */}
        <h3>{poem.title}</h3>
        <p
            dangerouslySetInnerHTML={{
              __html: poem.text.replace(/\n/g, '<br />'), // Replace \n with <br /> for line breaks
            }}
          />
      </div>
    ))}
  </div>
  )
}
