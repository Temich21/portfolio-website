import styles from './Button.module.scss'

export const Button = ({ type = "button", children }) => {
    return (
        <button type={type} className={styles.btn}>{children}</button>
    )
}