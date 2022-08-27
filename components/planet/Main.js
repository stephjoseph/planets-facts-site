import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import styles from '../../styles/Planet.module.css';
import Link from 'next/link';
import { gsap } from 'gsap/dist/gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

const Main = ({ planet, color, tabSelected, setTabSelected }) => {
  gsap.registerPlugin(ScrollTrigger);
  const [width, setWidth] = useState(0);

  const [hover, setHover] = useState({
    0: false,
    1: false,
    2: false,
  });

  const imgRef = useRef(null);
  const geoImgRef = useRef(null);
  const planetNameRef = useRef(null);
  const contentRef = useRef(null);
  const tabsRef = useRef([]);
  const detailsRef = useRef([]);
  const triggerRef = useRef(null);

  const updateSize = () => {
    setWidth(window.innerWidth);
  };

  const handleMouseEnter = (i) => {
    setHover((prevState) => ({
      ...prevState,
      [i]: true,
    }));
  };

  const handleMouseLeave = (i) => {
    setHover((prevState) => ({
      ...prevState,
      [i]: false,
    }));
  };

  useEffect(() => {
    setWidth(window.innerWidth);
    window.onresize = updateSize;
  }, []);

  useEffect(() => {
    gsap.fromTo(
      imgRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.3, ease: 'easeIn' }
    );

    gsap.fromTo(
      geoImgRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.3, ease: 'easeIn' }
    );

    gsap.fromTo(
      contentRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.3, ease: 'easeIn' }
    );
  }, [planet, tabSelected]);

  useEffect(() => {
    gsap.fromTo(
      planetNameRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.3, ease: 'easeIn' }
    );

    gsap.fromTo(
      tabsRef.current,
      {
        x: 300,
      },
      {
        x: 0,
        duration: 0.6,
        ease: 'easeIn',
        stagger: {
          each: 0.3,
        },
      }
    );

    gsap.fromTo(
      detailsRef.current,
      {
        y: 50,
        opacity: 0,
      },
      {
        scrollTrigger: {
          trigger: triggerRef.current,
          start: 'top bottom',
          toggleActions: 'play none none none',
        },
        y: 0,
        opacity: 1,
        duration: 0.6,
        ease: 'easeIn',
        stagger: {
          each: 0.3,
        },
      }
    );
  }, [planet]);

  return (
    <main className={styles.main}>
      <div className={styles.planet__container}>
        <div className={styles.planet__img} ref={imgRef}>
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
          <div className={styles.planet__geologyImg} ref={geoImgRef}>
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
              <h1 ref={planetNameRef}>{planet.name}</h1>
              <p ref={contentRef}>
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
            ref={(element) => {
              tabsRef.current[0] = element;
            }}
            style={{
              backgroundColor:
                tabSelected === 'Overview'
                  ? color
                  : hover[0]
                  ? 'rgba(216, 216, 216, 0.2)'
                  : 'transparent',
              borderColor:
                tabSelected === 'Overview' ? color : 'rgba(255, 255, 255, 0.2)',
            }}
            className={`${styles.planet__tab} ${
              tabSelected === 'Overview' && styles.selected
            }`}
            onClick={() => setTabSelected('Overview')}
            onMouseEnter={() => handleMouseEnter(0)}
            onMouseLeave={() => handleMouseLeave(0)}
          >
            <div>01</div>
            <div className={styles.planet__tabTitle}>Overview</div>
          </div>
          <div
            ref={(element) => {
              tabsRef.current[1] = element;
            }}
            style={{
              backgroundColor:
                tabSelected === 'Structure'
                  ? color
                  : hover[1]
                  ? 'rgba(216, 216, 216, 0.2)'
                  : 'transparent',
              borderColor:
                tabSelected === 'Structure'
                  ? color
                  : 'rgba(255, 255, 255, 0.2)',
            }}
            className={`${styles.planet__tab} ${
              tabSelected === 'Structure' && styles.selected
            }`}
            onClick={() => setTabSelected('Structure')}
            onMouseEnter={() => handleMouseEnter(1)}
            onMouseLeave={() => handleMouseLeave(1)}
          >
            <div>02</div>
            <div className={styles.planet__tabTitle}>Internal Structure</div>
          </div>
          <div
            ref={(element) => {
              tabsRef.current[2] = element;
            }}
            style={{
              backgroundColor:
                tabSelected === 'Surface'
                  ? color
                  : hover[2]
                  ? 'rgba(216, 216, 216, 0.2)'
                  : 'transparent',
              borderColor:
                tabSelected === 'Surface' ? color : 'rgba(255, 255, 255, 0.2)',
            }}
            className={`${styles.planet__tab} ${
              tabSelected === 'Surface' && styles.selected
            }`}
            onClick={() => setTabSelected('Surface')}
            onMouseEnter={() => handleMouseEnter(2)}
            onMouseLeave={() => handleMouseLeave(2)}
          >
            <div>03</div>
            <div className={styles.planet__tabTitle}>Surface Geology</div>
          </div>
        </div>
      </div>
      <div ref={triggerRef} className={styles.planet__details}>
        <div
          ref={(element) => {
            detailsRef.current[0] = element;
          }}
          className={styles.planet__detail}
        >
          <div>Rotation Time</div>
          <div className={styles.planet__detailValue}>{planet.rotation}</div>
        </div>
        <div
          ref={(element) => {
            detailsRef.current[1] = element;
          }}
          className={styles.planet__detail}
        >
          <div>Revolution Time</div>
          <div className={styles.planet__detailValue}>{planet.revolution}</div>
        </div>
        <div
          ref={(element) => {
            detailsRef.current[2] = element;
          }}
          className={styles.planet__detail}
        >
          <div>Radius</div>
          <div className={styles.planet__detailValue}>{planet.radius}</div>
        </div>
        <div
          ref={(element) => {
            detailsRef.current[3] = element;
          }}
          className={styles.planet__detail}
        >
          <div>Average Temp</div>
          <div className={styles.planet__detailValue}>{planet.temperature}</div>
        </div>
      </div>
    </main>
  );
};

export default Main;
