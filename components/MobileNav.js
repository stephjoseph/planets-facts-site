import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/MobileNav.module.css';
import cn from 'classnames';

const planets = [
  {
    name: 'Mercury',
    color: '#419EBB',
  },
  {
    name: 'Venus',
    color: '#EDA249',
  },
  {
    name: 'Earth',
    color: '#6f2ed6',
  },
  {
    name: 'Mars',
    color: '#D14C32',
  },
  {
    name: 'Jupiter',
    color: '#D83A34',
  },
  {
    name: 'Saturn',
    color: '#CD5120',
  },
  {
    name: 'Uranus',
    color: '#1ec2a4',
  },
  {
    name: 'Neptune',
    color: '#2d68f0',
  },
];

const MobilNav = () => {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive((prevState) => !prevState);
  };

  return (
    <nav className={styles.nav}>
      <div className={styles.nav__bar}>
        <Link href='/'>
          <a className={styles.nav__logo}>The Planets</a>
        </Link>
        <div className={styles.nav__button} onClick={toggleMenu}>
          <svg xmlns='http://www.w3.org/2000/svg' width='24' height='17'>
            <g fill={`${menuActive ? '#353448' : '#FFF'}`} fillRule='evenodd'>
              <path d='M0 0h24v3H0zM0 7h24v3H0zM0 14h24v3H0z' />
            </g>
          </svg>
        </div>
      </div>
      <div
        className={`${styles.nav__menu} ${menuActive ? '' : styles.inactive}`}
      >
        {planets.map((planet) => {
          return (
            <Link
              href={`/${planet.name.toLowerCase()}`}
              key={planet.name}
              style={{ color: planet.color }}
              className=''
            >
              <a className={styles.nav__link} onClick={toggleMenu}>
                <div>
                  <div
                    style={{
                      backgroundColor: planet.color,
                    }}
                    className={styles.nav__circle}
                  ></div>
                  {planet.name}
                </div>
                <Image
                  width={4}
                  height={8}
                  src='/assets/icon-chevron.svg'
                  alt=''
                />
              </a>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default MobilNav;
