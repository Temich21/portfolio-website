import { FontAwesomeIcon } from '../../../node_modules/@fortawesome/react-fontawesome/index'
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons/index'
import styles from './Education.module.scss'
import { ActivePathContext } from '@/context/ActivePath'
import { useContext, useState } from 'react'
import { lazy, Suspense } from 'react'
import { IEducation, ILicenses, IExperience } from '@/models/IEducationSection'

const education: IEducation[] = [
    { id: 1, title: "Bachelor's degree", years: '2016-2020', programme: 'Fundamentals of Mechanical Engineering' },
    { id: 2, title: "Master's degree", years: '2020-2023', programme: 'Production Machines, Systems and Robots' },
]

const licenses: ILicenses[] = [
    { id: 1, title: "HTML and CSS in depth", company: 'Meta' },
    { id: 2, title: "React Basics", company: 'Meta' },
    { id: 3, title: "Advanced React", company: 'Meta' },
    { id: 4, title: "Principles of UX/UI Design", company: 'Meta' },
    { id: 5, title: "Front-End Developer Capstone", company: 'Meta' },
    { id: 6, title: "Data Analysis and Visualization in Python", company: 'Brno University of Technology FIT' },
]

const experience: IExperience[] = [
    {
        id: 1,
        title: "Sales Assistant",
        years: '2014-2015',
        company: 'Ural Oil',
        description: 'As a sales assistant, my primary responsibility was to provide vital support in the tender process. This involved gathering and organizing essential documentation, such as proposals, quotations, and technical specifications. I collaborated closely with the sales team, ensuring that all tender submissions were accurate, complete, and submitted within deadlines.'
    },
    {
        id: 2,
        title: "Mostly service staff",
        years: '2015- Oct 2019',
        company: 'Various companies',
        description: 'During university, I worked various service jobs such as waiter or help in a kitchen.'
    },
    {
        id: 3,
        title: "Mechnical designer",
        years: 'Oct 2019 - Jun 2021',
        company: 'Project Controls s.r.o.',
        description: "In my capacity as a Mechanical Designer, my core responsibilities encompassed crafting design proposals and innovative solutions for project documentation. I specialized in supporting manufacturing processes, ensuring that designs were optimized for seamless production. Moreover, I played a pivotal role in maintaining and updating technical documentation, serving both our customers and suppliers. I engaged in close collaboration with customers and suppliers to refine technical specifications, aligning our designs with their unique requirements."
    },
    {
        id: 4,
        title: "Mechnical designer",
        years: 'Jun 2021 - Present',
        company: 'IFE-CR',
        description: "In my role as a Mechanical Designer at IFE-CR, I&rsquo;m a key player in designing innovative product solutions and new models, with a specialization in door leaf design. Collaboration is at the heart of my work, as I engage with various departments and levels within the organization. Besides I&rsquo;m responsible for crafting comprehensive project documentation and implementing design changes to keep our projects adaptable. Additionally, I maintain and update technical documentation for both our customers and suppliers. Notably, my diploma work was conducted in collaboration with IFE - CR, further underscoring my dedication to the company&rsquo;s success. You can find it below."
    },
]

const LazyModelComponent = lazy(() => import('../ModelViewer/ModelViewer'));

