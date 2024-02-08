import React from 'react';
import img1 from '../assets/daks.jpg'
import img2 from '../assets/profile.png'
import img3 from '../assets/nins.png'
import img4 from '../assets/victor.png'
import img5 from '../assets/web.jpg'
import img6 from '../assets/call.jpg'


const AboutUs: React.FC = () => {
  const cardsData = [
    { id: 1, title: 'Darrel A.', content: 'Project Officer', imageUrl: img1 },
    { id: 2, title: 'Carlston G.', content: 'Senior Web Developer', imageUrl: img2 },
    { id: 3, title: 'Niño Arvin T.', content: 'CFO', imageUrl: img3 },
    { id: 4, title: 'Victor Emman T.', content: 'Global Client Relations' , imageUrl: img4},
    { id: 5, title: 'John-Loyd C.', content: 'UX/UI Designer', imageUrl: img5 },
    { id: 6, title: 'Raymond G.', content: 'CISCO Network Technician', imageUrl: img6 },
  ];



  return (
    <>
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <h1 className='header-team'>Meet Our Team</h1>
     <div className="container-blog">
     
          {cardsData.map((card) => (
              <div className="card-blog" key={card.id}>
              <div className="Img-Hero" style={{ backgroundImage: `url(${card.imageUrl})`, backgroundPosition: 'center', height: '50%', backgroundPositionX: 'top'}}>
              </div>
                <h2>{card.title}</h2>
                <p>{card.content}</p>
                <br />
                <button className='btn-main'>Contact US</button>
            </div>

          ))}
            
</div>
    </>
  );
}

export default AboutUs;