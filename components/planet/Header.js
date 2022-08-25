import styles from '../../styles/Planet.module.css';

const Header = ({ color, tabSelected, setTabSelected }) => {
  return (
    <header className={`${styles.header}`}>
      <div
        style={{ borderColor: color }}
        className={`${tabSelected === 'Overview' ? styles.selected : ''}`}
        onClick={() => setTabSelected('Overview')}
      >
        Overview
      </div>
      <div
        style={{ borderColor: color }}
        className={`${tabSelected === 'Structure' ? styles.selected : ''}`}
        onClick={() => setTabSelected('Structure')}
      >
        Structure
      </div>
      <div
        style={{ borderColor: color }}
        className={`${tabSelected === 'Surface' ? styles.selected : ''}`}
        onClick={() => setTabSelected('Surface')}
      >
        Surface
      </div>
    </header>
  );
};

export default Header;
