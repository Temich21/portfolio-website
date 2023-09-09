import { FontAwesomeIcon } from '../../../node_modules/@fortawesome/react-fontawesome/index'
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons/index'
import styles from './Education.module.scss'
import { ActivePathContext } from '@/context/ActivePath'
import { useContext, useState } from 'react'
import ModelViewer from '../ModelViewer/ModelViewer'

const education = [
    { id: 1, title: "Bachelor's degree", years: '2016-2020' },
    { id: 2, title: "Master's degree", years: '2020-2023' },
]

const licenses = [
    { id: 1, title: "HTML and CSS in depth", company: 'Meta' },
    { id: 2, title: "React Basics", company: 'Meta' },
    { id: 3, title: "Advanced React", company: 'Meta' },
    { id: 4, title: "Principles of UX/UI Design", company: 'Meta' },
    { id: 5, title: "Front-End Developer Capstone", company: 'Meta' },
    { id: 6, title: "Data Analysis and Visualization in Python", company: 'Brno University of Technology FIT' },
]

const experience = [
    { id: 1, title: "Sales Assistant", years: '2014-2015', company: 'Ural Oil', description: '...' },
    { id: 2, title: "Mostly service staff", years: '2015- Oct 2019', company: 'Various companies', description: '...' },
    { id: 3, title: "Mechnical designer", years: 'Oct 2019 - Jun 2021', company: 'Project Controls s.r.o.', description: 'Design proposals and solutions of project documentation, implementation of design changes, maintenance and updating of technical documentation of customers and suppliers, cooperation with customers in the field of technical specifications.' },
    { id: 4, title: "Mechnical designer", years: 'Jun 2021 - Present', company: 'IFE-CR', description: 'Design and implementation of product design solutions and new models, creation of project documentation, implementation of design changes, updating technical customer and supplier documentation.' },
]

