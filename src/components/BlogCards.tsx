// ResponsiveCards component
import React from 'react';
import './componentsStyle.css'; // Import the CSS file
import { Link } from 'react-router-dom';

interface CardData {
  id: number;
  title: string;
  content: string;
  imageUrl: string;
  slug: string;
}

interface ResponsiveCardsProps {
  data: CardData[];
}

const ResponsiveCards: React.FC<ResponsiveCardsProps> = ({ data }) => {
  return (
    <div className="container-blog">
      {data.map((card) => (
        <Link  key={card.id} to={`/blog/${card.slug}`} className='noHover'>
          <div className="card-blog" key={card.id}>
            <div
              className="Blog-Hero"
              style={{
                backgroundImage: `url(${card.imageUrl})`,
                backgroundPosition: 'center',
                height: '50%',
                backgroundPositionX: 'top',
              }}
            ></div>
            <h2>{card.title}</h2>
            <p>{card.content}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ResponsiveCards;
