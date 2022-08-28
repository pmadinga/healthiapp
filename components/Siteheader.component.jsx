import React from 'react';
import Image from 'next/image';
import Logo from '../assets/imgs/Logo.png'
const SiteheaderComponent = () => {
  return (
    <div>
      <nav>
        <div>
          <Image src={Logo} height={50} width={50} alt='Logo Image'/>
        </div>
      </nav>
    </div>
  );
}

export default SiteheaderComponent;
