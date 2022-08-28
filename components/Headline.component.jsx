import Image from 'next/image';
import React from 'react';
import styles from '../assets/styles/Headline.component.module.css'
import bannerImg from '../assets/imgs/Illustration.png'


const HeadlineComponent = () => {
  return (
    <div>
      <div className={styles.banner}>
        <h1 className={styles.banner_headline}>Eat . Live . Healthi</h1>
        <Image src={bannerImg} width={300} height={300} alt='Banner Image'/>
      </div>
    </div>
  );
}

export default HeadlineComponent;
