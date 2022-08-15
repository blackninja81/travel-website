import styles from '../styles/Home.module.css';

export const HomeSection = () => {
    return (
        <div className={
            styles.home
        }>
            <video className={
                    styles.homevideo
                }
                autoplay
                playsinline
                muted
                loop>
                <source src='./images/video.mp4' type="video/mp4"/>
            </video>
            <div className={
                styles.hometext
            }>
                <h1>Lorem ipsum Travel Agency</h1>
                <p>Lorem ipsum dolor sit amet, 
                   consectetur adipiscing elit.
                   Cras rutrum convallis eleifend. 
                   Sed tempor erat ac purus ultrices,
                   eget porttitor mi pharetra. 
                   Aliquam libero purus, blandit in imperdiet in, 
                   eleifend eu nisi. Donec scelerisque ligula eu
                   imperdiet porttitor. Pellentesque habitant morbi 
                   tristique senectus et netus et malesuada fames ac
                   turpis egestas. Donec eget velit eget lacus efficitur
                   imperdiet a sed nunc. Aliquam maximus viverra leo nec cursus.
                </p>
            </div>

        </div>
    );
}

export default HomeSection;
