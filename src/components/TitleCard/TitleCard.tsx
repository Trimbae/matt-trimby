import { Button, Grid } from '@mui/material';
import styles from './TitleCard.module.css';
import { Fade } from 'react-awesome-reveal';

interface TitleCardProps {
  onSeeMoreClick: Function;
}

export default function TitleCard(props: TitleCardProps) {
  const { onSeeMoreClick } = props;
  const findOutMoreClickHandler = () => {
    onSeeMoreClick();
  };
  return (
    <div>
      <Grid container justifyContent="center" alignItems="center" minHeight="70vh" className={styles['grid-container']}>
        <Grid item xs={12}>
          <div className={styles['title-card-container']}>
            <Fade direction="up" duration={1000} triggerOnce>
              <div className={styles['title-card-prefix']}>Hi, my name is</div>
            </Fade>
            <Fade direction="up" duration={2000} triggerOnce>
              <div className={styles['title-card-title']}>matt trimby.</div>
            </Fade>
            <Fade direction="up" duration={1500} triggerOnce>
              <div className={styles['title-card-suffix']}>I'm a developer</div>
            </Fade>
            <Fade direction="up" duration={2000} triggerOnce>
              <div className={styles['title-card-footer']}>
                <Button onClick={findOutMoreClickHandler} variant="contained">
                  Find out more
                </Button>
              </div>
            </Fade>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
