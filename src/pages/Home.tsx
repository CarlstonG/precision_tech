import React from 'react'
import model from '../assets/model1.jpg'
import img1 from '../assets/success.jpg'
import img2 from '../assets/headphone.jpg'
import img3 from '../assets/heroBanner.jpg'
import img4 from '../assets/earn.jpg'
import img5 from '../assets/web.jpg'
import img6 from '../assets/call.jpg'
import { useNavigate } from 'react-router-dom';

const Home: React.FC = () => {

  const navigate = useNavigate();

  const handleButtonNav = () => {
    navigate('/ContactUs')
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
   <div className="HeroNew">
        <div className="text-container">
          <h1>Elevate Your Efficiency with PrecisionTech Solutions</h1>
          <h2>Your Virtual Assistant Partner in Progress</h2>
        </div>
   </div>
  
   <div className="container-blog">
          {cardsData.map((card) => (
              <div className="card-blog" key={card.id}>
              <div className="Blog-Hero" style={{ backgroundImage: `url(${card.imageUrl})`, backgroundPosition: 'center', height: '50%', backgroundPositionX: 'top'}}>
              </div>
                <h2>{card.title}</h2>
                <p>{card.content}</p>
                <br />
                <button className='btn-main' onClick={handleButtonNav}>Contact US</button>
            </div>

          ))}
            
</div>
        
   <div className='hero-banner'>
        <div className="cards-container">
        <div className='object1'>
          <img src={model} alt="model1" className='model-1'/>
        </div>
        <div className='card'>
        <h2>Our Services</h2>
            <p><i className="fa fa-star"></i> General Virtual Assistant</p> 
            <p><i className="fa fa-star"></i> Digital Marketing VA</p> 
            <p><i className="fa fa-star"></i> Appointment Setting VA</p> 
            <p><i className="fa fa-star"></i> Executive VA</p> 
            <p><i className="fa fa-star"></i> Virtual Transcription</p> 
            <p><i className="fa fa-star"></i> Chat Support</p> 
            <p><i className="fa fa-star"></i> Web Design/Development</p>  
            <p><i className="fa fa-star"></i> Marketing</p> 
            <p><i className="fa fa-star"></i> Content Writing</p> 
            <p><i className="fa fa-star"></i> Graphics Design</p> 
            <p><i className="fa fa-star"></i> Book Keeping</p> 

      </div>
        </div>
       
    </div>
   
    </>
  )
}

export default Home
