import React from 'react'
import '../css/Video.css';

export default function Video() {
  return (
    <div className="video-container">
        <div className="video-wrapper">
            <iframe
                title="YouTube video"
                src="https://youtu.be/IBxCdr85bmU"
                frameBorder="0"
                allowFullScreen
                className="video-iframe"
            ></iframe>
            <h1 className='videoframe'>https://youtu.be/IBxCdr85bmU</h1>
        </div>
    </div>
);
}
