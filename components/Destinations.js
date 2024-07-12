import styles from '../styles/Home.module.css';
import { DCard } from './DCard';

export const Destination = () => {
    const numberOfCards = 4;

    const cardsArray = new Array(numberOfCards).fill(null);

    return (
        <div className={styles.destination}>
            <h1>Packages</h1>
        <div className={styles.destinationwrapper}>
        {cardsArray.map((_, index) => (
        <div key={index} className={styles.cardwrapper}>
          <DCard />
        </div>
      ))}
        </div>
        </div>
    );
}

export default Destination;
