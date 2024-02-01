import React from 'react'
import model from '../assets/model1.jpg'

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
            <p>General Virtual Assistant</p> 
            <p>Digital Marketing VA</p> 
            <p>Appointment Setting VA</p> 
            <p>Executive VA</p> 
            <p>Virtual Transcription</p> 
            <p>Chat Support</p> 
            <p>Web Design/Development</p>  
            <p>Marketing</p> 
            <p>Content Writing</p> 
            <p>Graphics Design</p> 
            <p>Book Keeping</p> 

      </div>
        </div>
        
    </div>
    {/* <div>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut odit quas accusamus natus, optio perspiciatis. Veritatis blanditiis in exercitationem alias illum inventore temporibus, repellendus cum repudiandae id fugiat expedita ad voluptas, officia vero nesciunt minima, unde molestiae ea. Impedit quidem odit aliquid quasi non magnam molestias est dicta ipsa eos.
    </div> */}
    </>
  )
}

export default Home
