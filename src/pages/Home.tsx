import React from 'react'
import model from '../assets/model1.jpg'
import BLogCards from '../components/BlogCards'

const Home: React.FC = () => {
  
  return (
    <>
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
    <BLogCards/>
    </>
  )
}

export default Home
