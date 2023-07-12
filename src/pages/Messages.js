import React, { useEffect, useState }  from 'react';
import '../css/Messages.css'; // Import CSS file for component styling
import axios from "axios";

export default function Messages() {

    const [messages, setMessages] = useState([]);

    const [expandedColor, setExpandedColor] = useState(null);
    const [quote, setQuote] = useState('');
  
    useEffect(() => {
      const fetchAllMessages = async () => {
        try {
          const res = await axios.get('https://iloveyasmine-af13d9296f80.herokuapp.com//messages');
          setMessages(res.data);
        } catch (err) {
          console.log(err);
        }
      };
  
      fetchAllMessages();
    }, []);
  
    const handleClick = (color, quoteText) => {
      setExpandedColor(color);
      setQuote(quoteText);
    };
  
    const handleScreenClick = () => {
      setExpandedColor(null);
    };
  
    const renderQuoteScreen = () => {
      let backgroundColor = '';
  
      switch (expandedColor) {
        case 'Memories':
          backgroundColor = '#fb9cd4';
          break;
        case 'Love':
          backgroundColor = '#ff5373';
          break;
        case 'Future':
          backgroundColor = '#e666ff';
          break;
        default:
          backgroundColor = '#a564fa';
          break;
      }
  
      return (
        <div style={{ background: backgroundColor }} className="quote-screen" onClick={handleScreenClick}>
          <p className="quote">{quote}</p>
        </div>
      );
    };
  
    const shuffleArray = (array) => {
      const shuffledArray = [...array];
      for (let i = shuffledArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
      }
      return shuffledArray;
    };
  
    const shuffledMessages = shuffleArray(messages);
  
    return (
      <>
        <div className="selections">
          {expandedColor ? (
            renderQuoteScreen()
          ) : (
            <>
              {shuffledMessages.map((message) => (
                <button
                  key={message.id}
                  className={`button ${message.type}`}
                  onClick={() => handleClick(message.type, message.quote)}
                >
                  {message.type}
                </button>
              ))}
            </>
          )}
        </div>
      </>
    );
}