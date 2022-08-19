import { Grid } from '@mui/material';
import styles from './About.module.css';

export default function About() {
  return (
    <div className={styles['about-container']}>
      <Grid container spacing={2} xs={12} justifyContent="center" minHeight={'100vh'}>
        <Grid item xs={6}>
          <div className={styles['about-title']}>about.</div>
          <div className={styles['about-text']}>Blah blah blah</div>
        </Grid>
        <Grid item xs={4}>
          <img
            className={styles['about-image']}
            src={require('../../assets/images/Orange.jpg')}
            alt="matt trimby"
          ></img>
        </Grid>
      </Grid>
    </div>
  );
}
