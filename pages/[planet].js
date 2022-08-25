import path from 'path';
import fs from 'fs/promises';
import { useEffect } from 'react';

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
  useEffect(() => {
    console.log(planet);
  }, []);

  return (
    <div>
      {planet.name}
      <div>{planet.overview.content}</div>
    </div>
  );
};

export default Planet;
