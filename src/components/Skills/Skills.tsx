import { ActivePathContext } from '@/context/ActivePath'
import { useContext } from 'react'
import styles from './Skills.module.scss'
import { FontAwesomeIcon } from '../../../node_modules/@fortawesome/react-fontawesome/index'
import { skills } from '@/costants/skills'
import Image from 'next/image'
import foto from '../../pictures/jestjsIcon.png'
import { faGit } from '@fortawesome/free-brands-svg-icons'

export const Skills: React.FC = () => {
    const { activePath } = useContext(ActivePathContext)
    return (
        <section className={styles.skills} id="skills">
            <h2 className={styles.heading}>My <span>Skills</span><span className={`${styles.animate} ${activePath === 'skills' ? styles.showAnimate : ''}`} ></span></h2>
            <div className={styles.skillsTable}>
                {skills.map(({ id, title, icon, description }) => (
                    <div className={`${styles.skill} ${activePath === 'skills' ? styles.showAnimate : ''}`} key={id}>
                        <h3>{title}</h3>
                        <div className={styles.iconBox} >
                            <FontAwesomeIcon className={styles.icon} icon={icon} />
                        </div>
                        <p>{description}</p>
                        <span className={`${styles.animate} ${activePath === 'skills' ? styles.showAnimate : ''}`} ></span>
                    </div>
                ))}
                <div className={styles.skillsRow}>
                    <div className={`${styles.skill} ${activePath === 'skills' ? styles.showAnimate : ''}`} >
                        <h3>Git</h3>
                        <div className={styles.iconBox} >
                            <FontAwesomeIcon className={styles.icon} icon={faGit} />
                        </div>
                        <p>Adept in using Git, a distributed version control system, to manage code repositories efficiently. Proficient in version control practices, including branching, merging, and resolving conflicts. Skilled in collaborating with teams on code projects, utilizing Git to track changes, maintain code history, and ensure codebase integrity.</p>
                        <span className={`${styles.animate} ${activePath === 'skills' ? styles.showAnimate : ''}`} ></span>
                    </div>
                    <div className={`${styles.skill} ${activePath === 'skills' ? styles.showAnimate : ''}`}>
                        <h3>Jest.js</h3>
                        <div className={styles.iconBox} >
                            <Image
                                src={foto}
                                className={styles.jestImage}
                                alt="Jest.js icon"
                            />
                        </div>
                        <p>Proficient in testing React applications using Jest, a popular JavaScript testing framework. Experienced in writing unit and integration tests to ensure code reliability and maintainability. Skilled in using React Testing Library to perform component-level testing, focusing on user interactions and behaviors. These testing skills contribute to the delivery of high-quality, bug-free applications.</p>
                        <span className={`${styles.animate} ${activePath === 'skills' ? styles.showAnimate : ''}`} ></span>
                    </div>
                </div>
            </div>
        </section>
    )
}