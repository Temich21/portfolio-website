import { ActivePathContext } from '@/context/ActivePath'
import { useContext } from 'react'
import { Button } from '../Button/Button'
import styles from './About.module.scss'

export const About = () => {
    const { activePath } = useContext(ActivePathContext)
    return (
        <section className={`${styles.about} ${activePath === 'about' ? styles.showAnimate : ''}`} id="about">
            <h2 className={styles.heading}>About <span>Me</span><span className={`${styles.animate} ${activePath === 'about' ? styles.showAnimate : ''}`} style={{ '--i': 1 }}></span></h2>
            <div className={styles.aboutImg}>
                {/* <img /> */}
                {/* <span className={styles.circleSpin}></span> */}
                {/* <span className={`${styles.animate} ${activePath === 'about' ? styles.showAnimate : ''}`} style={{ '--i': 2 }}></span> */}
            </div>
            <div className={styles.aboutContent}>
                <h3>Frontend Developer!<span className={`${styles.animate} ${activePath === 'about' ? styles.showAnimate : ''}`} style={{ '--i': 3 }}></span></h3>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi imperdiet, mauris ac auctor dictum, nisl ligula egestas nulla, et sollicitudin sem purus in lacus. Duis pulvinar. Ut tempus purus at lorem. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Nunc dapibus tortor vel mi dapibus sollicitudin. Maecenas aliquet accumsan leo. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.<span className={`${styles.animate} ${activePath === 'about' ? styles.showAnimate : ''}`} style={{ '--i': 5 }}></span></p>
                <div className={styles.btnBox}>
                    <Button>Read More</Button>
                    <span className={`${styles.animate} ${activePath === 'about' ? styles.showAnimate : ''}`} style={{ '--i': 5 }}></span>
                </div>
            </div>
        </section>
    )
}