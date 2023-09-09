import styles from './HomeContent.module.scss'

import { FontAwesomeIcon } from '../../../node_modules/@fortawesome/react-fontawesome/index'
import { faFacebookF, faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faCode } from '@fortawesome/free-solid-svg-icons'
import { Button } from '../Button/Button'
import { useContext } from 'react'
import { ActivePathContext } from '@/context/ActivePath'

export const HomeContent: React.FC = () => {
    const { activePath } = useContext(ActivePathContext)

    return (
        <section className={styles.home} id="home">
            <div className={styles.homeContent}>
                <h1>Hi, I'm <span>Artem Rakhmatullin</span><span className={`${styles.animate} ${activePath === 'home' ? styles.showAnimate : ''}`} style={{ '--i': 2 }}></span></h1>
                <div className={styles.textAnimate}>
                    <h3 className={`${styles.animate} ${activePath === 'home' ? styles.showAnimate : ''}`}>Frontend Developer</h3>
                    <span className={`${styles.animate} ${activePath === 'home' ? styles.showAnimate : ''}`} style={{ '--i': 3 }}></span>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi imperdiet, mauris ac auctor dictum, nisl ligula egestas nulla, et sollicitudin sem purus in lacus. Duis pulvinar. Ut tempus purus at lorem. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Nunc dapibus tortor vel mi dapibus sollicitudin. Maecenas aliquet accumsan leo. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.<span className={`${styles.animate} ${activePath === 'home' ? styles.showAnimate : ''}`} style={{ '--i': 4 }}></span></p>
                <div className={styles.btnBox}>
                    <Button>Hire Me</Button>
                    <Button>Let's Talk</Button>
                    <span className={`${styles.animate} ${activePath === 'home' ? styles.showAnimate : ''}`} style={{ '--i': 5 }}></span>
                </div>
            </div>
            <div className={styles.homeSci}>
                <div className={styles.circle}>
                    <a href='https://www.facebook.com/artem.rahmatullin/'>
                        <FontAwesomeIcon icon={faFacebookF} />
                    </a>
                </div>
                <div className={styles.circle}>
                    <a href='https://www.linkedin.com/in/artem-rakhmatullin-905391192/'>
                        <FontAwesomeIcon icon={faLinkedinIn} />
                    </a>
                </div>
                <div className={styles.circle}>
                    <a href='https://github.com/Temich21' className={styles.iconGitA}>
                        <FontAwesomeIcon
                            icon={faGithub}
                            className={styles.iconGit}
                        />
                    </a>
                </div>
                <div className={styles.circle}>
                    <a href='https://www.codewars.com/users/Temich21' >
                        <FontAwesomeIcon icon={faCode} />
                    </a>
                </div>
                <span className={`${styles.animate} ${activePath === 'home' ? styles.showAnimate : ''}`} style={{ '--i': 6 }}></span>
            </div>
            <div className={`${styles.homeImgHover}  ${styles.homeImg}`}></div>
            <span className={`${styles.animate} ${activePath === 'home' ? styles.showAnimate : ''}`} style={{ '--i': 7 }}></span>
        </section>
    )
}