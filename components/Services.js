import styles from '../styles/Home.module.css';
import { SCard } from './SCard';

export const Services = () => {
    return (
        <div className={styles.services}>
            <h1>Services Offered</h1>
        <div className={styles.serviceswrapper}>
        <div className={styles.cardwrapper}>
            <SCard/>
        </div>
        <div className={styles.cardwrapper}>
            <SCard/>
        </div>
        <div className={styles.cardwrapper}>
            <SCard/>
        </div>
        </div>
        </div>
    );
}

export default Services;
