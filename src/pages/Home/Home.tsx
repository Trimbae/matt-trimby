import About from '../../components/About/About';
import TitleCard from '../../components/TitleCard/TitleCard';
import { RefObject, useRef } from 'react';
import styles from './Home.module.css';
import { Fade } from 'react-awesome-reveal';

const scrollToRef = (ref: RefObject<HTMLInputElement>) => {
  if (ref.current) {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  }
};

export default function Home() {
  const aboutRef = useRef<HTMLInputElement>(null);
  const executeScroll = () => scrollToRef(aboutRef);
  return (
    <div>
      <TitleCard onSeeMoreClick={executeScroll} />
      <div ref={aboutRef} className={styles['about-container']}>
        <Fade direction="up" duration={2000} triggerOnce>
          <About />
        </Fade>
      </div>
    </div>
  );
}
