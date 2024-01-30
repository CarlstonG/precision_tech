import React, {useState, useEffect} from 'react'
import Logo from '../assets/logo2.png'

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
            <h4><i className="fas fa-phone" style={{ fontSize: '24px', color: '#fff' }}></i> 000-000-000</h4>
            <h4><i className="fas fa-envelope" style={{ fontSize: '24px', color: '#fff' }}></i> Sample@email.com</h4>
            <h4><i className="fas fa-globe" style={{ fontSize: '24px', color: '#fff' }}></i> Socials</h4>
            </div>
            <div className='Card-Container-right'>
            <a href="#"  target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook" style={{ fontSize: '24px', color: '#fff' }}></i></a>
            <a href="#"  target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter" style={{ fontSize: '24px', color: '#fff' }}></i></a>
            <a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin" style={{ fontSize: '24px', color: '#fff' }}></i></a>
        </div>
        </div>
      
        <h3 className='copy-write'>&copy; {currentYear} PrecisionTech Solutions. All rights reserved</h3>
      
    </div>
  )
}

export default Footer