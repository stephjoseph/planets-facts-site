import { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from '../../styles/Planet.module.css';
import Link from 'next/link';

const Main = ({ planet, color, tabSelected }) => {
  useEffect(() => {}, [planet]);
  return (
    <main className={styles.main}>
      <div className={styles.planet}>
        <div className={styles.planet__img}>
          <Image
            width={planet.dimensions.mobile}
            height={planet.dimensions.mobile}
            alt={`${planet.name} illustration`}
            src={
              tabSelected === 'Overview'
                ? planet.images.planet
                : tabSelected === 'Structure'
                ? planet.images.internal
                : planet.images.planet
            }
          />
        </div>
        {tabSelected === 'Surface' && (
          <div className={styles.planet__geologyImg}>
            <Image
              width={planet.surface.mobile.width}
              height={planet.surface.mobile.height}
              alt={`${planet.name} illustration`}
              src={planet.images.geology}
            />
          </div>
        )}

        <div className={styles.planet__summary}>
          <div className={styles.planet__content}>
            <h1>{planet.name}</h1>
            <p>
              {tabSelected === 'Overview'
                ? planet.overview.content
                : tabSelected === 'Structure'
                ? planet.structure.content
                : tabSelected === 'Surface'
                ? planet.geology.content
                : planet.overview.content}
            </p>
          </div>
          <div className={styles.planet__source}>
            Source :{' '}
            <Link
              href={
                tabSelected === 'Overview'
                  ? planet.overview.source
                  : tabSelected === 'Structure'
                  ? planet.structure.source
                  : tabSelected === 'Surface'
                  ? planet.geology.source
                  : planet.overview.source
              }
            >
              <a>Wikipedia</a>
            </Link>{' '}
            <Image
              width={12}
              height={12}
              alt=''
              src='/assets/icon-source.svg'
            />
          </div>
        </div>
      </div>
      <div className={styles.planet__details}>
        <div className={styles.planet__detail}>
          <div>Rotation Time</div>
          <div className={styles.planet__detailValue}>{planet.rotation}</div>
        </div>
        <div className={styles.planet__detail}>
          <div>Revolution Time</div>
          <div className={styles.planet__detailValue}>{planet.revolution}</div>
        </div>
        <div className={styles.planet__detail}>
          <div>Radius</div>
          <div className={styles.planet__detailValue}>{planet.radius}</div>
        </div>
        <div className={styles.planet__detail}>
          <div>Average Temp</div>
          <div className={styles.planet__detailValue}>{planet.temperature}</div>
        </div>
      </div>
    </main>
  );
};

export default Main;
