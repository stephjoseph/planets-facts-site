import { useState, useEffect } from 'react';
import Head from 'next/head';
import styles from '../styles/Layout.module.css';
import MobileNav from './MobileNav';
import Navbar from './Navbar';

const Layout = ({ children }) => {
  const [width, setWidth] = useState(0);

  const updateSize = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    setWidth(window.innerWidth);
    window.onresize = updateSize;
  }, []);

  return (
    <>
      <Head>
        <link
          rel='icon'
          type='image/svg+xml'
          href='/assets/favicon-32x32.png'
        />
      </Head>
      <div className={styles.layout}>
        {width < 768 && <MobileNav />}
        {width >= 768 && <Navbar />}
        {children}
      </div>
    </>
  );
};

export default Layout;
