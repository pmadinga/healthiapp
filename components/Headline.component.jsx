import Image from 'next/image';
import React from 'react';
import banner from '../assets/imgs/Illustration.png'
const HeadlineComponent = () => {
  return (
    <div>
      <div className="">
        <h1>Eat . Live . Healthi</h1>
        <Image src={banner} width={100} height={100} alt='Banner Image'/>
      </div>
    </div>
  );
}

export default HeadlineComponent;
