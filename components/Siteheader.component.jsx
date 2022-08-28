import React from 'react';
import Image from 'next/image';
import Logo from '../assets/imgs/Logo.png'
import gh from '../assets/imgs/github.png'
import styles from '../assets/styles/Siteheader.component.module.css'
import Link from 'next/link';

const SiteheaderComponent = () => {
  return (
    <div className={styles.nav_container}>
      <nav className={styles.navbar}>
        <div className={styles.logo}>
          <Image src={Logo} height={50} width={50} alt='Logo Image'/>
          <h1>Healthi App</h1>
        </div>
        <div className={styles.repo_link}>
          <Link href={'https://github.com/pmadinga/healthiapp'} className={styles.link} target='_blank'>
            <a>
              <Image src={gh} height={20} width={20} alt='github repo'/>
            </a>
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default SiteheaderComponent;
