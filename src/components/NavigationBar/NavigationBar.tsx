"use client"

import styles from './NavigationBar.module.scss'
import { FontAwesomeIcon } from '../../../node_modules/@fortawesome/react-fontawesome/index'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import { useContext, useEffect, useRef, useState } from 'react'
import { ActivePathContext } from '@/context/ActivePath'

const navigation = [
    { id: 1, title: 'Home', path: 'home' },
    { id: 2, title: 'About', path: 'about' },
    { id: 3, title: 'Education', path: 'education' },
    { id: 4, title: 'Skills', path: 'skills' },
    { id: 4, title: 'Contact', path: 'contact' }
]

export const NavigationBar: React.FC = () => {
    const { setActivePath } = useContext(ActivePathContext)

    const [burger, setBurger] = useState(false)
    const [activeSection, setActiveSection] = useState('home')
    const headerRef = useRef(null)

    useEffect(() => {
        // window.onscroll = () => {

        // }

        const handleHashFragmentAndScroll = () => {
            const hash = window.location.hash.slice(1)
            const matchingSection = navigation.find(({ path }) => path === hash);
            if (matchingSection) {
                setActiveSection(hash)
                setActivePath(hash)
            }

            const currentScrollPos = window.scrollY

            navigation.forEach(({ path }) => {
                const element = document.getElementById(path)
                if (element) {
                    const offset = element.offsetTop - 350
                    const height = element.offsetHeight

                    if (currentScrollPos >= offset && currentScrollPos < offset + height) {
                        setActiveSection(path)
                        setActivePath(path)
                    }
                }
            })
        }

        handleHashFragmentAndScroll()

        window.addEventListener('hashchange', handleHashFragmentAndScroll)
        window.addEventListener('scroll', handleHashFragmentAndScroll)

        return () => {
            window.removeEventListener('hashchange', handleHashFragmentAndScroll)
            window.removeEventListener('scroll', handleHashFragmentAndScroll)
        }
    }, [])

    const handleClick = (path) => () => {
        const element = document.getElementById(path);
        const offset = 50
        const scrollToOffset = element.offsetTop - offset;

        setBurger(false)

        window.scrollTo({
            top: scrollToOffset,
            behavior: "smooth",
        });
    }

    return (
        <header className={styles.header} ref={headerRef}>
            <a className={styles.logo}>My portfolio.<span className={styles.animate} style={{ '--i': 1 }}></span></a>
            <div className={styles.menuIcon} onClick={() => setBurger(!burger)}>
                {burger ? <FontAwesomeIcon icon={faXmark} /> : <FontAwesomeIcon icon={faBars} />}
                <span className={styles.animate} style={{ '--i': 2 }}></span>
            </div>
            <nav>
                <ul className={`${styles.navbar} ${burger ? styles.toogle : ''}`}>
                    {navigation.map(({ id, title, path }) => (
                        <li key={id} >
                            <a
                                className={`${styles.link} ${path === activeSection ? styles.active : ''}`}
                                onClick={handleClick(path)}
                            >
                                {title}
                            </a>
                        </li>
                    ))}
                    <span className={styles.activeNav}></span>
                    <span className={styles.animate} style={{ '--i': 2 }}></span>
                </ul>
            </nav>
        </header>
    )
}