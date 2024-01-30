import React from 'react';
import girlhero from '../assets/girlhero.png'

const VirtualMedicalStaff: React.FC = () => {
  return (
    <div className='VirtualStaff'>
      <div className="card-img">
        <img src={girlhero} alt="hero girl" />
      </div>
    </div>
  
  );
}

export default VirtualMedicalStaff;