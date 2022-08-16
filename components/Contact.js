import styles from '../styles/Home.module.css';
import ContactForm from './ContactForm';

export const Contact = () => {
    return (
        <div className={styles.contact}>
            <h1>Reach Out To Us For Your Next Adventure</h1>
            <ContactForm/>
        </div>
    );
}

export default Contact;