const projects = [
    { id: 1, title: "Portfolio Website", description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi imperdiet, mauris ac auctor dictum, nisl ligula egestas nulla, et sollicitudin sem purus in lacus. Duis pulvinar. Ut tempus purus at lorem. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Nunc dapibus tortor vel mi dapibus sollicitudin. Maecenas aliquet accumsan leo. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
    { id: 2, title: "D&D Generator", description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi imperdiet, mauris ac auctor dictum, nisl ligula egestas nulla, et sollicitudin sem purus in lacus. Duis pulvinar. Ut tempus purus at lorem. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Nunc dapibus tortor vel mi dapibus sollicitudin. Maecenas aliquet accumsan leo. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
    { id: 3, title: "Brno table games", description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi imperdiet, mauris ac auctor dictum, nisl ligula egestas nulla, et sollicitudin sem purus in lacus. Duis pulvinar. Ut tempus purus at lorem. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Nunc dapibus tortor vel mi dapibus sollicitudin. Maecenas aliquet accumsan leo. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
    { id: 4, title: "Data Analysis and Visualization in Python", description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi imperdiet, mauris ac auctor dictum, nisl ligula egestas nulla, et sollicitudin sem purus in lacus. Duis pulvinar. Ut tempus purus at lorem. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Nunc dapibus tortor vel mi dapibus sollicitudin. Maecenas aliquet accumsan leo. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
]

export const Education = () => {
    const { activePath } = useContext(ActivePathContext)
    const [slideIdx, setSlideIdx] = useState(0)

    const sliderLength: number = 3
    const isPrevButtonDisabled = slideIdx === 0
    const isNextButtonDisabled = slideIdx === projects.length - sliderLength

    const getVisibleProjects = () => {
        return projects.slice(slideIdx, slideIdx + sliderLength)
    }

    const handlePrevClick = () => {
        if (slideIdx > 0) {
            setSlideIdx(slideIdx - 1);
        }
    }

    const handleNextClick = () => {
        if (slideIdx < projects.length - sliderLength) {
            setSlideIdx(slideIdx + 1);
        }
    }

    return (
        <section className={styles.education} id="education">
            <h2 className={styles.heading}>My <span>Journey</span><span className={`${styles.animate} ${activePath === 'education' ? styles.showAnimate : ''}`} style={{ '--i': 1 }}></span></h2>
            <div className={styles.educationRow}>
                <div className={`${styles.educationColumn} ${styles.educationColumnSecond}`}>
                    <div>
                        <h3 className={styles.title}>Education<span className={`${styles.animate} ${activePath === 'education' ? styles.showAnimate : ''}`} style={{ '--i': 2 }}></span></h3>
                        <div className={styles.educationBox}>
                            {education.map(({ id, title, years }) => (
                                <div className={styles.educationContent} key={id}>
                                    <div className={styles.content}>
                                        <div className={styles.year}><FontAwesomeIcon icon={faCalendarDays} /> {years}</div>
                                        <h3>{title} - Brno University of Technology</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi imperdiet, mauris ac auctor dictum, nisl ligula egestas nulla, et sollicitudin sem purus in lacus. Duis pulvinar. Ut tempus purus at lorem. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Nunc dapibus tortor vel mi dapibus sollicitudin. Maecenas aliquet accumsan leo. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                    </div>
                                </div>
                            ))}
                            <span className={`${styles.animate} ${activePath === 'education' ? styles.showAnimate : ''}`} style={{ '--i': 3 }}></span>
                        </div>
                    </div>

                    <div>
                        <h3 className={styles.title}>Licenses & certifications & courses<span className={`${styles.animate} ${activePath === 'education' ? styles.showAnimate : ''}`} style={{ '--i': 4 }}></span></h3>
                        <div className={styles.educationBox}>
                            {licenses.map(({ id, title, company }) => (
                                <div className={styles.educationContent} key={id}>
                                    <div className={styles.content}>
                                        <h3>{title}</h3>
                                        <p>{company}</p>
                                    </div>
                                </div>
                            ))}
                            <span className={`${styles.animate} ${activePath === 'education' ? styles.showAnimate : ''}`} style={{ '--i': 5 }}></span>
                        </div>
                    </div>
                </div>

                <div className={styles.educationColumn}>
                    <h3 className={styles.title}>Experience<span className={`${styles.animate} ${activePath === 'education' ? styles.showAnimate : ''}`} style={{ '--i': 4 }}></span></h3>
                    <div className={styles.educationBox}>
                        {experience.map(({ id, title, years, company, description }) => (
                            <div className={styles.educationContent} key={id}>
                                <div className={styles.content}>
                                    <div className={styles.year}><FontAwesomeIcon icon={faCalendarDays} /> {years}</div>
                                    <h3>{title} - {company}</h3>
                                    <p>{description}</p>
                                </div>
                            </div>
                        ))}
                        <span className={`${styles.animate} ${activePath === 'education' ? styles.showAnimate : ''}`} style={{ '--i': 5 }}></span>
                    </div>
                </div>
            </div>

            {/* <div className={styles.thesises}>
                <div className={styles.thesis}>
                    <h3 className={styles.title}>Bacalar thesis</h3>
                    <div className={styles.thesisContent}>
                        <div className={styles.thesisModel}>
                            <ModelViewer path={"/AcousticShield.gltf"} />
                        </div>
                        <div className={styles.thesisDescribing}>
                            <h3>Bla Bla<span className={`${styles.animate} ${activePath === 'education' ? styles.showAnimate : ''}`} style={{ '--i': 6 }}></span></h3>
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi imperdiet, mauris ac auctor dictum, nisl ligula egestas nulla, et sollicitudin sem purus in lacus. Duis pulvinar. Ut tempus purus at lorem. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Nunc dapibus tortor vel mi dapibus sollicitudin. Maecenas aliquet accumsan leo. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            <p><a href="">Assesment</a></p>
                        </div>
                        <span className={`${styles.animate} ${activePath === 'education' ? styles.showAnimate : ''}`} style={{ '--i': 7 }}></span>
                    </div>
                </div>
                <div className={styles.thesis}>
                    <h3 className={styles.title}>Diploma thesis</h3>
                    <div className={styles.thesisContent}>
                        <div className={styles.thesisModel}>
                            <ModelViewer path={"/CutMachine.glb"} />
                        </div>
                        <div className={styles.thesisDescribing}>
                            <h3>Bla Bla<span className={`${styles.animate} ${activePath === 'education' ? styles.showAnimate : ''}`} style={{ '--i': 8 }}></span></h3>
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi imperdiet, mauris ac auctor dictum, nisl ligula egestas nulla, et sollicitudin sem purus in lacus. Duis pulvinar. Ut tempus purus at lorem. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Nunc dapibus tortor vel mi dapibus sollicitudin. Maecenas aliquet accumsan leo. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            <p><a href="">Assesment</a></p>
                        </div>
                        <span className={`${styles.animate} ${activePath === 'education' ? styles.showAnimate : ''}`} style={{ '--i': 9 }}></span>
                    </div>
                </div>
            </div> */}
        </section>
    )
}