import styles from '../styles/Home.module.css';
import { SCard } from './SCard';

export const Services = () => {
    const numberOfCards = 4;

    const cardsArray = new Array(numberOfCards).fill(null);
    return (
        <div className={styles.services}>
            <h1>Services Offered</h1>
        <div className={styles.serviceswrapper}>
        {cardsArray.map((_, index) => (
        <div key={index} className={styles.cardwrapper}>
          <SCard />
        </div>
      ))}
        </div>
        </div>
    );
}

export default Services;
