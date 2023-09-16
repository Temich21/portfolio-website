"use client"
import { FontAwesomeIcon } from '../../../node_modules/@fortawesome/react-fontawesome/index'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons/index'
import styles from './Footer.module.scss'
import { ActivePathContext } from '@/context/ActivePath'
import { useContext } from 'react'

export const Footer = () => {
    const { activePath } = useContext(ActivePathContext)

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }

    return (
        <footer className={styles.footer}>
            <div className={styles.footerText}>
                <p>Copyright &copy; 2023 by Artem | All Rights Reserved</p>
                <span className={`${styles.animate} ${activePath === 'contact' ? styles.showAnimate : ''}`} ></span>
            </div>
            <button className={styles.footerIconTop} type="button" onClick={scrollToTop} >
                <div className={styles.icon}><FontAwesomeIcon icon={faArrowUp} beat className={styles.arrow} /></div>
                <span className={`${styles.animate} ${activePath === 'contact' ? styles.showAnimate : ''}`} ></span>
            </button>
        </footer>
    )
}