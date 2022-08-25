import Head from 'next/head';
import styles from '../styles/Layout.module.css';
import MobilNav from './MobileNav';

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
        <MobilNav />
        {children}
      </div>
    </>
  );
};

export default Layout;
