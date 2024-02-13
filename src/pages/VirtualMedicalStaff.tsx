import React from 'react';
import girlhero from '../assets/nologobanner.png'
import Servicescards from '../components/Servicescards';

const VirtualMedicalStaff: React.FC = () => {
  return (
    <>
    <div className='VirtualStaff'>
      <div className="card-img">
        <img src={girlhero} alt="hero girl" />

      </div>
    </div>
    <Servicescards/>
    </>
    
  
  );
}

export default VirtualMedicalStaff;