import styles from '../../styles/Planet.module.css';

const Header = ({ color, tabSelected, setTabSelected }) => {
  return (
    <header className={`${styles.header}`}>
      <button
        type='button'
        style={{ borderColor: color }}
        className={`${tabSelected === 'Overview' ? styles.selected : ''}`}
        onClick={() => setTabSelected('Overview')}
      >
        Overview
      </button>
      <button
        type='button'
        style={{ borderColor: color }}
        className={`${tabSelected === 'Structure' ? styles.selected : ''}`}
        onClick={() => setTabSelected('Structure')}
      >
        Structure
      </button>
      <button
        type='button'
        style={{ borderColor: color }}
        className={`${tabSelected === 'Surface' ? styles.selected : ''}`}
        onClick={() => setTabSelected('Surface')}
      >
        Surface
      </button>
    </header>
  );
};

export default Header;
