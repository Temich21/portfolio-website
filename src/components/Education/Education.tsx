import { FontAwesomeIcon } from '../../../node_modules/@fortawesome/react-fontawesome/index'
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons/index'
import styles from './Education.module.scss'
import { ActivePathContext } from '@/context/ActivePath'
import { useContext } from 'react'
import { education, licenses, experience } from '@/costants/education'
// import { lazy, Suspense } from 'react'


// const LazyModelComponent = lazy(() => import('../ModelViewer/ModelViewer'));

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

            {/* <div className={styles.thesises}>
                <div className={styles.thesis}>
                    <h3 className={styles.title}>Bachelor thesis<span className={`${styles.animate} ${activePath === 'education' ? styles.showAnimate : ''}`} ></span></h3>
                    <div className={styles.thesisContent}>
                        <div className={styles.thesisModel}>
                            <Suspense fallback={<div className={styles.loading}><span className={styles.loader}></span><p>Loading...</p></div>}>
                                <LazyModelComponent path={"https://storage.cloud.google.com/portfoliomodels21/AcousticShield.gltf"} />
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
                                <LazyModelComponent path={"https://storage.cloud.google.com/portfoliomodels21/CutMachine.glb"} />
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
            </div> */}
        </section>
    )
}