export const Education: React.FC = () => {
    const { activePath } = useContext(ActivePathContext)

    return (
        <section className={styles.education} id="education">
            <h2 className={styles.heading}>My <span>Journey</span><span className={`${styles.animate} ${activePath === 'education' ? styles.showAnimate : ''}`} ></span></h2>
            <div className={styles.educationRow}>
                <div className={`${styles.educationColumn} ${styles.educationColumnSecond}`}>
                    <div>
                        <h3 className={styles.title}>Education<span className={`${styles.animate} ${activePath === 'education' ? styles.showAnimate : ''}`} ></span></h3>
                        <div className={styles.educationBox}>
                            {education.map(({ id, title, years, programme }) => (
                                <div className={styles.educationContent} key={id}>
                                    <div className={styles.content}>
                                        <div className={styles.year}><FontAwesomeIcon icon={faCalendarDays} /> {years}</div>
                                        <h3>{title} - Brno University of Technology</h3>
                                        <p>Faculty of Mechanical Engineering</p>
                                        <p>Programme : {programme}</p>
                                    </div>
                                </div>
                            ))}
                            <span className={`${styles.animate} ${activePath === 'education' ? styles.showAnimate : ''}`} ></span>
                        </div>
                    </div>

                    <div>
                        <h3 className={styles.title}>Licenses & certifications & courses<span className={`${styles.animate} ${activePath === 'education' ? styles.showAnimate : ''}`} ></span></h3>
                        <div className={styles.educationBox}>
                            {licenses.map(({ id, title, company }) => (
                                <div className={styles.educationContent} key={id}>
                                    <div className={styles.content}>
                                        <h3>{title}</h3>
                                        <p>{company}</p>
                                    </div>
                                </div>
                            ))}
                            <span className={`${styles.animate} ${activePath === 'education' ? styles.showAnimate : ''}`} ></span>
                        </div>
                    </div>
                </div>

                <div className={styles.educationColumn}>
                    <h3 className={styles.title}>Experience<span className={`${styles.animate} ${activePath === 'education' ? styles.showAnimate : ''}`} ></span></h3>
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
                        <span className={`${styles.animate} ${activePath === 'education' ? styles.showAnimate : ''}`} ></span>
                    </div>
                </div>
            </div>

            <div className={styles.thesises}>
                <div className={styles.thesis}>
                    <h3 className={styles.title}>Bachelor thesis<span className={`${styles.animate} ${activePath === 'education' ? styles.showAnimate : ''}`} ></span></h3>
                    <div className={styles.thesisContent}>
                        <div className={styles.thesisModel}>
                            <Suspense fallback={<div className={styles.loading}><span className={styles.loader}></span><p>Loading...</p></div>}>
                                <LazyModelComponent path={"/AcousticShield.gltf"} />
                            </Suspense>
                        </div>
                        <div className={styles.thesisDescribing}>
                            <h3>Bachelor thesis: Engineering design of the mobile acoustic shielding<span className={`${styles.animate} ${activePath === 'education' ? styles.showAnimate : ''}`} ></span></h3>
                            <p>Goals to be achieved:</p>
                            <p>The main goal is the structural design of a mobile element for shielding unwanted noise sources with the following parameters: max. weight 15 kg, variability of the assembly of elements, mobile,
                                price of the element up to 2000 CZK. Sub-goals of the bachelor&rsquo;s thesis: - analysis of acoustic shielding options, - proposal of possible solutions,
                                - verification of the function of the element by simulation or experimentally. Required deliverables: cover report, component drawings, assembly drawing.</p>
                            <br />
                            <p>Characteristics of the problem of the task:</p>
                            <p>When measuring the acoustic properties of machines and equipment, it is often necessary to address the shielding of unwanted sources of noise from the surroundings.
                                One possibility is to improve the measurement environment using variable elements with acoustic insulation, which will reduce noise from the surroundings.
                                Such a solution is especially suitable for in-situ measurements, when it is not possible to move the monitored object into the ideal environment of the acoustic chamber.
                                Type of work: development - construction</p>
                            <br />
                            <p><a href="https://www.vut.cz/studenti/zav-prace/detail/121693"><b>Assessment</b></a></p>
                        </div>
                        <span className={`${styles.animate} ${activePath === 'education' ? styles.showAnimate : ''}`}></span>
                    </div>
                </div>
                <div className={styles.thesis}>
                    <h3 className={styles.title}>Diploma thesis<span className={`${styles.animate} ${activePath === 'education' ? styles.showAnimate : ''}`} ></span></h3>
                    <div className={styles.thesisContent}>
                        <div className={styles.thesisModel}>
                            <Suspense fallback={<div className={styles.loading}><span className={styles.loader}></span><p>Loading...</p></div>}>
                                <LazyModelComponent path={"/CutMachine.glb"} />
                            </Suspense>
                        </div>
                        <div className={styles.thesisDescribing}>
                            <h3>Diploma thesis: A design of single-purpose saw<span className={`${styles.animate} ${activePath === 'education' ? styles.showAnimate : ''}`} ></span></h3>
                            <p>Goals to be achieved:</p>
                            <p>Description of the current state of production. Research in the field of material division. Design of variants of the construction of equipment for material separation and justification of the choice of a suitable variant.
                                Necessary design calculations. Device construction according to predetermined parameters. 3D CAD model in any software. Drawings of selected parts, assemblies including parts list. Conclusion and recommendations for practice.</p>
                            <br />
                            <p>Characteristics of the problem of the task:</p>
                            <p>Aluminum extruded profiles are often used in the production of components for rolling stock, especially doors, which must then be processed as required. For easier subsequent bending of these profiles,
                                transverse grooves are created. At present, universal conventional machines are used. To increase productivity, it is convenient and expedient to design and use a single-purpose machine.
                                The goal of this work is the design of just such a device.</p>
                            <br />
                            <p><a href="https://www.vut.cz/studenti/zav-prace/detail/149666"><b>Assessment</b></a></p>
                        </div>
                        <span className={`${styles.animate} ${activePath === 'education' ? styles.showAnimate : ''}`} ></span>
                    </div>
                </div>
            </div>
        </section>
    )
}