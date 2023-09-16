import { ActivePathContext } from '@/context/ActivePath'
import { useContext } from 'react'
import styles from './Skills.module.scss'
import { FontAwesomeIcon } from '../../../node_modules/@fortawesome/react-fontawesome/index'
import { faHtml5, faCss3Alt, faSquareJs, faPython, faReact, faNode } from '@fortawesome/free-brands-svg-icons'
import { ISkills } from '@/models/ISkills'

const skills: ISkills[] = [
    { id: 1, title: "HTML", icon: faHtml5, description: 'Proficient in using HTML to structure web content with semantic tags, ensuring accessibility and compatibility across various browsers. Skilled in creating well-organized, SEO-friendly web pages.' },
    { id: 2, title: "CSS / SASS", icon: faCss3Alt, description: 'Experienced in styling web applications with CSS, including responsive design techniques. Proficient in SASS to streamline and maintain complex stylesheets, ensuring consistency and ease of maintenance.' },
    { id: 3, title: "JavaScript / Typescript", icon: faSquareJs, description: 'Adept at utilizing JavaScript to create dynamic and interactive web experiences. Proficient in TypeScript, enhancing code quality and maintainability by adding static typing to JavaScript projects. Skilled in working with modern JavaScript frameworks and libraries.' },
    { id: 4, title: "Python", icon: faPython, description: 'Proficient in Python, a versatile programming language. Skilled in leveraging Python for a variety of applications, including data analysis using Pandas, web development with Django, and game development using PyGame. Capable of implementing complex solutions across multiple domains, from data manipulation to creating robust web applications and engaging 2D games.' },
    { id: 5, title: "React / Next.js", icon: faReact, description: 'Experienced in building web applications with React, a powerful JavaScript library for creating user interfaces. Familiar with Next.js, a framework that enhances React applications with server-side rendering, SEO optimization, and routing capabilities.' },
    { id: 6, title: "Node JS", icon: faNode, description: 'Competent in server-side development using Node.js, enabling the creation of scalable, efficient backend applications and APIs. Proficient in utilizing npm packages and building server-side logic for web projects.' },
]

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
            </div>
        </section>
    )
}