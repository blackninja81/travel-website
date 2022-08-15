import styles from '../styles/Home.module.css';

export const DCard = () => {
    return (
        <div className={styles.dcard}>
            <img src="https://images.pexels.com/photos/2363/france-landmark-lights-night.jpg?auto=compress&cs=tinysrgb&w=600"/>
       
            <h1>PARIS</h1>
            <p>
                    Aliquam libero purus, blandit in imperdiet in,
                    eleifend eu nisi. Donec scelerisque ligula eu 
                    imperdiet porttitor. Pellentesque habitant morbi
                     tristique senectus et netus et malesuada fames 
                     ac turpis egestas. Donec eget velit eget lacus 
                     efficitur imperdiet a sed nunc. Aliquam maximus 
                     viverra leo nec cursus.
            </p>
            <button className={styles.dbutton}>Learn More</button>
        </div>
    );
}

export default DCard;
