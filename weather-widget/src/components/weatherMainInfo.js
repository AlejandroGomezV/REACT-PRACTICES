import styles from './weatherMainInfo.module.css';

export default function WeatherMainInfo({weather}){
    return <div className={styles.mainInfo}>
        <div className={styles.city}>{weather?.location.name}</div>
        <div className={styles.country}>{weather?.location.country}</div>
        <div className={styles.row}>
            <div>
                <img src={`http:${weather?.current.condition.icon}`} width="128" alt={weather?.current.condition.text}/>
            </div>
            <div className={styles.weatherConditions}>
                <div className={styles.condition}>{weather?.current.condition.text}</div>
                <div className={styles.current}>{weather?.current.temp_c}</div>
            </div>
        </div>
        <iframe
            title = 'map'
            src={`https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d4062380.2148305187!2d${weather?.location.lon}7!3d${weather?.location.lat}3!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2smx!4v1711423561222!5m2!1ses-419!2smx`}
            width="100%"
            height="450"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade">
        </iframe>
    </div>
}