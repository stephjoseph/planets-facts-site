import styles from '../styles/Navbar.module.css';
import Link from 'next/link';

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

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <Link href='/'>
        <a className={styles.nav__logo}>The Planets</a>
      </Link>
      <div className={styles.nav__links}>
        {planets.map((planet) => {
          return (
            <Link key={planet.name} href={`/${planet.name.toLowerCase()}`}>
              <a>{planet.name}</a>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Navbar;
