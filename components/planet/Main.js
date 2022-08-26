import { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from '../../styles/Planet.module.css';
import Link from 'next/link';

const Main = ({ planet, color, tabSelected, setTabSelected }) => {
  const [width, setWidth] = useState(0);

  const updateSize = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    setWidth(window.innerWidth);
    window.onresize = updateSize;
  }, []);

  return (
    <main className={styles.main}>
      <div className={styles.planet__container}>
        <div className={styles.planet__img}>
          <Image
            width={
              width < 768
                ? planet.dimensions.mobile
                : width >= 768 && width < 1280
                ? planet.dimensions.tablet
                : planet.dimensions.desktop
            }
            height={
              width < 768
                ? planet.dimensions.mobile
                : width >= 768 && width < 1280
                ? planet.dimensions.tablet
                : planet.dimensions.desktop
            }
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
              width={
                width < 768
                  ? planet.surface.mobile.width
                  : width >= 768 && width < 1280
                  ? planet.surface.tablet.width
                  : planet.surface.desktop.width
              }
              height={
                width < 768
                  ? planet.surface.mobile.height
                  : width >= 768 && width < 1280
                  ? planet.surface.tablet.height
                  : planet.surface.desktop.height
              }
              alt={`${planet.name} surface geology`}
              src={planet.images.geology}
            />
          </div>
        )}
        <div className={styles.planet}>
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
        <div className={styles.planet__tabs}>
          <div
            style={{
              backgroundColor:
                tabSelected === 'Overview' ? color : 'transparent',
              borderColor:
                tabSelected === 'Overview' ? color : 'rgba(255, 255, 255, 0.2)',
            }}
            className={`${styles.planet__tab} ${
              tabSelected === 'Overview' && styles.selected
            }`}
            onClick={() => setTabSelected('Overview')}
          >
            <div>01</div>
            <div className={styles.planet__tabTitle}>Overview</div>
          </div>
          <div
            style={{
              backgroundColor:
                tabSelected === 'Structure' ? color : 'transparent',
              borderColor:
                tabSelected === 'Structure'
                  ? color
                  : 'rgba(255, 255, 255, 0.2)',
            }}
            className={`${styles.planet__tab} ${
              tabSelected === 'Structure' && styles.selected
            }`}
            onClick={() => setTabSelected('Structure')}
          >
            <div>02</div>
            <div className={styles.planet__tabTitle}>Internal Structure</div>
          </div>
          <div
            style={{
              backgroundColor:
                tabSelected === 'Surface' ? color : 'transparent',
              borderColor:
                tabSelected === 'Surface' ? color : 'rgba(255, 255, 255, 0.2)',
            }}
            className={`${styles.planet__tab} ${
              tabSelected === 'Surface' && styles.selected
            }`}
            onClick={() => setTabSelected('Surface')}
          >
            <div>03</div>
            <div className={styles.planet__tabTitle}>Surface Geology</div>
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
