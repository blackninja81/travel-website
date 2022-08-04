import styles from '../styles/Home.module.css';
import { Navbar } from './Nav';

export default function Layout({ children }) {
  return(
    <>
    <Navbar/>
    <div className={styles.container}>
      <main className={styles.main}>
        { children }
    </main>
    </div>
    </>
  )
}
