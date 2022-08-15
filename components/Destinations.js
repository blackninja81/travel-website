import styles from '../styles/Home.module.css';
import { DCard } from './DCard';

export const Destination = () => {
    return (
        <div className={styles.destination}>
            <h1>Destinations</h1>
        <div className={styles.destinationwrapper}>
        <div className={styles.cardwrapper}>
            <DCard/>
        </div>
        <div className={styles.cardwrapper}>
            <DCard/>
        </div>
        <div className={styles.cardwrapper}>
            <DCard/>
        </div>
        <div className={styles.cardwrapper}>
            <DCard/>
        </div>
        <div className={styles.cardwrapper}>
            <DCard/>
        </div>
        <div className={styles.cardwrapper}>
            <DCard/>
        </div>
        </div>
        </div>
    );
}

export default Destination;
