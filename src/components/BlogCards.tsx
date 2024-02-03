
import './componentsStyle.css'; // Import the CSS file
import img1 from './img/girlhero.png'




const cardsData = [
  { id: 1, title: 'Success Expert', content: 'Lorem ipsum dolor sit amet.', imageUrl: img1 },
  { id: 2, title: 'Why you Need VAs', content: 'Consectetur adipiscing elit.', imageUrl: img1 },
  { id: 3, title: 'The support that you need', content: 'Sed do eiusmod tempor incididunt.', imageUrl: img1 },
  { id: 4, title: 'Earn More spend Less', content: 'Ut labore et dolore magna aliqua.' , imageUrl: img1},
  { id: 5, title: 'Importance of a website', content: 'Duis aute irure dolor in reprehenderit.', imageUrl: img1 },
  { id: 6, title: 'Close call business strat', content: 'Excepteur sint occaecat cupidatat non proident.', imageUrl: img1 },
];

const ResponsiveCards = () => {
  return (
    <div className="container-blog">
    {cardsData.map((card) => (
      <div className="card-blog" key={card.id}>
        <div className="Blog-Hero" style={{ backgroundImage: `url(${card.imageUrl})`, backgroundPosition: 'center', height: '50%', backgroundPositionX: 'top'}}>
        </div>
          <h2>{card.title}</h2>
          <p>{card.content}</p>
        
      </div>
    ))}
  </div>
  );

};

export default ResponsiveCards;
