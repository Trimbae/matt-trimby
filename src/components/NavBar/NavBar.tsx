import { Link } from 'react-router-dom';
import styles from './NavBar.module.css';
import { Container } from '@mui/material';

const NavBar = () => {
  return (
    <div className={styles['nav-bar']}>
      <Container className={styles['nav-bar-container']} maxWidth="lg">
        <div className={styles['title-container']}>
          <div className={styles['title']}>
            matt trimby<span className={styles['title-suffix']}>.dev</span>
          </div>
        </div>
        <div className={styles['links-container']}>
          <Link className={styles['nav-bar-link']} to="/">
            home
          </Link>
          <Link className={styles['nav-bar-link']} to="/about">
            blog
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default NavBar;
