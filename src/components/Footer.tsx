import React, {useState, useEffect} from 'react'
import Logo from '../assets/logo2.png'
import Ph from '../assets/ph.png'

const Footer: React.FC = () => {
    const [currentYear, setCurrentYear] = useState(new Date().getFullYear())

    useEffect(() => {
        setCurrentYear(new Date().getFullYear())

        const intervalID = setInterval(() => {
            setCurrentYear(new Date().getFullYear())
        }, 6000)

        return () => clearInterval(intervalID)
    }, [])


  return (
    <div className='Footer-Container'>
        <div className='Card-Container'>
            
            <img src={Logo} alt="logo2" className='logo-footer'/>
            <div className='Info-footer'>
            <h4>Precision<span className='tech'>Tech</span> Solutions</h4>
            <h4><i className="fas fa-phone" style={{ fontSize: '24px', color: '#06ccf9' }}></i><img src={Ph} alt="ph" className='Ph-flag'/> 00-63-355-316-881</h4> 
            <h4><i className="fas fa-envelope" style={{ fontSize: '24px', color: '#06ccf9' }}></i> Discover@precisiontech-solutions.com</h4>
            <h4><i className="fas fa-globe" style={{ fontSize: '24px', color: '#06ccf9' }}></i> Socials</h4>
            </div>
            <div className='Card-Container-right'>
            <a href="#"  target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook" style={{ fontSize: '24px', color: '#06ccf9' }}></i></a>
            <a href="#"  target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter" style={{ fontSize: '24px', color: '#06ccf9' }}></i></a>
            <a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin" style={{ fontSize: '24px', color: '#06ccf9' }}></i></a>
        </div>
        </div>
      
        <h3 className='copy-write'>&copy; {currentYear} PrecisionTech Solutions. All rights reserved</h3>
      
    </div>
  )
}

export default Footer