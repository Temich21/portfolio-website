import { ActivePathContext } from '@/context/ActivePath'
import { useContext } from 'react'
// import { Button } from '../Button/Button'
import foto from '../../pictures/aboutFoto.jpg'
import styles from './About.module.scss'
import Image from 'next/image'

export const About: React.FC = () => {
    const { activePath } = useContext(ActivePathContext)
    return (
        <section className={`${styles.about} ${activePath === 'about' ? styles.showAnimate : ''}`} id="about">
            <h2 className={styles.heading}>About <span>Me</span><span className={`${styles.animate} ${activePath === 'about' ? styles.showAnimate : ''}`}></span></h2>
            <div className={styles.aboutImg}>
                <Image
                    src={foto}
                    className={styles.aboutImage}
                    alt="Picture of the author"
                />
                <span className={styles.circleSpin}></span>
                <span className={`${styles.animate} ${activePath === 'about' ? styles.showAnimate : ''}`}></span>
            </div>
            <div className={styles.aboutContent}>
                <h3>Frontend Developer!<span className={`${styles.animate} ${activePath === 'about' ? styles.showAnimate : ''}`} ></span></h3>
                <p>
                    Hi, I&rsquo;m Artem Rakhmatullin, a mechanical designer with a burning passion for the digital world. As someone who has spent years crafting precision in the physical realm, I&rsquo;ve decided to embark on an exciting journey into the realm of frontend development.
                    My career shift represents a fusion of my meticulous attention to detail and a newfound love for coding, design, and user experiences. I believe that the skills homed in mechanical design, such as problem-solving and an eye for perfection, beautifully complement the world of web development.
                    From creating intricate CAD models to crafting elegant web interfaces, I find joy in every aspect of design and development. My portfolio is a testament to this journey, showcasing projects that bridge the gap between precision engineering and pixel-perfect frontend design.
                    Feel free to explore my work, where you&rsquo;ll find a mix of creativity and functionality. I welcome opportunities for collaboration and growth, so let&rsquo;s connect and shape the digital landscape together.
                    <span className={`${styles.animate} ${activePath === 'about' ? styles.showAnimate : ''}`}></span>
                </p>
                {/* <div className={styles.btnBox}>
                    <Button>Read More</Button>
                    <span className={`${styles.animate} ${activePath === 'about' ? styles.showAnimate : ''}`} style={{ '--i': 5 }}></span>
                </div> */}
            </div>
        </section>
    )
}