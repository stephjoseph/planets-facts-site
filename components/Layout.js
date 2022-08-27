import { useState, useEffect } from 'react';
import Head from 'next/head';
import styles from '../styles/Layout.module.css';
import MobileNav from './MobileNav';
import Navbar from './Navbar';

const Layout = ({ children }) => {
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
        <MobileNav />
        <Navbar />
        {children}
      </div>
    </>
  );
};

export default Layout;
