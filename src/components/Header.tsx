import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/logo1.png'

const Header: React.FC = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle)
   
  }
const HandleMenu = () => {
  setToggle(!toggle)
}

  console.log("Toggle is currently:", toggle);
  return (
  
      <nav className={toggle? 'navbar expanded' : 'navbar'}>
      <Link to="/" onClick={HandleMenu}> <img src={Logo} alt="Logo"  className='logo' onClick={HandleMenu}/></Link>
     
      <button className='toggle-icon' onClick={handleToggle}><i className="fa fa-bars" style={{ color: 'black' }}></i>
</button>
        <ul className='links'>
          <li></li>
          <li><Link to="/virtual-medical-staff" onClick={HandleMenu}>Virtual Staff</Link></li>
          <li><Link to="/rcm" onClick={HandleMenu}>Web Solutions</Link></li>
          <li><Link to="/aboutus" onClick={HandleMenu}>About-US</Link></li>
          <li><Link to="/testimonials" onClick={HandleMenu}>Testimonials</Link></li>
          <li><Link to="/blog" onClick={HandleMenu}>Blogs</Link></li>
        </ul>
        <Link to="/contactus" className="btn-main">
        Contact Us
      </Link>
      
      </nav>
    
  );
}

export default Header;