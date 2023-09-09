import { ActivePathContext } from '@/context/ActivePath'
import { useContext } from 'react'
import styles from './Skills.module.scss'

const codingSkills = [
    { id: 1, title: "HTML", procent: 90 },
    { id: 2, title: "CSS", procent: 80 },
    { id: 3, title: "JavaScript", procent: 70 },
    { id: 4, title: "Python", procent: 90 },
]

const profSkills = [
    { id: 1, title: "Web Design", procent: 70 },
    { id: 2, title: "Web Development", procent: 60 },
    { id: 3, title: "Graphic Design", procent: 80 },
    { id: 4, title: "SEO Marketing", procent: 90 },
]

export const Skills = () => {
    const { activePath } = useContext(ActivePathContext)
    return (
        <section className={styles.skills} id="skills">
            <h2 className={styles.heading}>My <span>Skills</span><span className={`${styles.animate} ${activePath === 'skills' ? styles.showAnimate : ''}`} style={{ '--i': 1 }}></span></h2>

            <div className={styles.skillsRow}>
                <div className={styles.skillsColumn}>
                    <h3 className={styles.title}>Coding Skills<span className={`${styles.animate} ${activePath === 'skills' ? styles.showAnimate : ''}`} style={{ '--i': 2 }}></span></h3>
                    <div className={styles.skillsBox}>
                        <div className={styles.skillsContent}>
                            {codingSkills.map(({ id, title, procent }) => (
                                <div className={styles.progress} key={id}>
                                    <h3>{title} <span>{procent}%</span></h3>
                                    <div className={styles.bar}><span style={{ width: `${procent}%` }}></span></div>
                                </div>
                            ))}
                            <span className={`${styles.animate} ${activePath === 'skills' ? styles.showAnimate : ''}`} style={{ '--i': 3 }}></span>
                        </div>
                    </div>
                </div>

                <div className={styles.skillsColumn}>
                    <h3 className={styles.title}>Professional Skills<span className={`${styles.animate} ${activePath === 'skills' ? styles.showAnimate : ''}`} style={{ '--i': 3 }}></span></h3>
                    <div className={styles.skillsBox}>
                        <div className={styles.skillsContent}>
                            {profSkills.map(({ id, title, procent }) => (
                                <div className={styles.progress} key={id}>
                                    <h3>{title} <span>{procent}%</span></h3>
                                    <div className={styles.bar}><span style={{ width: `${procent}%` }}></span></div>
                                </div>
                            ))}
                            <span className={`${styles.animate} ${activePath === 'skills' ? styles.showAnimate : ''}`} style={{ '--i': 4 }}></span>
                        </div>
                    </div>
                </div>
            </div>


        </section>
    )
}