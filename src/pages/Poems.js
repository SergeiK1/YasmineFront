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
        title: 'Darkness to Bliss',
        image: 'poem2.jpg',
        text: 'The darkness envelops me once more \n As my mind begins to drift \n Trillions of thoughts makw way for one \n Beautiful girl thats in my mind forever \n Making the every day interesting \n The sadness a bliss \n The one who showed me love \n And taught me how to \n I love this girl with all my heart \n Forever thanking the forces that brought her to me \n You are my one, \n Yasmine',
      },
      {
        title: 'Confession',
        image: 'poem2.jpg',
        text: 'I do admit Im not the perfect man \n Or man at all the way that I treated you \n My little mind had carried but the things I needed \n The common sense that makes you trust and love \n\n I thus committed many crimes and lied \n To hide myself from harm that I brought you \n\n It is not right and does deserve a lash \n To teach this boy to love and to surpass \n To teach the boy the lesson: kind and care \n The lesson he must learn: be fair \n\n Yet passed some time the boy seemed to have learned \n To care to love to feel to cure \n Out of fear of losing you this boy dug holes \n He feared so much he seized to see the light \n Too scared to lose the only perfect thing life \n He took the path that led him near \n Yet after time the boy had found the light \n Had found to love \n To live \n To fight ',
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
