import React from "react"

import './componentsStyle.css';

const Servicescards: React.FC = () => {
  return (
    <div className="services-card-container">
        <div className="services Card1">
            <h2>Discover A</h2>
            <p>✔ Bookkeeping</p>
            <p>✔ Executive Virtual Assistant</p>
            <p>✔ Virtual Transcriptionist</p>
        </div>
        <div className="services Card2">
        <h2>Hire A</h2>
            <p>✔ Digital Marketing VA</p>
            <p>✔ Appointment Setters VA</p>
            <p>✔ Chat Support</p>
            <p>✔ Inbound Call Support</p>
            <p>✔ Virtual Transcriptionist</p>
        </div>
        <div className="services Card3">
        <h2>Find A</h2>
            <p>✔ Web Developer</p>
            <p>✔ Graphics Designer</p>
            <p>✔ UX/UI Designer</p>
        </div>
    </div>
  )
}

export default Servicescards