import path from 'path';
import fs from 'fs/promises';
import { useEffect, useState } from 'react';
import styles from '../styles/Planet.module.css';
import Header from '../components/planet/Header';

export const getStaticPaths = async () => {
  const filePath = path.join(process.cwd(), 'public', 'data.json');
  const fileData = await fs.readFile(filePath);
  const data = JSON.parse(fileData.toString());

  const paths = data.map((planet) => {
    return {
      params: { planet: planet.name.toLowerCase() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const planetName = context.params.planet;
  const filePath = path.join(process.cwd(), 'public', 'data.json');
  const fileData = await fs.readFile(filePath);
  const data = JSON.parse(fileData.toString());
  const planetData = data.find(
    (planet) => planetName === planet.name.toLowerCase()
  );

  return {
    props: {
      planet: planetData,
    },
  };
};

const Planet = ({ planet }) => {
  const [tabSelected, setTabSelected] = useState('Overview');
  const [color, setColor] = useState('#419EBB');

  const setPlanetColor = ({ name }) => {
    switch (name) {
      case 'Mercury':
        setColor('#419EBB');
        break;
      case 'Venus':
        setColor('#EDA249');
        break;
      case 'Earth':
        setColor('#6f2ed6');
        break;
      case 'Mars':
        setColor('#D14C32');
        break;
      case 'Jupiter':
        setColor('#D83A34');
        break;
      case 'Saturn':
        setColor('#CD5120');
        break;
      case 'Uranus':
        setColor('#1ec2a4');
        break;
      case 'Neptune':
        setColor('#2d68f0');
        break;
      default:
        null;
    }
  };

  useEffect(() => {
    setTabSelected('Overview');
    setPlanetColor(planet);
  }, [planet]);

  return (
    <>
      <Header
        color={color}
        tabSelected={tabSelected}
        setTabSelected={setTabSelected}
      />
      {planet.name}
      <div>{planet.overview.content}</div>
    </>
  );
};

export default Planet;
