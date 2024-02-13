import React from 'react';
import img1 from '../assets/success.jpg'
import img2 from '../assets/headphone.jpg'
import img3 from '../assets/heroBanner.jpg'
import img4 from '../assets/earn.jpg'
import img5 from '../assets/web.jpg'
import img6 from '../assets/call.jpg'
import { useNavigate } from 'react-router-dom';

import '../App.css'
const Rcm: React.FC = () => {

const navigate = useNavigate()

const HandleNav = () => {
  navigate('/contactus')
}

  const cardsData = [
    { id: 1, title: 'Success Expert', content: 'You will be more successful.', imageUrl: img1 },
    { id: 2, title: 'Why you Need VAs', content: 'Businesses can scale their support by hiring Virtual Assistants as needed, adjusting to workload fluctuations without the commitment of a full-time employee.', imageUrl: img2 },
    { id: 3, title: 'The support that you need', content: 'Get the support you need for a successful journey.', imageUrl: img3 },
    { id: 4, title: 'Earn More spend Less', content: 'Efficient tasks management helps you earn more and spend less time.' , imageUrl: img4},
    { id: 5, title: 'Importance of a website', content: 'Having an online presence is crucial for success in today\'s digital age.', imageUrl: img5 },
    { id: 6, title: 'Close call business strat', content: 'Strategize your business for close calls and success.', imageUrl: img6 },
  ];
  
  return (
    <>
    <div className='web-container'>
    <div className="text-container">
      <br />
      <br />
      <br />
          <h1>Discover our best developers</h1>
          <h2>Your Web Partner in Progress</h2>
        </div>
    </div>
  <div className="extra-web">
  <div className="container-blog">
          {cardsData.map((card) => (
              <div className="card-blog" key={card.id}>
              <div className="Blog-Hero" style={{ backgroundImage: `url(${card.imageUrl})`, backgroundPosition: 'center', height: '50%', backgroundPositionX: 'top'}}>
              </div>
                <h2>{card.title}</h2>
                <p>{card.content}</p>
                <br />
                <button onClick={HandleNav} className='btn-main'>Contact US</button>
            </div>

          ))}
            
</div>
  </div>
    </>
  );
}

export default Rcm;